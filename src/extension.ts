import * as vscode from "vscode";

/**
 * Run the command and create or show the webview panel.
 * @param context The extension context.
 * @param item The selected item.
 * @param items The list of items.
 */
const runCommand = async (
  context: vscode.ExtensionContext,
  item: any,
  items: any[]
) => {
  const selectedFiles: any[] = [];
  const selectedFolders: any[] = [];

  // Create or show the webview panel
  ViewExportsSVGPanel.createOrShow(context.extensionUri);
};

/**
 * This method is called when your extension is activated.
 * @param context The extension context.
 */
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "JT-View-Exports-SVG.showMenu",
      (item: any, items: any[]) => runCommand(context, item, items)
    )
  );
}

/**
 * This method is called when your extension is deactivated.
 */
export function deactivate() {}

/**
 * Get the webview options.
 * @param extensionUri The extension URI.
 * @returns The webview options.
 */
function getWebviewOptions(extensionUri: vscode.Uri): vscode.WebviewOptions {
  return {
    // Enable JavaScript in the webview
    enableScripts: true,
    // Restrict the webview to only load content from the extension's `assets` and `webview` directories
    localResourceRoots: [
      vscode.Uri.joinPath(extensionUri, "src", "assets"),
      vscode.Uri.joinPath(extensionUri, "src", "webview"),
    ],
  };
}

/**
 * Webview panel for displaying SVG exports.
 */
class ViewExportsSVGPanel {
  /**
   * Track the currently active panel. Only allow a single panel to exist at a time.
   */
  public static currentPanel: ViewExportsSVGPanel | undefined;

  public static readonly viewType = "JT-View-Exports-SVG";

  private readonly _panel: vscode.WebviewPanel;
  private readonly _extensionUri: vscode.Uri;
  private _disposables: vscode.Disposable[] = [];

  /**
   * Create a new instance of the ViewExportsSVGPanel class.
   * @param panel The webview panel.
   * @param extensionUri The extension URI.
   */
  private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
    this._panel = panel;
    this._extensionUri = extensionUri;

    // Set the webview's initial HTML content
    this._update();

    // Listen for when the panel is disposed
    // This happens when the user closes the panel or when the panel is closed programmatically
    this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
  }

  /**
   * Create a new panel or show an existing one.
   * @param extensionUri The extension URI.
   */
  public static createOrShow(extensionUri: vscode.Uri) {
    const column = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined;

    // If we already have a panel, show it
    if (ViewExportsSVGPanel.currentPanel) {
      ViewExportsSVGPanel.currentPanel._panel.reveal(column);
      return;
    }

    // Otherwise, create a new panel
    const panel = vscode.window.createWebviewPanel(
      ViewExportsSVGPanel.viewType,
      "View Exports SVG",
      column || vscode.ViewColumn.One,
      getWebviewOptions(extensionUri)
    );

    ViewExportsSVGPanel.currentPanel = new ViewExportsSVGPanel(
      panel,
      extensionUri
    );
  }

  /**
   * Update the webview panel's content.
   */
  private _update() {
    this._panel.webview.html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>View Exports SVG</title>
      </head>
      <body>
        <div id="root">Hi, View Exports SVG!</div>
      </body>
      </html>
    `;
  }

  /**
   * Dispose of the panel and clean up resources.
   */
  public dispose() {
    ViewExportsSVGPanel.currentPanel = undefined;

    // Clean up resources
    this._panel.dispose();

    while (this._disposables.length) {
      const disposable = this._disposables.pop();
      if (disposable) {
        disposable.dispose();
      }
    }
  }
}
