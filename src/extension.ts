import * as vscode from "vscode";

// const createPanel = async (
//   context: ExtensionContext
// ): Promise<WebviewPanel> => {
//   const panel = window.createWebviewPanel(
//     "viewExportsSVG",
//     "View Exports SVG",
//     { viewColumn: window.activeTextEditor?.viewColumn || 1 }
//   );

//   return panel;
// };

const runCommand = async (
  context: vscode.ExtensionContext,
  item: any,
  items: any[]
) => {
  const selectedFiles: any[] = [];
  const selectedFolders: any[] = [];

  ViewExportsSVGPanel.createOrShow(context.extensionUri);
};

// this method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "JT-View-Exports-SVG.showMenu",
      (item: any, items: any[]) => runCommand(context, item, items)
    )
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}

function getWebviewOptions(extensionUri: vscode.Uri): vscode.WebviewOptions {
  return {
		// Enable javascript in the webview
		enableScripts: true,

		// And restrict the webview to only loading content from our extension's `assets` directory.
		localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'assets')]
	};
}


/**
 * Manages view exports svg webview panels
 */
class ViewExportsSVGPanel {
  /**
   * Track the currently panel. Only allow a single panel to exist at a time.
   */
  public static currentPanel: ViewExportsSVGPanel | undefined;

  public static readonly viewType = "JT-View-Exports-SVG";

  private readonly _panel: vscode.WebviewPanel;
  private readonly _extensionUri: vscode.Uri;
  private _disposables: vscode.Disposable[] = [];

  private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
    this._panel = panel;
		this._extensionUri = extensionUri;
	}

  public static createOrShow(extensionUri: vscode.Uri) {
    const column = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined;

    // If we already have a panel, show it.
    if (ViewExportsSVGPanel.currentPanel) {
      ViewExportsSVGPanel.currentPanel._panel.reveal(column);
      return;
    }

    // Otherwise, create a new panel.
    const panel = vscode.window.createWebviewPanel(
      ViewExportsSVGPanel.viewType,
      "View Exports SVG",
      column || vscode.ViewColumn.One,
      getWebviewOptions(extensionUri)
    );

    ViewExportsSVGPanel.currentPanel = new ViewExportsSVGPanel(panel, extensionUri);
  }
}
