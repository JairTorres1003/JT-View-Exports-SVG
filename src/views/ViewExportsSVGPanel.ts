import {
  env,
  type Disposable,
  type Webview,
  type WebviewPanel,
  Uri,
  ViewColumn,
  window,
  l10n,
} from 'vscode'

import { AssetsPathsController, LastScanDateController } from '@/controllers/config'
import { SVGPostMessage, SVGReceiveMessage } from '@/enum/ViewExportsSVG'
import { type HandlerArgs } from '@/interfaces/misc'
import {
  type SVGErrors,
  type SVGFile,
  type SVGPlayground,
  type ViewExportSVG,
} from '@/interfaces/ViewExportsSVG'
import {
  type GetWebviewAssets,
  type HandlerReceiveMessage,
  type FuncPostMessage,
  type ReceiveMessage,
} from '@/interfaces/views/ViewExportsSVGPanel'
import {
  getNonce,
  openFile,
  pathToSVGFile,
  scanningFiles,
  scanningWorkspace,
} from '@/utilities/files'
import { getUnknownError, isEmpty } from '@/utilities/misc'
import { filteredExports } from '@/utilities/svg/filtered'
import { playground } from '@/utilities/svg/playground'
import { getCurrentTheme, getStyles, getUri, svgFileToUri } from '@/utilities/vscode'

export class ViewExportsSVGPanel {
  public static currentPanel: ViewExportsSVGPanel | undefined
  public static readonly configName: string = 'JT-View-Exports-SVG'

  private viewExportSVG: ViewExportSVG[] = []

  private readonly _panel: WebviewPanel
  private readonly _disposables: Disposable[] = []

