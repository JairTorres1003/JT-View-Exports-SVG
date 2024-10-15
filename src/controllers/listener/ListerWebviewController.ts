import {
  l10n,
  type WebviewPanel,
  window,
  type Disposable,
  type Webview,
  env,
  workspace,
} from 'vscode'

import { getCacheManager } from '../cache'
import { AssetsPathsController, LastScanDateController } from '../config'

import { SVGPostMessage, SVGReceiveMessage } from '@/enum/ViewExportsSVG'
import { type HandlerArgs } from '@/interfaces/misc'
import {
  type ViewExportSVG,
  type SVGFile,
  type SVGPlayground,
  type SVGIcon,
} from '@/interfaces/ViewExportsSVG'
import { type FuncPostMessage } from '@/interfaces/views/PostMessage'
import { type ReceiveMessage, type HandlerReceiveMessage } from '@/interfaces/views/ReceiveMessage'
import { openFile, pathToSVGFile, scanningFiles, scanningWorkspace } from '@/utilities/files'
import { getUnknownError, isEmpty } from '@/utilities/misc'
import { filteredExports, playground } from '@/utilities/svg'
import { getCurrentTheme, getStyles, svgFileToUri } from '@/utilities/vscode'

export class ListerWebviewController {
  public readonly _panel: WebviewPanel
  public readonly _disposables: Disposable[] = []
  public viewExportSVG: ViewExportSVG[] = []

  private readonly assetsPathController: AssetsPathsController
  private readonly lastScanDateController: LastScanDateController

  constructor(panel: WebviewPanel, viewExportSVG: ViewExportSVG[]) {
    this._panel = panel
    this.viewExportSVG = viewExportSVG

    this.assetsPathController = new AssetsPathsController()
    this.lastScanDateController = new LastScanDateController()

    // Set an event listener to listen for messages passed from the webview context
    this._setWebviewMessageListener(this._panel.webview)
  }

  private get _handlersMap(): HandlerReceiveMessage {
    return {
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
      [SVGReceiveMessage.AddRecentIcon]: this._addIconToCache(true).bind(this),
      [SVGReceiveMessage.RemoveRecentIcon]: this._removeIconFromCache(true).bind(this),
      [SVGReceiveMessage.GetRecentIcons]: this._getIconsFromCache(true).bind(this),
      [SVGReceiveMessage.ClearRecentIcons]: this._clearIconsFromCache(true).bind(this),
      [SVGReceiveMessage.AddFavoriteIcon]: this._addIconToCache(false).bind(this),
      [SVGReceiveMessage.RemoveFavoriteIcon]: this._removeIconFromCache(false).bind(this),
      [SVGReceiveMessage.ClearFavoriteIcons]: this._clearIconsFromCache(false).bind(this),
      [SVGReceiveMessage.GetFavoriteIcons]: this._getIconsFromCache(false).bind(this),
    }
  }

  /**
   * Sets up a message listener for the webview panel.
   * @param webview The webview instance.
   */
  private _setWebviewMessageListener(webview: Webview): void {
    try {
      const listener = (event: ReceiveMessage): void => {
        const handler = this._handlersMap[event.type] as (
          arg0?: HandlerArgs<HandlerReceiveMessage>
        ) => void

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
    this.assetsPathController.getAssetsPath().then((assetsPath) => {
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
    const date = this.lastScanDateController._dateString
    this._postMessage(SVGPostMessage.SendLastScanDate, date)
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
    this.assetsPathController.remove(files).then(() => {
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

  /**
   * Adds an icon to the cache.
   * @param isRecent - Whether the icon is recent or favorite.
   */
  private _addIconToCache(isRecent: boolean) {
    return (icon: SVGIcon): void => {
      const { RecentIconCache, FavoritesIconCache } = getCacheManager()

      if (isEmpty(workspace.workspaceFolders)) return

      const cache = isRecent ? RecentIconCache : FavoritesIconCache
      cache.add(workspace.workspaceFolders[0].uri, [icon])
    }
  }

  /**
   * Removes an icon from the cache.
   * @param isRecent - Whether the icon is recent or favorite.
   */
  private _removeIconFromCache(isRecent: boolean) {
    return (icon: SVGIcon): void => {
      const { RecentIconCache, FavoritesIconCache } = getCacheManager()

      if (isEmpty(workspace.workspaceFolders)) return

      const cache = isRecent ? RecentIconCache : FavoritesIconCache
      cache.remove(workspace.workspaceFolders[0].uri, icon)
    }
  }

  /**
   * Gets the icons from the cache.
   * @param isRecent - Whether the icons are recent or favorite.
   */
  private _getIconsFromCache(isRecent: boolean) {
    return (): void => {
      const { RecentIconCache, FavoritesIconCache } = getCacheManager()

      if (isEmpty(workspace.workspaceFolders)) return

      const cache = isRecent ? RecentIconCache : FavoritesIconCache
      const icons = cache.getIcons(workspace.workspaceFolders[0].uri)
      console.info(icons)
    }
  }

  /**
   * Clears the icons from the cache.
   * @param isRecent - Whether the icons are recent or favorite.
   */
  private _clearIconsFromCache(isRecent: boolean) {
    return (): void => {
      const { RecentIconCache, FavoritesIconCache } = getCacheManager()

      const cache = isRecent ? RecentIconCache : FavoritesIconCache
      cache.clear()
    }
  }
}
