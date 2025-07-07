import { type Disposable, l10n, type WebviewPanel } from 'vscode'

import { DefaultExpandAllController, RecentIconsShowController } from '../config'
import { AssetsHandler } from '../handlers/AssetsHandler'
import { CacheHandler } from '../handlers/CacheHandler'
import { ConfigurationHandler } from '../handlers/ConfigurationHandler'
import { SVGComponentHandler } from '../handlers/SVGComponentHandler'
import { UIHandler } from '../handlers/UIHandler'

import { MessageRouter } from './MessageRouterController'

import { toggleViewActions } from '@/commands/editorTitleActions'
import { SVGPostMessage } from '@/enum/ViewExportsSVG'
import type { SVGFile, SVGIcon, SVGPlayground, ViewExportSVG } from '@/types/ViewExportsSVG'
import type { FuncPostMessage } from '@/types/views/PostMessage'

export class ListerWebviewController {
  public readonly _panel: WebviewPanel
  public readonly _disposables: Disposable[] = []
  public viewExportSVG: ViewExportSVG[] = []

  private readonly svgComponentHandler: SVGComponentHandler
  private readonly cacheHandler: CacheHandler
  private readonly configurationHandler: ConfigurationHandler
  private readonly assetsHandler: AssetsHandler
  private readonly uiHandler: UIHandler
  private readonly messageRouter: MessageRouter

  constructor(panel: WebviewPanel, viewExportSVG: ViewExportSVG[]) {
    this._panel = panel
    this.viewExportSVG = viewExportSVG

    // Initialize handlers
    this.svgComponentHandler = new SVGComponentHandler(this._postMessage, this.viewExportSVG)
    this.cacheHandler = new CacheHandler(this._postMessage)
    this.configurationHandler = new ConfigurationHandler(this._postMessage)
    this.assetsHandler = new AssetsHandler(this._postMessage)
    this.uiHandler = new UIHandler(this._postMessage)

    // Initialize message router
    this.messageRouter = new MessageRouter(this)
    this.messageRouter.setupMessageListener(this._panel.webview, this._disposables)
  }

  /**
   * Sends a post message to the webview.
   *
   * @param type - The type of the message.
   * @param data - The data to be sent with the message.
   */
  public readonly _postMessage: FuncPostMessage = (type, data) => {
    this._panel.webview.postMessage({ type, data }).then(undefined, (error) => {
      console.error(l10n.t('Error posting message to webview:'), error)
    })
  }

  /**
   * Initializes default values for certain calls used in the web view.
   */
  protected readonly initialize = (processedFiles: number): void => {
    this.toggleOpenDevTools(false)

    const config = new DefaultExpandAllController()
    this.toggleExpandIcon(config.isExpandAll())
    toggleViewActions(processedFiles > 0).catch(console.error)
  }

  /**
   * Updates the state of the webview panel.
   */
  protected readonly update = (processedFiles: number, viewExportSVG: ViewExportSVG[]): void => {
    this.viewExportSVG = viewExportSVG
    this.svgComponentHandler.updateSVGComponents(viewExportSVG)

    this.toggleOpenDevTools(false)

    this._postMessage(SVGPostMessage.SendUpdateConfiguration, {
      renderPath: processedFiles > 0 ? '/dashboard' : '/',
      showRecentIcons: new RecentIconsShowController().isShow(),
    })

    toggleViewActions(processedFiles > 0).catch(console.error)
  }

  extractSVGComponent(files: string[]): void {
    console.info('🚀 ~ ListerWebviewController ~ extractSVGComponent ~ files:', files)
    // this.svgComponentHandler.extractSVGComponent(files).catch(console.error)
  }
  getSVGComponents(): void {
    this.svgComponentHandler.getSVGComponents()
  }
  playgroundSVGComponents(component: SVGPlayground): void {
    this.svgComponentHandler.playgroundSVGComponents(component).catch(console.error)
  }
  searchSVGComponents(query: string): void {
    this.svgComponentHandler.searchSVGComponents(query)
  }

  addRecentIcon(icon: SVGIcon): void {
    this.cacheHandler.addRecentIcon(icon)
  }
  removeRecentIcon(icon: SVGIcon): void {
    this.cacheHandler.removeRecentIcon(icon)
  }
  clearRecentIcons(): void {
    this.cacheHandler.clearRecentIcons()
  }
  addFavoriteIcon(icon: SVGIcon): void {
    this.cacheHandler.addFavoriteIcon(icon)
  }
  removeFavoriteIcon(icon: SVGIcon): void {
    this.cacheHandler.removeFavoriteIcon(icon)
  }
  clearFavoriteIcons(): void {
    this.cacheHandler.clearFavoriteIcons()
  }
  getHomeIcons(): void {
    this.cacheHandler.getHomeIcons()
  }

  getLanguage(): void {
    this.configurationHandler.getLanguage()
  }
  getTheme(): void {
    this.configurationHandler.getTheme()
  }
  getEditorConfig(): void {
    this.configurationHandler.getEditorConfig()
  }
  getVsCodeStyles(): void {
    this.configurationHandler.getVsCodeStyles()
  }
  getExtensionTheme(): void {
    this.configurationHandler.getExtensionTheme()
  }
  reloadExtensionTheme(): void {
    this.configurationHandler.reloadExtensionTheme().catch(console.error)
  }

  getAssetsPath(): void {
    this.assetsHandler.getAssetsPath().catch(console.error)
  }
  getViewAssets(files: SVGFile[]): void {
    this.assetsHandler.getViewAssets(files).catch(console.error)
  }
  getLastScanDate(): void {
    this.assetsHandler.getLastScanDate()
  }
  removeAssets(files: SVGFile[]): void {
    this.assetsHandler.removeAssets(files).catch(console.error)
  }
  scanWorkspace(): void {
    this.assetsHandler.scanWorkspace().catch(console.error)
  }

  toggleExpandIcon(isExpanded: boolean): void {
    this.uiHandler.toggleExpandIcon(isExpanded).catch(console.error)
  }
  toggleOpenDevTools(open: boolean): void {
    this.uiHandler.toggleOpenDevTools(open).catch(console.error)
  }
  requestFileOpen(): void {
    this.uiHandler.dialogOpenFile()
  }
}
