import { SVGPostMessage, SVGReceiveMessage } from '@jt-view-exports-svg/core'
import i18next from 'i18next'
import type { WebviewApi } from 'vscode-webview'

import { getUnknownError } from '@/utils/errors'
import isEmpty from '@/utils/is-empty'

import { axiosInstance } from '../instance'

interface VSCodeInternalAPIWrapperMessage {
  type: SVGReceiveMessage
  data?: unknown
}

const CUSTOM_EVENTS = [SVGReceiveMessage.RequestFileOpen]

class VSCodeInternalAPIWrapper<T = unknown> implements WebviewApi<T> {
  private currentState: T | undefined = undefined

  /**
   * Sends a message to the VSCode internal API.
   *
   * @param message - The message to be sent. It must include a type property.
   * @throws Will warn if the message type is not provided.
   */
  postMessage(message: VSCodeInternalAPIWrapperMessage): void {
    if (isEmpty(message.type)) {
      console.warn(i18next.t('errors.NoMessageTypeProvided'))
      return
    }
    if (CUSTOM_EVENTS.includes(message.type)) {
      this.customEventListener(message)
      return
    }

    this.requestCurl(message).catch(getUnknownError)
  }

  getState(): T | undefined {
    return this.currentState
  }
  setState<TState extends T | undefined>(newState: TState): TState {
    this.currentState = newState
    return newState
  }

  /**
   * Sends an HTTP request using Axios based on the provided type and data.
   * If data is provided, a POST request is made; otherwise, a GET request is made.
   * The response is then posted to the window.
   *
   * @param param0 - The request parameters.
   * @param param0.type - The type of the request, used as the endpoint.
   * @param [param0.data] - Optional data to be sent with the request.
   * @returns A promise that resolves when the request is complete.
   * @throws Throws an error if the response status is not 200 or if the response data is empty.
   */
  private async requestCurl({
    type,
    data = undefined,
  }: VSCodeInternalAPIWrapperMessage): Promise<void> {
    try {
      let request = async () => await axiosInstance.get(type)

      if (data !== undefined) {
        request = async () => await axiosInstance.post(type, { data })
      }

      const response = await request()

      if (response.status !== 200) {
        throw new Error(response.statusText ?? i18next.t('errors.NoResponse'))
      }

      window.postMessage(response.data, '*')
    } catch (error) {
      console.error(getUnknownError(error))
    }
  }

  /**
   * Custom event listener for handling specific messages.
   * Currently handles the RequestFileOpen message to open a file input dialog.
   *
   * @param message - The message received from the VSCode internal API.
   */
  private customEventListener(message: VSCodeInternalAPIWrapperMessage) {
    switch (message.type) {
      case SVGReceiveMessage.RequestFileOpen: {
        const inputFile = document.createElement('input')
        inputFile.type = 'file'
        inputFile.multiple = true
        inputFile.accept = '.js,.ts,.jsx,.tsx'
        inputFile.onchange = (event) => {
          const files = Array.from((event.target as HTMLInputElement).files ?? []).map(
            (file) => file.name
          )
          window.postMessage({
            type: SVGPostMessage.SendOpenFiles,
            data: files,
          })
        }
        inputFile.click()
        break
      }
      default:
        console.warn(`Unhandled custom event: ${message.type}`)
    }
  }
}

export const vscodeInternal = new VSCodeInternalAPIWrapper()
