import { commands, ExtensionContext, ProgressLocation, ProgressOptions, Uri, window } from "vscode";
import { SvgExport, SvgFile } from "./interfaces/svgExports";
import { ViewExportsSVGPanel } from "./panels/ViewExportsSVGPanel";
import { extractSVGComponentExports } from "./utilities/svg/exportParser";
import { getWorkspaceFolder } from "./utilities/getWorkspaceFolder";
import { getTranslations, loadLanguage } from "./utilities/getLocaleLanguage";
import * as path from "path";

/**
 * Run the command and create or show the webview panel.
 * @param {ExtensionContext} context The extension context.
 * @param {Uri} item The selected item.
 * @param {Uri[]} items The list of items.
 */
const runCommand = async (context: ExtensionContext, item: Uri, items: Uri[]) => {
  const i18n = getTranslations();
  const selectedFiles: SvgFile[] = [];
  const workspaceFolder: string = getWorkspaceFolder();
  const REGEX_FILE: RegExp = /\.(js|jsx|ts|tsx)$/i;
  const progressOptions: ProgressOptions = {
    location: ProgressLocation.Notification,
    title: i18n.progressTitle,
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
    const svgComponents: SvgExport[] = await Promise.all(
      selectedFiles.map(async (file) => {
        try {
          const svgExports = await extractSVGComponentExports(file.absolutePath);
          return { ...svgExports, file, lengthSvg: svgExports.svgComponents.length };
        } catch (error) {
          console.error(`Error parsing file ${file.absolutePath}: ${error}`);
          return { file, lengthExports: 0, lengthSvg: 0, svgComponents: [] };
        }
      })
    );

    // Create or show the webview panel
    ViewExportsSVGPanel.render(
      context.extensionUri,
      svgComponents.length > 0 ? svgComponents : { messageError: i18n.NoIconsFound }
    );
    console.log(`length svg: ${svgComponents[0].lengthSvg}/${svgComponents[0].lengthExports}`);

    return svgComponents;
  });

  // Hide the loader message
  progress.report({ increment: 100 });
  progress.dispose();
};

/**
 * This method is called when your extension is activated.
 * @param {ExtensionContext} context The extension context.
 */
export function activate(context: ExtensionContext) {
  // Load the local language
  loadLanguage(context.extensionUri);

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
