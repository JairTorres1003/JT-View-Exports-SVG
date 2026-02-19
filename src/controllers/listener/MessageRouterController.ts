import {
  type HandlerArgs,
  type HandlerReceiveMessage,
  type ReceiveMessage,
  SVGReceiveMessage,
} from '@jt-view-exports-svg/core'
import { type Disposable, l10n, type Webview, window } from 'vscode'

import { isEmpty } from '@/utilities/misc'

import type { ListerWebviewController } from './ListerWebviewController'

type ReceiveMessageHandler = (arg0?: HandlerArgs<HandlerReceiveMessage>) => void

export class MessageRouter {
  constructor(private readonly handlers: ListerWebviewController) {}

  setupMessageListener(webview: Webview, disposables: Disposable[] = []): void {
    try {
      const listener = (event: ReceiveMessage): void => {
        this.handleMessage(event)
      }

      webview.onDidReceiveMessage(listener, undefined, disposables)
    } catch (error) {
      const errorMessage = l10n.t('Error setting webview message listener')
      window.showErrorMessage(errorMessage).then(undefined, console.error)
      console.error(errorMessage, error)
    }
  }

  private get _handlersMap(): HandlerReceiveMessage {
    const handlers = this.handlers

    return {
      [SVGReceiveMessage.ExtractSVGComponentFromFiles]:
        handlers.extractSVGComponentFromFiles.bind(handlers),
      [SVGReceiveMessage.GetSVGComponents]: handlers.getSVGComponents.bind(handlers),
      [SVGReceiveMessage.PlaygroundSVGComponents]: handlers.playgroundSVGComponents.bind(handlers),
      [SVGReceiveMessage.RefreshSVGComponents]: handlers.refreshSVGComponents.bind(handlers),
      [SVGReceiveMessage.SearchSVGComponents]: handlers.searchSVGComponents.bind(handlers),

      [SVGReceiveMessage.AddRecentIcon]: handlers.addRecentIcon.bind(handlers),
      [SVGReceiveMessage.RemoveRecentIcon]: handlers.removeRecentIcon.bind(handlers),
      [SVGReceiveMessage.ClearRecentIcons]: handlers.clearRecentIcons.bind(handlers),
      [SVGReceiveMessage.AddFavoriteIcon]: handlers.addFavoriteIcon.bind(handlers),
      [SVGReceiveMessage.RemoveFavoriteIcon]: handlers.removeFavoriteIcon.bind(handlers),
      [SVGReceiveMessage.ClearFavoriteIcons]: handlers.clearFavoriteIcons.bind(handlers),
      [SVGReceiveMessage.GetHomeIcons]: handlers.getHomeIcons.bind(handlers),

      [SVGReceiveMessage.GetTheme]: handlers.getTheme.bind(handlers),
      [SVGReceiveMessage.GetEditorConfig]: handlers.getEditorConfig.bind(handlers),
      [SVGReceiveMessage.GetVsCodeStyles]: handlers.getVsCodeStyles.bind(handlers),
      [SVGReceiveMessage.GetExtensionTheme]: handlers.getExtensionTheme.bind(handlers),
      [SVGReceiveMessage.ReloadExtensionTheme]: handlers.reloadExtensionTheme.bind(handlers),

      [SVGReceiveMessage.GetAssetsPath]: handlers.getAssetsPath.bind(handlers),
      [SVGReceiveMessage.GetViewAssets]: handlers.getViewAssets.bind(handlers),
      [SVGReceiveMessage.GetLastScanDate]: handlers.getLastScanDate.bind(handlers),
      [SVGReceiveMessage.RemoveAssets]: handlers.removeAssets.bind(handlers),
      [SVGReceiveMessage.ScanWorkspace]: handlers.scanWorkspace.bind(handlers),

      [SVGReceiveMessage.ToggleExpandIcon]: handlers.toggleExpandIcon.bind(handlers),
      [SVGReceiveMessage.ToggleOpenDevTools]: handlers.toggleOpenDevTools.bind(handlers),
      [SVGReceiveMessage.OpenFile]: handlers.openFileInEditor.bind(handlers),
      [SVGReceiveMessage.RequestFileOpen]: handlers.requestFileOpen.bind(handlers),
      [SVGReceiveMessage.CreateTempFiles]: handlers.createTempFiles.bind(handlers),
      [SVGReceiveMessage.ViewRenderPath]: handlers.changeViewRenderPath.bind(handlers),
    }
  }

  private handleMessage(event: ReceiveMessage): void {
    const handler = this._handlersMap[event.type] as ReceiveMessageHandler

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
}
