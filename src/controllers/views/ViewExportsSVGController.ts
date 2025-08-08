import { type WebviewPanel, Uri, ViewColumn, window, l10n } from 'vscode'

import { ListerWebviewController } from '../listener'

import { CONFIG_KEY } from '@/constants/misc'
import { SVGPostMessage } from '@/enum/ViewExportsSVG'
import type { SVGErrors, ViewExportSVG } from '@/types/ViewExportsSVG'
import { isEmpty } from '@/utilities/misc'
import { WebviewContent } from '@/views/WebviewContent'

export class ViewExportsSVGController extends ListerWebviewController {
  public static currentPanel: ViewExportsSVGController | undefined
  public static readonly configName: string = CONFIG_KEY

  private constructor(
    panel: WebviewPanel,
    extensionUri: Uri,
    viewExportSVG: ViewExportSVG[],
    processedFiles: number
  ) {
    super(panel, viewExportSVG)

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
    const webviewContent = new WebviewContent(this._panel.webview, extensionUri, processedFiles)
    this._panel.webview.html = webviewContent._content
  }

  /**
   * Dispose of the panel and clean up resources.
   */
  public dispose(): void {
    ViewExportsSVGController.currentPanel = undefined

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
   * Initializes the panel and starts the extraction process.
   */
  public init(): void {
    if (!isEmpty(ViewExportsSVGController.currentPanel)) {
      ViewExportsSVGController.currentPanel._panel.reveal(ViewColumn.Active)
      this._postMessage(SVGPostMessage.SendRunLoading, '/dashboard')
    }
  }

  /**
   * Renders the current webview panel if it exists, otherwise a new webview panel
   * will be created and displayed.
   * @param extensionUri The URI of the directory containing the extension.
   * @param svgComponents The array of SVG exports or an SvgExportErrors object.
   */
  public static render(
    extensionUri: Uri,
    viewExportSVG: ViewExportSVG[],
    processedFiles = 0
  ): void {
    const column = window.activeTextEditor?.viewColumn ?? ViewColumn.One

    // If we already have a panel, show it
    if (!isEmpty(ViewExportsSVGController.currentPanel)) {
      this.update(viewExportSVG, processedFiles)
      return
    }

    // Otherwise, create a new panel
    const panel = window.createWebviewPanel(
      ViewExportsSVGController.configName,
      l10n.t('View Exports SVG'),
      column,
      {
        enableScripts: true, // Enable JavaScript in the webview
        retainContextWhenHidden: true, // Retain the webview's context when it is hidden
        // Restrict the webview to only load content from the extension's directories
        localResourceRoots: [
          Uri.joinPath(extensionUri, 'assets'),
          Uri.joinPath(extensionUri, 'out/cjs'),
          Uri.joinPath(extensionUri, 'client/dist'),
        ],
      }
    )
    panel.iconPath = Uri.joinPath(extensionUri, 'assets', 'JT View Exports SVG - ICON.svg')

    ViewExportsSVGController.currentPanel = new ViewExportsSVGController(
      panel,
      extensionUri,
      viewExportSVG,
      processedFiles
    )

    ViewExportsSVGController.currentPanel.initialize(processedFiles)
  }

  /**
   * Update the contents of the webview panel displaying SVG components.
   * @param svgComponents - SVG components or error data to display.
   */
  public static update(viewExportSVG: ViewExportSVG[], processedFiles: number): void {
    if (!isEmpty(ViewExportsSVGController.currentPanel)) {
      ViewExportsSVGController.currentPanel.updateLayout(processedFiles, viewExportSVG)

      if (!isEmpty(viewExportSVG)) {
        ViewExportsSVGController.currentPanel._postMessage(
          SVGPostMessage.SendSVGComponents,
          viewExportSVG
        )
      } else {
        const error: SVGErrors = { location: {}, message: l10n.t('No SVG components found...') }
        ViewExportsSVGController.currentPanel._postMessage(SVGPostMessage.SendSVGError, error)
      }
    }
  }
}
