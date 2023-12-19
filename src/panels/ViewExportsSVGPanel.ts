import {
  type Disposable,
  Uri,
  ViewColumn,
  type Webview,
  type WebviewPanel,
  env,
  window,
} from 'vscode'

import { type SvgExport, type SvgExportErrors } from '../interfaces/svgExports'
import {
  type ReceiveMessageData,
  type PostMessageCommand,
  type CommandHandler,
} from '../interfaces/vscode'
import { getInputFiles, getNonce, getUri } from '../utilities/fileSystem'
import { getTranslations } from '../utilities/vscode/getLocaleLanguage'
import { getCurrentTheme } from '../utilities/vscode/getTheme'
import { customSvgComponent } from '../utilities/svg/customSvgComponent'
import { filterSvgComponents } from '../utilities/svg/filterSvgComponents'
import { getConfigurationVsCode } from '../utilities/vscode/getConfigurationVsCode'

/**
 * Webview panel for displaying SVG exports.
 */
export class ViewExportsSVGPanel {
  /**
   * Track the currently active panel. Only allow a single panel to exist at a time.
   */
  public static currentPanel: ViewExportsSVGPanel | undefined

  public static readonly viewType = 'JT-View-Exports-SVG'

  private svgComponents: SvgExport[] | SvgExportErrors
  private readonly _panel: WebviewPanel
  private readonly _disposables: Disposable[] = []

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
    this.svgComponents = svgComponents
    this._panel = panel

    // Listen for when the panel is disposed
    // This happens when the user closes the panel or when the panel is closed programmatically
    this._panel.onDidDispose(
      () => {
        this.dispose()
      },
      null,
      this._disposables
    )

    // Set the HTML content for the webview panel
    this._panel.webview.html = this._getWebviewContent(this._panel.webview, extensionUri)

