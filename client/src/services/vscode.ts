import { type SVGPostMessage } from '@api/enums/ViewExportsSVG'
import { type HandlerArgs } from '@api/interfaces/misc'
import { type PostMessage } from '@api/interfaces/views/PostMessage'
import i18next from 'i18next'
import { type WebviewApi } from 'vscode-webview'

import { vscodeInternal } from './vscodeInternal'

import {
  type FuncPostMessage,
  type FuncOnMessage,
  type MessageHandlersView,
} from '@/interfaces/ViewExportsSVG'

/**
 * Wrapper class for the VSCode API, providing methods for communication between the webview and the extension.
 */
class VSCodeAPIWrapper {
  /**
   * The VSCode API instance obtained from `acquireVsCodeApi`.
   */
  private readonly vsCodeApi: WebviewApi<unknown> | undefined

  /**
   * Mapping of message commands to their corresponding handlers.
   */
  private readonly messageHandlers: MessageHandlersView = {}

  /**
   * Creates an instance of `VSCodeAPIWrapper`.
   */
  constructor() {
    if (typeof acquireVsCodeApi === 'function') {
      this.vsCodeApi = acquireVsCodeApi()
    } else if (process.env.NODE_ENV === 'development') {
      this.vsCodeApi = vscodeInternal.api
    }

    window.addEventListener('message', (event: MessageEvent<PostMessage>) => {
      const type: SVGPostMessage = event.data.type
      const handler = this.messageHandlers[type] as (
        arg0: HandlerArgs<Required<MessageHandlersView>>
      ) => void

      if (typeof handler === 'function') {
        handler(event.data.data)
      }
    })
  }

  /**
   * Sends a message to the VSCode extension.
   *
   * @param type - The type of SVG post message.
   * @param data - The data to send with the post message.
   */
  public postMessage: FuncPostMessage = (type, data = undefined) => {
    if (this.vsCodeApi === undefined) {
      console.warn(i18next.t('errors.VSCodeApiIsNotAvailable'), { type })
      return
    }

    this.vsCodeApi.postMessage({ type, data })
  }

  /**
   * Registers a message handler for a specific type of SVG post message.
   *
   * @param type - The type of SVG post message.
   * @param handler - The callback function to handle the post message.
   */
  public onMessage: FuncOnMessage = (type, handler) => {
    this.messageHandlers[type] = handler as (
      arg0: HandlerArgs<Required<MessageHandlersView>>
    ) => void
  }

  /**
   * Unregister a message handler for a specific SVG post message type.
   *
   * @param type - The type of SVG post message.
   */
  public unregisterMessage(type: SVGPostMessage): void {
    this.messageHandlers[type] = undefined
  }
}

/**
 * Wrapper instance for the VSCode API.
 */
export const vscode = new VSCodeAPIWrapper()
