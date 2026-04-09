import {
  type HandlerPostMessage,
  isValidSVGPostMessageType,
  type OnMessagePosted,
  type PostMessage,
  type PostMessageSubscriber,
  type ReceiveMessageEmitter,
  type SVGPostMessage,
  SVGReceiveMessage,
} from '@jt-view-exports-svg/core'

import i18next from 'i18next'
import type { WebviewApi } from 'vscode-webview'

import { vscodeInternal } from './VSCodeInternal'

class VSCodeAPIWrapper {
  private readonly vsCodeApi: WebviewApi<unknown> | undefined

  /**
   * Registered message handlers
   */
  private readonly messageHandlers: Partial<HandlerPostMessage> = {}

  /**
   * Queue for messages received before handlers are registered
   */
  private readonly messageQueue: PostMessage[] = []

  constructor() {
    this.vsCodeApi = this.resolveVSCodeAPI()

    window.addEventListener('message', this.handleWindowMessage)

    window.addEventListener('DOMContentLoaded', () => {
      this.postMessage(SVGReceiveMessage.Ready)
    })
  }

  /**
   * Resolve VSCode API depending on environment
   */
  private resolveVSCodeAPI(): WebviewApi<unknown> | undefined {
    if (typeof acquireVsCodeApi === 'function') {
      return acquireVsCodeApi()
    }

    if (import.meta.env.DEV) {
      return vscodeInternal
    }

    return undefined
  }

  /**
   * Handle messages coming from the extension
   */
  private handleWindowMessage = (event: MessageEvent<PostMessage>): void => {
    const message = event.data
    const type: SVGPostMessage = message.type

    if (!isValidSVGPostMessageType(type)) return

    const handler = this.messageHandlers[type] as OnMessagePosted

    if (!handler) {
      this.enqueueMessage(message)
      return
    }

    this.executeHandler(handler, message.data)
  }

  /**
   * Execute handler safely
   */
  private executeHandler(handler: OnMessagePosted, data: Parameters<OnMessagePosted>[0]): void {
    try {
      handler(data)
    } catch (error) {
      console.error(i18next.t('errors.[VSCodeAPIWrapper]ErrorOccurredWhileHandlingMessage:'), error)
    }
  }

  /**
   * Enqueue message when handler is not ready
   */
  private enqueueMessage(message: PostMessage): void {
    this.messageQueue.push(message)
  }

  /**
   * Flush queued messages when handlers become available
   */
  private flushQueue(): void {
    if (this.messageQueue.length === 0) return

    const remaining: PostMessage[] = []

    for (const message of this.messageQueue) {
      const handler = this.messageHandlers[message.type] as OnMessagePosted

      if (!handler) {
        remaining.push(message)
        continue
      }

      this.executeHandler(handler, message.data)
    }

    this.messageQueue.length = 0
    this.messageQueue.push(...remaining)
  }

  /**
   * Send message to extension
   */
  public postMessage: ReceiveMessageEmitter = (type, data = undefined) => {
    if (!this.vsCodeApi) {
      console.warn(i18next.t('errors.VSCodeApiIsNotAvailable'), { type })
      return
    }

    this.vsCodeApi.postMessage({ type, data })
  }

  /**
   * Register message handler
   */
  public onMessage: PostMessageSubscriber = (type, handler) => {
    this.messageHandlers[type] = handler as OnMessagePosted

    this.flushQueue()
  }

  /**
   * Unregister message handler
   */
  public unregisterMessage(type: SVGPostMessage): void {
    this.messageHandlers[type] = undefined
  }

  /**
   * Expose API instance (readonly)
   */
  get api(): Readonly<WebviewApi<unknown> | undefined> {
    return this.vsCodeApi
  }
}

export const vscode = new VSCodeAPIWrapper()
