import type { WebviewApi } from 'vscode-webview'

import {
  type MessageData,
  type OnMessageCommand,
  type PostMessageCommand,
} from '../interfaces/vscode'

import { isEmpty } from './misc'

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private messageHandlers: Record<string, Array<(...pros: any) => void>> = {}

  /**
   * Creates an instance of `VSCodeAPIWrapper`.
   */
  constructor() {
    if (typeof acquireVsCodeApi === 'function') {
      this.vsCodeApi = acquireVsCodeApi()
    }

    window.addEventListener('message', (event) => {
      const message: MessageData = event.data
      const handlers = this.messageHandlers[message.command]

      if (!isEmpty(handlers)) {
        handlers.forEach((handler) => {
          handler(message.data)
        })
      }
    })
  }

  /**
   * Sends a message to the extension.
   * @param command The command associated with the message.
   * @param data The data payload of the message.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public postMessage(command: PostMessageCommand, data?: any): void {
    if (this.vsCodeApi !== undefined) {
      this.vsCodeApi.postMessage({ command, data })
    } else {
      if (command === 'requestSvgComponents') {
        fetch(`${import.meta.env.VITE_RAW_URL}/main/test/responseFile.json`)
          .then(async (response) => await response.json())
          .then((data) => {
            const resData = JSON.stringify(data)
            const handlers = this.messageHandlers.svgComponents

            if (!isEmpty(handlers)) {
              handlers.forEach((handler) => {
                handler(resData)
              })
            }
          })
          .catch((error) => {
            console.error('Error load test data:', error)
          })
      }
    }
  }

  /**
   * Registers a message handler for a specific command.
   * @param command The command associated with the message.
   * @param handler The handler function to be called when the message is received.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public onMessage(command: OnMessageCommand, handler: (...pros: any) => void): void {
    if (isEmpty(this.messageHandlers[command])) {
      this.messageHandlers[command] = []
    }
    this.messageHandlers[command].push(handler)
  }

  /**
   * Removes a message handler for a specific command.
   * @param command The command associated with the message.
   * @param handler The handler function to be removed.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public removeMessageHandler(command: OnMessageCommand, handler: (...pros: any) => void): void {
    const handlers = this.messageHandlers[command]
    if (!isEmpty(handlers)) {
      const index = handlers.indexOf(handler)
      if (index !== -1) {
        handlers.splice(index, 1)
      }
    }
  }
}

/**
 * Wrapper instance for the VSCode API.
 */
export const vscode = new VSCodeAPIWrapper()
