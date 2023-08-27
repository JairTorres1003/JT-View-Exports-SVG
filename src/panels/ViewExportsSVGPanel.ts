import { Disposable, Uri, ViewColumn, Webview, WebviewPanel, env, window } from "vscode";
import { getUri } from "../utilities/getUri";
import { getNonce } from "../utilities/getNonce";
import { SvgExport, SvgExportErrors } from "../interfaces/svgExports";
import { getCurrentTheme } from "../utilities/getTheme";
import { ReciveMessageData, PostMessageCommand } from "../interfaces/vscode";
import { filterSvgComponents } from "../utilities/svg/filterSvgComponents";
import { getTranslations } from "../utilities/getLocaleLanguage";

/**
 * Webview panel for displaying SVG exports.
 */
export class ViewExportsSVGPanel {
  /**
   * Track the currently active panel. Only allow a single panel to exist at a time.
   */
  public static currentPanel: ViewExportsSVGPanel | undefined;

  public static readonly viewType = "JT-View-Exports-SVG";

  private svgComponents: SvgExport[] | SvgExportErrors;
  private readonly _panel: WebviewPanel;
  private _disposables: Disposable[] = [];

  /**
   * Create a new instance of the ViewExportsSVGPanel class.
   * @param panel The webview panel.
   * @param extensionUri The extension URI.
   * @param svgComponents The array of SVG exports or an SvgExportErrors object.
   */
  private constructor(
    panel: WebviewPanel,
    extensionUri: Uri,
    svgComponents: SvgExport[] | SvgExportErrors
  ) {
    this.svgComponents = svgComponents;
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
   * Renders the current webview panel if it exists, otherwise a new webview panel
   * will be created and displayed.
   * @param extensionUri The URI of the directory containing the extension.
   * @param svgComponents The array of SVG exports or an SvgExportErrors object.
   */
  public static render(extensionUri: Uri, svgComponents: SvgExport[] | SvgExportErrors) {
    const column = window.activeTextEditor ? window.activeTextEditor.viewColumn : undefined;
    const i18n = getTranslations();

    // If we already have a panel, show it
    if (ViewExportsSVGPanel.currentPanel) {
      const svgComponentsJson = JSON.stringify(svgComponents);
      ViewExportsSVGPanel.currentPanel.svgComponents = svgComponents;
      ViewExportsSVGPanel.currentPanel._postMessage("svgComponents", svgComponentsJson);
      ViewExportsSVGPanel.currentPanel._panel.reveal(ViewColumn.Active);
      return;
    }

    // Otherwise, create a new panel
    const panel = window.createWebviewPanel(
      ViewExportsSVGPanel.viewType,
      i18n.panelTitle,
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
    panel.iconPath = Uri.joinPath(extensionUri, "assets", "JT View Exports SVG - ICON.svg");

    ViewExportsSVGPanel.currentPanel = new ViewExportsSVGPanel(panel, extensionUri, svgComponents);
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
   * Gets the HTML content for the webview panel.
   * @param webview The webview instance.
   * @param extensionUri The URI of the directory containing the extension.
   * @returns The HTML content for the webview panel.
   */
  private _getWebviewContent(webview: Webview, extensionUri: Uri) {
    const i18n = getTranslations();
    // Get the URIs for the required assets
    const icoUri = getUri(webview, extensionUri, ["webview-ui", "build", "assets", "favico.ico"]);
    const stylesUri = getUri(webview, extensionUri, ["webview-ui", "build", "assets", "index.css"]);
    const scriptUri = getUri(webview, extensionUri, ["webview-ui", "build", "assets", "index.js"]);

    // Generate a nonce for script elements
    const nonce = getNonce();

    // Return the HTML content for the webview panel
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <link rel="icon" type="ico" href="${icoUri}" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline' ${webview.cspSource}; script-src 'nonce-${nonce}';">
          <link rel="stylesheet" type="text/css" href="${stylesUri}">
          <title>${i18n.panelTitle}</title>
        </head>
        <body>
          <div id="root"></div>
          <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
        </body>
      </html>
    `;
  }

  /**
   * Sets up a message listener for the webview panel.
   * @param webview The webview instance.
   */
  private _setWebviewMessageListener(webview: Webview) {
    webview.onDidReceiveMessage(
      (message: ReciveMessageData) => {
        if (message.command === "requestSvgComponents") {
          const svgComponentsJson = JSON.stringify(this.svgComponents);
          this._postMessage("svgComponents", svgComponentsJson);
        }
        if (message.command === "getCurrentTheme") {
          const theme = getCurrentTheme();
          this._postMessage("currentTheme", theme);
        }
        if (message.command === "searchSvgComponents") {
          const filter = message.data;

          const svgComponents = filterSvgComponents(this.svgComponents as SvgExport[], filter);
          const svgComponentsJson = JSON.stringify(svgComponents);
          this._postMessage("filteredSvgComponents", svgComponentsJson);
        }
        if (message.command === "getTranslations") {
          const language = env.language || "en";
          this._postMessage("language", language);
        }
      },
      undefined,
      this._disposables
    );
  }

  /**
   * Sends a message to the webview.
   * @param command The command to be included in the message.
   * @param data An optional parameter representing the data payload of the message.
   */
  private _postMessage(command: PostMessageCommand, data?: any) {
    this._panel.webview.postMessage({ command, data });
  }
}
