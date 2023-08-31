import { commands, ExtensionContext, Uri } from "vscode";

import { SvgExport, SvgExportErrors } from "./interfaces/svgExports";
import { ViewExportsSVGPanel } from "./panels/ViewExportsSVGPanel";
import { loadLanguage } from "./utilities/getLocaleLanguage";
import { processFiles } from "./utilities/commonFunctions";

/**
 * Run the command and create or show the webview panel.
 * @param {ExtensionContext} context The extension context.
 * @param {Uri} item The selected item.
 * @param {Uri[]} items The list of items.
 */
const runCommand = async (context: ExtensionContext, item: Uri, items: Uri[]) => {
  // Define the operation that will be executed after processing files
  const operation = (result: SvgExport[] | SvgExportErrors) => {
    // Create or show the webview panel
    ViewExportsSVGPanel.render(context.extensionUri, result);
  };

  // Determine the files to process
  const filesToProcess: Uri[] | null = items ? items : item ? [item] : null;

  processFiles(filesToProcess, null, operation);
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
