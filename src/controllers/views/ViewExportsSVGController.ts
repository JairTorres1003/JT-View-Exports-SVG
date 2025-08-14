import { type WebviewPanel, Uri, ViewColumn, window, l10n, type ExtensionContext } from 'vscode'

import { CONFIG_KEY } from '@/constants/misc'
import { SVGPostMessage } from '@/enum/ViewExportsSVG'
import type { SVGErrors, ViewExportSVG } from '@/types/ViewExportsSVG'
import { isEmpty } from '@/utilities/misc'
import { WebviewContent } from '@/views/WebviewContent'

import { ListerWebviewController } from '../listener'

export class ViewExportsSVGController extends ListerWebviewController {
  public static currentPanel: ViewExportsSVGController | undefined
  public static readonly configName: string = CONFIG_KEY
  private readonly webviewContent: WebviewContent

  private constructor(options: {
    panel: WebviewPanel
    context: ExtensionContext
    viewExportSVG: ViewExportSVG[]
    processedFiles: number
  }) {
    const { panel, context, viewExportSVG, processedFiles } = options

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

    this.webviewContent = new WebviewContent(this._panel.webview, context, processedFiles)
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
  public init(pathname = '/dashboard'): void {
    if (!isEmpty(ViewExportsSVGController.currentPanel)) {
      this._postMessage(SVGPostMessage.SendRunLoading, pathname)
    }
  }

  /**
   * Renders the current webview panel if it exists, otherwise a new webview panel
   * will be created and displayed.
   * @param context - The extension context.
   * @param svgComponents The array of SVG exports or an SvgExportErrors object.
   */
  public static async render(
    context: ExtensionContext,
    viewExportSVG: ViewExportSVG[],
    processedFiles = 0
  ) {
    // If we already have a panel, show it
    if (!isEmpty(ViewExportsSVGController.currentPanel)) {
      this.update(viewExportSVG, processedFiles)
      return
    }

    const column = window.activeTextEditor?.viewColumn ?? ViewColumn.One
    const extensionUri = context.extensionUri

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

    ViewExportsSVGController.currentPanel = new ViewExportsSVGController({
      panel,
      context,
      viewExportSVG,
      processedFiles,
    })

    await ViewExportsSVGController.currentPanel.webviewContent.initialize()
    ViewExportsSVGController.currentPanel._panel.webview.html =
      ViewExportsSVGController.currentPanel.webviewContent._content

    ViewExportsSVGController.currentPanel.initialize(processedFiles)
  }

  /**
   * Update the contents of the webview panel displaying SVG components.
   * @param svgComponents - SVG components or error data to display.
   */
  public static update(viewExportSVG: ViewExportSVG[], processedFiles: number): void {
    if (!isEmpty(ViewExportsSVGController.currentPanel)) {
      ViewExportsSVGController.currentPanel._panel.reveal(ViewColumn.Active)
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
