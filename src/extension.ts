import { commands, ExtensionContext, ProgressLocation, ProgressOptions, Uri, window } from "vscode";
import * as path from "path";

import { SvgExport, SvgExportErrors, SvgFile } from "./interfaces/svgExports";
import { ViewExportsSVGPanel } from "./panels/ViewExportsSVGPanel";
import { getTranslations, loadLanguage } from "./utilities/getLocaleLanguage";
import { getWorkspaceFolder } from "./utilities/getWorkspaceFolder";
import { extractSVGComponentExports } from "./utilities/svg/exportParser";
import { REGEX_FILE } from "./utilities/regex";

/**
 * Run the command and create or show the webview panel.
 * @param {ExtensionContext} context The extension context.
 * @param {Uri} item The selected item.
 * @param {Uri[]} items The list of items.
 */
const runCommand = async (context: ExtensionContext, item: Uri, items: Uri[]) => {
  try {
    const i18n = getTranslations();
    const selectedFiles: SvgFile[] = [];
    const workspaceFolder: string = getWorkspaceFolder();
    const newError: SvgExportErrors = { messageError: "" };
    const progressOptions: ProgressOptions = {
      location: ProgressLocation.Notification,
      title: i18n.progressTitle,
      cancellable: false,
    };

    // Show loader message
    const progress = await window.withProgress(progressOptions, async (progress) => {
      if (!item && (!items || items.length === 0)) {
        newError.messageError = i18n.NoFileSelected;
        newError.fileSelected = 0;

        // Create or show the webview panel
        ViewExportsSVGPanel.render(context.extensionUri, newError);
        return;
      }

      const filesToProcess: Uri[] = items ? items : [item];

      filesToProcess.sort((a, b) => a.fsPath.localeCompare(b.fsPath));

      filesToProcess.forEach((file) => {
        // Check if the item is a file with a supported extension
        if (REGEX_FILE.test(file.fsPath.slice(-4)) && file.scheme === "file") {
          const relativePath: string = path.relative(workspaceFolder, file.fsPath);
          selectedFiles.push({ absolutePath: file.fsPath, relativePath });
        }
      });

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

      if (svgComponents.length <= 0 && selectedFiles.length > 0) {
        newError.messageError = i18n.NoIconsFound;
        newError.fileSelected = selectedFiles.length;
      }

      // Create or show the webview panel
      ViewExportsSVGPanel.render(
        context.extensionUri,
        svgComponents.length > 0 ? svgComponents : newError
      );

      return progress;
    });

    if (progress) {
      // Hide the loader message
      progress.report({ increment: 100 });
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
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
