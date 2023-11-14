import type { WebviewApi } from 'vscode-webview'
import { MessageData, OnMessageCommand, PostMessageCommand } from '../interfaces/vscode'

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
  private messageHandlers: Record<string, Function[]> = {}

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

      if (handlers) {
        handlers.forEach((handler) => handler(message.data))
      }
    })
  }

  /**
   * Sends a message to the extension.
   * @param command The command associated with the message.
   * @param data The data payload of the message.
   */
  public postMessage(command: PostMessageCommand, data?: any) {
    if (this.vsCodeApi) {
      this.vsCodeApi.postMessage({ command, data })
    } else {
      if (command === 'requestSvgComponents') {
        fetch('../../test/responseFile.json')
          .then((response) => response.json())
          .then((data) => {
            const resData = JSON.stringify(data)
            const handlers = this.messageHandlers['svgComponents']

            if (handlers) {
              handlers.forEach((handler) => handler(resData))
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
  public onMessage(command: OnMessageCommand, handler: Function) {
    if (!this.messageHandlers[command]) {
      this.messageHandlers[command] = []
    }
    this.messageHandlers[command].push(handler)
  }

  /**
   * Removes a message handler for a specific command.
   * @param command The command associated with the message.
   * @param handler The handler function to be removed.
   */
  public removeMessageHandler(command: OnMessageCommand, handler: Function) {
    const handlers = this.messageHandlers[command]
    if (handlers) {
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
