import { commands, ExtensionContext, ProgressLocation, ProgressOptions, window } from "vscode";
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
const runCommand = async (context: ExtensionContext, item: any, items: any[]) => {
  const selectedFiles: any[] = [];
  const workspaceFolder: string = getWorkspaceFolder();
  const REGEX_FILE = /\.(js|jsx|ts|tsx)$/i;
  const progressOptions: ProgressOptions = {
    location: ProgressLocation.Notification,
    title: "Extracting SVG exports...",
    cancellable: false,
  };

  // Show loader message
  const progress: any = await window.withProgress(progressOptions, async () => {
    // Check if there are multiple items
    if (items && items?.length > 1) {
      items.forEach((file) => {
        // Check if the item is a file with a supported extension
        if (REGEX_FILE.test(file.fsPath.slice(-4)) && file.scheme === "file") {
          const relativePath: string = path.relative(workspaceFolder, item.fsPath);
          selectedFiles.push({ absolutePath: item.fsPath, relativePath });
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
          return { file, svgExports };
        } catch (error) {
          console.error(`Error parsing file ${file.absolutePath}: ${error}`);
          return { file, svgExports: [] };
        }
      })
    );

    // Create or show the webview panel
    ViewExportsSVGPanel.render(context.extensionUri, svgComponents);

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