    // Set an event listener to listen for messages passed from the webview context
    this._setWebviewMessageListener(this._panel.webview)
  }

  /**
   * Renders the current webview panel if it exists, otherwise a new webview panel
   * will be created and displayed.
   * @param extensionUri The URI of the directory containing the extension.
   * @param svgComponents The array of SVG exports or an SvgExportErrors object.
   */
  public static render(extensionUri: Uri, svgComponents: SvgExport[] | SvgExportErrors) {
    const column = window.activeTextEditor ? window.activeTextEditor.viewColumn : undefined
    const i18n = getTranslations()

    // If we already have a panel, show it
    if (ViewExportsSVGPanel.currentPanel) {
      this.update(svgComponents)
      return
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
          Uri.joinPath(extensionUri, 'assets'),
          Uri.joinPath(extensionUri, 'out'),
          Uri.joinPath(extensionUri, 'webview-ui/build'),
        ],
      }
    )
    panel.iconPath = Uri.joinPath(extensionUri, 'assets', 'JT View Exports SVG - ICON.svg')

    ViewExportsSVGPanel.currentPanel = new ViewExportsSVGPanel(panel, extensionUri, svgComponents)
  }

  /**
   * Update the contents of the webview panel displaying SVG components.
   * @param svgComponents - SVG components or error data to display.
   */
  public static update(svgComponents: SvgExport[] | SvgExportErrors) {
    // If we already have a panel, show it
    if (ViewExportsSVGPanel.currentPanel) {
      const svgComponentsJson = JSON.stringify(svgComponents)
      ViewExportsSVGPanel.currentPanel.svgComponents = svgComponents
      ViewExportsSVGPanel.currentPanel._postMessage('svgComponents', svgComponentsJson)
      ViewExportsSVGPanel.currentPanel._panel.reveal(ViewColumn.Active)
    }
  }

  /**
   * Dispose of the panel and clean up resources.
   */
  public dispose() {
    ViewExportsSVGPanel.currentPanel = undefined

    // Clean up resources
    this._panel.dispose()

    while (this._disposables.length) {
      const disposable = this._disposables.pop()
      if (disposable) {
        disposable.dispose()
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
    const i18n = getTranslations()
    const dirs = ['webview-ui', 'build', 'assets']

    // Get the URIs for the required assets
    const icoUri = getUri(webview, extensionUri, [...dirs, 'favicon.ico']).toString()
    const stylesUri = getUri(webview, extensionUri, [...dirs, 'index.css']).toString()
    const scriptUri = getUri(webview, extensionUri, [...dirs, 'index.js']).toString()

    // Get the URI to monaco-editor
    const jsonWorkerUri = getUri(webview, extensionUri, [...dirs, 'json.worker.js']).toString()
    const cssWorkerUri = getUri(webview, extensionUri, [...dirs, 'css.worker.js']).toString()
    const htmlWorkerUri = getUri(webview, extensionUri, [...dirs, 'html.worker.js']).toString()
    const tsWorkerUri = getUri(webview, extensionUri, [...dirs, 'ts.worker.js']).toString()
    const editorWorkerUri = getUri(webview, extensionUri, [...dirs, 'editor.worker.js']).toString()
    const javascriptUri = getUri(webview, extensionUri, [...dirs, 'javascript.js']).toString()
    const typescriptUri = getUri(webview, extensionUri, [...dirs, 'typescript.js']).toString()
    const tsModeUri = getUri(webview, extensionUri, [...dirs, 'tsMode.js']).toString()
    const fontUri = getUri(webview, extensionUri, [...dirs, 'codicon.ttf']).toString()

    console.log('fontUri', fontUri)
    // Generate a nonce for script elements
    const nonce = getNonce()

    // Return the HTML content for the webview panel
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <link rel="icon" type="ico" href="${icoUri}" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline' ${webview.cspSource}; script-src 'nonce-${nonce}'; worker-src ${webview.cspSource}; font-src 'self' vscode-resource.vscode-cdn.net;">
          <link rel="stylesheet" type="text/css" href="${stylesUri}">
          <link rel="stylesheet" type="font/ttf" href="${fontUri}">
          <title>${i18n.panelTitle}</title>
        </head>
        <body>
          <div id="root"></div>
          <script type="module" nonce="${nonce}">
            self.MonacoEnvironment = {
              getWorkerUrl: function (moduleId, label) {
                if (label === 'json') return '${jsonWorkerUri}';
                if (label === 'css' || label === 'scss' || label === 'less') return '${cssWorkerUri}';
                if (label === 'html' || label === 'handlebars' || label === 'razor') return '${htmlWorkerUri}';
                if (label === 'typescript' || label === 'javascript') return '${tsWorkerUri}';
                return '${editorWorkerUri}';
            }
          </script>
          <script type="module" nonce="${nonce}" src="${javascriptUri}"></script>
          <script type="module" nonce="${nonce}" src="${typescriptUri}"></script>
          <script type="module" nonce="${nonce}" src="${tsModeUri}"></script>
          <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
        </body>
      </html>
    `
  }

  /**
   * Handles the request for SVG components.
   */
  private handleRequestSvgComponents(): void {
    const svgComponentsJson = JSON.stringify(this.svgComponents)
    this._postMessage('svgComponents', svgComponentsJson)
  }

  /**
   * Handles the request to get the current theme.
   */
  private handleGetCurrentTheme(): void {
    const theme = getCurrentTheme()
    this._postMessage('currentTheme', theme)
  }

  /**
   * Handles the search for SVG components based on a filter.
   * @param message The received message data.
   */
  private handleSearchSvgComponents(message: ReceiveMessageData): void {
    const filter = message.data
    const svgComponents = filterSvgComponents(this.svgComponents as SvgExport[], filter)
    const svgComponentsJson = JSON.stringify(svgComponents)
    this._postMessage('filteredSvgComponents', svgComponentsJson)
  }

  /**
   * Handles the request to get translations.
   */
  private handleGetTranslations(): void {
    const language = env.language || 'en'
    this._postMessage('language', language)
  }

  /**
   * Handles the extraction of icons from a dropped file.
   * @param message The received message data.
   */
  private handleExtractIconsFile(message: ReceiveMessageData): void {
    getInputFiles(message.data).catch((error) => {
      console.error('Failed to extract icons from file:', error)
    })
  }

  /**
   * Handles the extraction of icons from the playground.
   * @param message The received message data.
   */
  private handlePlayground(message: ReceiveMessageData): void {
    const data = JSON.parse(message.data)
    customSvgComponent(data)
      .then((newSvgComponent) => {
        const result = newSvgComponent
        this._postMessage('customSvgComponent', JSON.stringify(result))
      })
      .catch((error) => {
        console.error('Failed to extract icons from playground:', error)
        const result = { name: 'Error', message: error.message, type: 'error' }
        this._postMessage('customSvgComponent', JSON.stringify(result))
      })
  }

  /**
   * Handles the request to get the VS Code configuration.
   */
  private handleConfiguration(): void {
    const config = getConfigurationVsCode()
    this._postMessage('configurationVsCode', JSON.stringify(config))
  }

  /**
   * Sets up a message listener for the webview panel.
   * @param webview The webview instance.
   */
  private _setWebviewMessageListener(webview: Webview) {
    const commandHandlers: CommandHandler = {
      requestSvgComponents: this.handleRequestSvgComponents.bind(this),
      getConfigurationVsCode: this.handleConfiguration.bind(this),
      getCurrentTheme: this.handleGetCurrentTheme.bind(this),
      searchSvgComponents: this.handleSearchSvgComponents.bind(this),
      getTranslations: this.handleGetTranslations.bind(this),
      extractIconsFile: this.handleExtractIconsFile.bind(this),
      playgroundSvgComponents: this.handlePlayground.bind(this),
    }

    webview.onDidReceiveMessage(
      (message: ReceiveMessageData) => {
        const handler = commandHandlers[message.command]
        if (handler) {
          handler.call(this, message)
        }
      },
      undefined,
      this._disposables
    )
  }

  /**
   * Sends a message to the webview.
   * @param command The command to be included in the message.
   * @param data An optional parameter representing the data payload of the message.
   */
  private _postMessage(command: PostMessageCommand, data?: any) {
    this._panel.webview.postMessage({ command, data }).then(undefined, (error) => {
      console.error('Failed to send message:', error)
    })
  }
}