  private constructor(panel: WebviewPanel, extensionUri: Uri, viewExportSVG: ViewExportSVG[]) {
    this._panel = panel
    this.viewExportSVG = viewExportSVG

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
   * Dispose of the panel and clean up resources.
   */
  public dispose(): void {
    ViewExportsSVGPanel.currentPanel = undefined

    // Clean up resources
    this._panel.dispose()

    while (this._disposables.length > 0) {
      const disposable = this._disposables.pop()
      if (!isEmpty(disposable)) {
        disposable.dispose()
      }
    }
  }

  /**
   * Runs the extraction process for the current panel.
   */
  public RunExtraction(): void {
    if (!isEmpty(ViewExportsSVGPanel.currentPanel)) {
      ViewExportsSVGPanel.currentPanel._panel.reveal(ViewColumn.Active)
      this._postMessage(SVGPostMessage.SendRunExtraction, true)
    }
  }

  /**
   * Renders the current webview panel if it exists, otherwise a new webview panel
   * will be created and displayed.
   * @param extensionUri The URI of the directory containing the extension.
   * @param svgComponents The array of SVG exports or an SvgExportErrors object.
   */
  public static render(extensionUri: Uri, viewExportSVG: ViewExportSVG[]): void {
    const column = window.activeTextEditor?.viewColumn ?? ViewColumn.One

    // If we already have a panel, show it
    if (!isEmpty(ViewExportsSVGPanel.currentPanel)) {
      this.update(viewExportSVG)
      return
    }

    // Otherwise, create a new panel
    const panel = window.createWebviewPanel(
      ViewExportsSVGPanel.configName,
      l10n.t('extension.title'),
      column,
      {
        enableScripts: true, // Enable JavaScript in the webview
        retainContextWhenHidden: true, // Retain the webview's context when it is hidden
        // Restrict the webview to only load content from the extension's directories
        localResourceRoots: [
          Uri.joinPath(extensionUri, 'assets'),
          Uri.joinPath(extensionUri, 'out'),
          Uri.joinPath(extensionUri, 'client/dist/assets'),
        ],
      }
    )
    panel.iconPath = Uri.joinPath(extensionUri, 'assets', 'JT View Exports SVG - ICON.svg')

    ViewExportsSVGPanel.currentPanel = new ViewExportsSVGPanel(panel, extensionUri, viewExportSVG)
  }

  /**
   * Update the contents of the webview panel displaying SVG components.
   * @param svgComponents - SVG components or error data to display.
   */
  public static update(viewExportSVG: ViewExportSVG[]): void {
    if (!isEmpty(ViewExportsSVGPanel.currentPanel)) {
      ViewExportsSVGPanel.currentPanel.viewExportSVG = viewExportSVG

      if (!isEmpty(viewExportSVG)) {
        ViewExportsSVGPanel.currentPanel._postMessage(
          SVGPostMessage.SendSVGComponents,
          viewExportSVG
        )
      } else {
        const error: SVGErrors = { location: {}, message: l10n.t('No SVG components found...') }
        ViewExportsSVGPanel.currentPanel._postMessage(SVGPostMessage.SendSVGError, error)
      }
    }
  }

  /**
   * Returns an object containing the URIs for the webview assets.
   * @param webview - The webview instance.
   * @param extensionUri - The URI of the extension.
   * @returns An object with the URIs for the webview assets.
   */
  private _getWebviewAssets(webview: Webview, extensionUri: Uri): GetWebviewAssets {
    const getAssetUri = (...asset: string[]): string =>
      getUri(webview, extensionUri, ['client', 'dist', 'assets', ...asset]).toString()

    return {
      icon: getAssetUri('favicon.ico'),
      index: getAssetUri('index.js'),
      styles: getAssetUri('index.css'),
    }
  }

  /**
   * Generates the HTML content for the webview.
   *
   * @param webview - The webview instance.
   * @param extensionUri - The URI of the extension.
   * @returns The generated HTML content.
   */
  private _getWebviewContent(webview: Webview, extensionUri: Uri): string {
    const assets = this._getWebviewAssets(webview, extensionUri)
    const nonce = getNonce()

    return /* html */ `
      <!DOCTYPE html>
      <html lang="${env.language ?? 'en'}">
        <head>
          <meta charset="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="${assets.icon}" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
          <link href="${assets.styles}" rel="stylesheet" />
          <title>${l10n.t('extension.title')}</title>
        </head>
        <body>
          <div id="root"></div>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <script type="module" nonce="${nonce}" src="${assets.index}"></script>
        </body>
      </html>
    `
  }

  /**
   * Sends a post message to the webview.
   *
   * @param type - The type of the message.
   * @param data - The data to be sent with the message.
   */
  private readonly _postMessage: FuncPostMessage = (type, data) => {
    this._panel.webview.postMessage({ type, data }).then(undefined, (error) => {
      console.error(l10n.t('Error posting message to webview:'), error)
    })
  }

  /**
   * Sets up a message listener for the webview panel.
   * @param webview The webview instance.
   */
  private _setWebviewMessageListener(webview: Webview): void {
    try {
      const handlers: HandlerReceiveMessage = {
        [SVGReceiveMessage.ExtractSVGComponent]: this._extractSVGComponent.bind(this),
        [SVGReceiveMessage.GetAssetsPath]: this._getAssetsPath.bind(this),
        [SVGReceiveMessage.GetLanguage]: this._getLanguage.bind(this),
        [SVGReceiveMessage.GetLastScanDate]: this._getLastScanDate.bind(this),
        [SVGReceiveMessage.GetSVGComponents]: this._getSVGComponents.bind(this),
        [SVGReceiveMessage.GetTheme]: this._getTheme.bind(this),
        [SVGReceiveMessage.GetViewAssets]: this._getViewAssets.bind(this),
        [SVGReceiveMessage.OpenFile]: openFile.bind(this),
        [SVGReceiveMessage.PlaygroundSVGComponents]: this._playgroundSVGComponents.bind(this),
        [SVGReceiveMessage.RemoveAssets]: this._removeAssets.bind(this),
        [SVGReceiveMessage.ScanWorkspace]: this._scanWorkspace.bind(this),
        [SVGReceiveMessage.SearchSVGComponents]: this._searchSVGComponents.bind(this),
        [SVGReceiveMessage.GetVsCodeStyles]: this._vscodeStyles.bind(this),
      }

      const listener = (event: ReceiveMessage): void => {
        const handler = handlers[event.type] as (arg0?: HandlerArgs<HandlerReceiveMessage>) => void

        if (isEmpty(handler) || typeof handler !== 'function') {
          console.error(l10n.t('No handler found for event:'), event)
          return
        }

        if ('data' in event) {
          handler.call(this, event.data)
        } else {
          handler.call(this)
        }
      }

      webview.onDidReceiveMessage(listener, undefined, this._disposables)
    } catch (error) {
      const errorMessage = l10n.t('Error setting webview message listener')
      console.error(errorMessage, error)
      window.showErrorMessage(errorMessage).then(undefined, console.error)
    }
  }

  /**
   * Extracts SVG components from the given files.
   * @param files - An array of file paths.
   */
  private _extractSVGComponent(files: string[]): void {
    Promise.all(files.map(pathToSVGFile)).then((resolvedFiles) => {
      scanningFiles(resolvedFiles.map(svgFileToUri)).catch(console.error)
    }, console.error)
  }

  /**
   * Retrieves the assets path and sends it as a post message.
   */
  private _getAssetsPath(): void {
    new AssetsPathsController().getAssetsPath().then((assetsPath) => {
      this._postMessage(SVGPostMessage.SendAssetsPath, assetsPath)
    }, console.error)
  }

  /**
   * Gets the language for the SVG panel.
   * If the language is not set, it defaults to 'en'.
   */
  private _getLanguage(): void {
    this._postMessage(SVGPostMessage.SendLanguage, env.language ?? 'en')
  }

  /**
   * Retrieves the last scan date and sends it as a post message.
   */
  private _getLastScanDate(): void {
    const config = new LastScanDateController()
    this._postMessage(SVGPostMessage.SendLastScanDate, config._dateString)
  }

  /**
   * Retrieves the SVG components and sends them as a post message.
   */
  private _getSVGComponents(): void {
    this._postMessage(SVGPostMessage.SendRunExtraction, true)

    if (!isEmpty(this.viewExportSVG)) {
      this._postMessage(SVGPostMessage.SendSVGComponents, this.viewExportSVG)
    } else {
      this._postMessage(SVGPostMessage.SendSVGError, {
        location: {},
        message: l10n.t('No SVG components found...'),
      })
    }
  }

  /**
   * Gets the theme and sends it as a post message.
   */
  private _getTheme(): void {
    this._postMessage(SVGPostMessage.SendTheme, getCurrentTheme())
  }

  /**
   * Retrieves the view assets for the given SVG files.
   * @param files - An array of SVG files.
   */
  private _getViewAssets(files: SVGFile[]): void {
    scanningFiles(files.map(svgFileToUri)).catch(console.error)
  }

  /**
   * Plays the SVG components in the playground.
   * @param component - The SVG playground component.
   */
  private _playgroundSVGComponents(component: SVGPlayground): void {
    playground(component)
      .then((result) => {
        if ('component' in result) {
          this._postMessage(SVGPostMessage.SendSVGPlayground, result)
        } else {
          this._postMessage(SVGPostMessage.SendPlaygroundError, result)
        }
      })
      .catch((error) => {
        const errorMessage = l10n.t('Error generating SVG playground {error}', {
          error: getUnknownError(error),
        })
        console.error(errorMessage, error)
        this._postMessage(SVGPostMessage.SendPlaygroundError, {
          message: errorMessage,
          location: {},
        })
      })
  }

  /**
   * Removes the specified SVG files from the assets.
   * @param files - An array of SVGFile objects representing the files to be removed.
   */
  private _removeAssets(files: SVGFile[]): void {
    new AssetsPathsController().remove(files).then(() => {
      this._getAssetsPath()
    }, console.error)
  }

  /**
   * Scans the workspace for files and performs necessary operations.
   */
  private _scanWorkspace(): void {
    scanningWorkspace().then(async (files) => {
      await scanningFiles(files)
      this._getLastScanDate()
    }, console.error)
  }

  /**
   * Searches for SVG components based on the provided query.
   * @param query - The search query.
   */
  private _searchSVGComponents(query: string): void {
    const filtered = filteredExports(this.viewExportSVG, query)

    if (Array.isArray(filtered)) {
      this._postMessage(SVGPostMessage.SendSVGFilteredComponents, filtered)
    } else {
      this._postMessage(SVGPostMessage.SendSVGError, filtered)
    }
  }

  /**
   * Retrieves the VS Code styles and sends them as a post message.
   */
  private _vscodeStyles(): void {
    const config = getStyles()
    this._postMessage(SVGPostMessage.SendVsCodeStyles, config)
  }
}
