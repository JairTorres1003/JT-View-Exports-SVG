import {
  type HandlerReceiveMessage,
  type OnMessageReceived,
  type ReceiveMessage,
  SVGReceiveMessage,
} from '@jt-view-exports-svg/core'
import { type Disposable, l10n, type Webview, window } from 'vscode'

import { isEmpty } from '@/utilities/misc'

import type { ListerWebviewController } from './ListerWebviewController'

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

  private get _handlersMap(): Partial<HandlerReceiveMessage> {
    const handlers = this.handlers

    return {
      [SVGReceiveMessage.ExtractSVGComponentFromFiles]:
        handlers.extractSVGComponentFromFiles.bind(handlers),

      [SVGReceiveMessage.GetLastScanDate]: handlers.getLastScanDate.bind(handlers),
      [SVGReceiveMessage.ScanWorkspace]: handlers.scanWorkspace.bind(handlers),

      [SVGReceiveMessage.CreateTempFiles]: handlers.createTempFiles.bind(handlers),
    }
  }

  private handleMessage(event: ReceiveMessage): void {
    const handler = this._handlersMap[event.type] as OnMessageReceived

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
