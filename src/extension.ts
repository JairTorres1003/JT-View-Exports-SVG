import { ExtensionContext, commands } from "vscode";
import { ViewExportsSVGPanel } from "./panels/ViewExportsSVGPanel";

/**
 * Run the command and create or show the webview panel.
 * @param context The extension context.
 * @param item The selected item.
 * @param items The list of items.
 */
const runCommand = async (context: ExtensionContext, item: any, items: any[]) => {
  const selectedFiles: any[] = [];
  const REGEX_FILE = /\.(js|jsx|ts|tsx)$/i;

  // Check if there are multiple items
  if (items && items?.length > 1) {
    items.forEach((file) => {
      // Check if the item is a file with a supported extension
      if (REGEX_FILE.test(file.fsPath.slice(-4)) && file.scheme === "file") {
        selectedFiles.push(file.fsPath);
      }
    });
  } else {
    // Check if the selected item is a file with a supported extension
    if (REGEX_FILE.test(item.fsPath.slice(-4)) && item.scheme === "file") {
      selectedFiles.push(item.fsPath);
    }
  }

  console.log(selectedFiles);

  // Create or show the webview panel
  ViewExportsSVGPanel.render(context.extensionUri);
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
