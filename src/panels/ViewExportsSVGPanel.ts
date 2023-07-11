import { Disposable, Uri, ViewColumn, Webview, WebviewPanel, window } from "vscode";
import { getUri } from "../utilities/getUri";
import { getNonce } from "../utilities/getNonce";

/**
 * Webview panel for displaying SVG exports.
 */
export class ViewExportsSVGPanel {
  /**
   * Track the currently active panel. Only allow a single panel to exist at a time.
   */
  public static currentPanel: ViewExportsSVGPanel | undefined;

  public static readonly viewType = "JT-View-Exports-SVG";

  private readonly _panel: WebviewPanel;
  private _disposables: Disposable[] = [];

  /**
   * Create a new instance of the ViewExportsSVGPanel class.
   * @param panel The webview panel.
   * @param extensionUri The extension URI.
   */
  private constructor(panel: WebviewPanel, extensionUri: Uri) {
    this._panel = panel;

    // Listen for when the panel is disposed
    // This happens when the user closes the panel or when the panel is closed programmatically
    this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

    // Set the HTML content for the webview panel
    this._panel.webview.html = this._getWebviewContent(this._panel.webview, extensionUri);

    // Set an event listener to listen for messages passed from the webview context
    this._setWebviewMessageListener(this._panel.webview);
  }

  /**
   * Renders the current webview panel if it exists otherwise a new webview panel
   * will be created and displayed.
   * @param extensionUri The URI of the directory containing the extension.
   */
  public static render(extensionUri: Uri) {
    const column = window.activeTextEditor ? window.activeTextEditor.viewColumn : undefined;

    // If we already have a panel, show it
    if (ViewExportsSVGPanel.currentPanel) {
      ViewExportsSVGPanel.currentPanel._panel.reveal(column);
      return;
    }

    // Otherwise, create a new panel
    const panel = window.createWebviewPanel(
      ViewExportsSVGPanel.viewType,
      "View Exports SVG",
      column || ViewColumn.One,
      {
        // Enable JavaScript in the webview
        enableScripts: true,
        // Restrict the webview to only load content from the extension's directories
        localResourceRoots: [
          Uri.joinPath(extensionUri, "assets"),
          Uri.joinPath(extensionUri, "out"),
          Uri.joinPath(extensionUri, "webview-ui/build"),
        ],
      }
    );

    ViewExportsSVGPanel.currentPanel = new ViewExportsSVGPanel(panel, extensionUri);
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

  /**
   *
   */
  private _getWebviewContent(webview: Webview, extensionUri: Uri) {
    const icoUri = getUri(webview, extensionUri, ["webview-ui", "build", "assets", "favico.ico"]);
    const stylesUri = getUri(webview, extensionUri, ["webview-ui", "build", "assets", "index.css"]);
    const scriptUri = getUri(webview, extensionUri, ["webview-ui", "build", "assets", "index.js"]);

    const nonce = getNonce();

    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <link rel="icon" type="ico" href="${icoUri}" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
          <link rel="stylesheet" type="text/css" href="${stylesUri}">
          <title>View Exports SVG</title>
        </head>
        <body>
          <div id="root"></div>
          <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
        </body>
      </html>
    `;
  }

  /**
   *
   */
  private _setWebviewMessageListener(webview: Webview) {}
}
