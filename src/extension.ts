import { commands, ExtensionContext, ProgressLocation, ProgressOptions, Uri, window } from "vscode";
import { SvgFile } from "./interfaces/svgExports";
import { ViewExportsSVGPanel } from "./panels/ViewExportsSVGPanel";
import { extractSVGComponentExports } from "./utilities/exportParser";
import { getWorkspaceFolder } from "./utilities/getWorkspaceFolder";
import * as path from "path";

/**
 * Run the command and create or show the webview panel.
 * @param context The extension context.
 * @param item The selected item.
 * @param items The list of items.
 */
const runCommand = async (context: ExtensionContext, item: Uri, items: Uri[]) => {
  const selectedFiles: SvgFile[] = [];
  const workspaceFolder: string = getWorkspaceFolder();
  const REGEX_FILE: RegExp = /\.(js|jsx|ts|tsx)$/i;
  const progressOptions: ProgressOptions = {
    location: ProgressLocation.Notification,
    title: "Extracting SVG exports...",
    cancellable: false,
  };

  // Show loader message
  const progress: any = await window.withProgress(progressOptions, async () => {
    // Check if there are multiple items
    if (items && items?.length > 1) {
      items.sort((a, b) => a.fsPath.localeCompare(b.fsPath));

      items.forEach((file) => {
        // Check if the item is a file with a supported extension
        if (REGEX_FILE.test(file.fsPath.slice(-4)) && file.scheme === "file") {
          const relativePath: string = path.relative(workspaceFolder, file.fsPath);
          selectedFiles.push({ absolutePath: file.fsPath, relativePath });
        }
      });
    } else {
      // Check if the selected item is a file with a supported extension
      if (REGEX_FILE.test(item.fsPath.slice(-4)) && item.scheme === "file") {
        const relativePath: string = path.relative(workspaceFolder, item.fsPath);
        selectedFiles.push({ absolutePath: item.fsPath, relativePath });
      }
    }

    // Extract the exports from selected files
    const svgComponents = await Promise.all(
      selectedFiles.map(async (file) => {
        try {
          const svgExports = await extractSVGComponentExports(file.absolutePath);
          return { file, svgComponents: svgExports };
        } catch (error) {
          console.error(`Error parsing file ${file.absolutePath}: ${error}`);
          return { file, svgComponents: [] };
        }
      })
    );

    // Create or show the webview panel
    ViewExportsSVGPanel.render(
      context.extensionUri,
      svgComponents.length > 0 ? svgComponents : { messageError: "No icons found" }
    );
    console.log([
      { file: svgComponents[0].file, svgComponents: svgComponents[0].svgComponents.slice(0, 20) },
    ]);

    return svgComponents;
  });

  // Hide the loader message
  progress.report({ increment: 100 });
  progress.dispose();
};

/**
 * This method is called when your extension is activated.
 * @param context The extension context.
 */
export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand("JT-View-Exports-SVG.showMenu", (item: any, items: any[]) =>
      runCommand(context, item, items)
    )
  );
}

/**
 * This method is called when your extension is deactivated.
 */
export function deactivate() {}
