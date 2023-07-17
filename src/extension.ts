import { ExtensionContext, commands, window, ProgressLocation } from "vscode";
import { ViewExportsSVGPanel } from "./panels/ViewExportsSVGPanel";
import { extractSVGComponentExports } from "./utilities/exportParser";

/**
 * Run the command and create or show the webview panel.
 * @param context The extension context.
 * @param item The selected item.
 * @param items The list of items.
 */
const runCommand = async (context: ExtensionContext, item: any, items: any[]) => {
  const selectedFiles: any[] = [];
  const REGEX_FILE = /\.(js|jsx|ts|tsx)$/i;
  const progressOptions = {
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
          selectedFiles.push(file.fsPath);
        }
      });
    } else {
      // Check if the selected item is a file with a supported extension
      if (REGEX_FILE.test(item.fsPath.slice(-4)) && item.scheme === "file") {
        selectedFiles.push(item.fsPath);
      }
    }

    // Extract the exports from selected files
    const svgComponents = await Promise.all(
      selectedFiles.map(async (filePath) => {
        try {
          const svgExports = await extractSVGComponentExports(filePath);
          return { filePath, svgExports };
        } catch (error) {
          console.error(`Error parsing file ${filePath}: ${error}`);
          return { filePath, svgExports: [] };
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
