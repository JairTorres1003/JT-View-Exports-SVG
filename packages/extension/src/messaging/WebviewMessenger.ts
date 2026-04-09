import {
  type PostMessageEmitter,
  type ReceiveMessage,
  SVGReceiveMessage,
} from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'
import type { MessageRouter } from './MessageRouter'

export class WebviewMessenger {
  private _isReady = false
  private readonly _queue: unknown[] = []
  private router?: MessageRouter

  constructor(
    private readonly webview: vsc.Webview,
    private readonly disposables: vsc.Disposable[]
  ) {
    this.webview.onDidReceiveMessage(
      (message) => this.handleMessage(message),
      null,
      this.disposables
    )
  }

  /**
   * Set the message router
   */
  public setRouter(router: MessageRouter) {
    this.router = router
  }

  /**
   * Send message to webview safely
   */
  public postMessage: PostMessageEmitter = (type, data) => {
    if (!this._isReady) {
      this._queue.push({ type, data })
      return
    }

    this.webview.postMessage({ type, data })
  }

  /**
   * Handle incoming messages
   */
  private handleMessage(message: ReceiveMessage): void {
    if (message?.type === SVGReceiveMessage.Ready) {
      this._isReady = true
      this.flushQueue()
      return
    }

    if (!this.router) {
      console.warn(vsc.l10n.t('Message router not registered'))
      return
    }

    this.router.route(message)
  }

  /**
   * Send queued messages
   */
  private flushQueue(): void {
    while (this._queue.length) {
      const message = this._queue.shift()
      this.webview.postMessage(message)
    }
  }
}
