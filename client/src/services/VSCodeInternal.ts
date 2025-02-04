import type { SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import type { AxiosResponse } from 'axios'
import type { WebviewApi } from 'vscode-webview'

import { axiosInstance } from './instance'

import { getUnknownError, isEmpty } from '@/utils/misc'

interface VSCodeInternalAPIWrapperMessage {
  type: SVGReceiveMessage
  data?: unknown
}

class VSCodeInternalAPIWrapper<T = unknown> {
  private currentState: T | undefined = undefined

  /**
   * Sends an HTTP request using Axios based on the provided type and data.
   * If data is provided, a POST request is made; otherwise, a GET request is made.
   * The response is then posted to the window.
   *
   * @param {Object} param0 - The request parameters.
   * @param {string} param0.type - The type of the request, used as the endpoint.
   * @param {any} [param0.data] - Optional data to be sent with the request.
   * @returns {Promise<void>} - A promise that resolves when the request is complete.
   * @throws {Error} - Throws an error if the response status is not 200 or if the response data is empty.
   */
  private readonly requestCurl = async ({
    type,
    data = undefined,
  }: VSCodeInternalAPIWrapperMessage): Promise<void> => {
    try {
      let request: () => Promise<AxiosResponse> = async () => await axiosInstance.get(type)

      if (data !== undefined) {
        request = async () => await axiosInstance.post(type, { data })
      }

      const response = await request()

      if (response.status !== 200) {
        throw new Error(response.statusText ?? 'No response data')
      }

      window.postMessage(response.data, '*')
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * Sends a message to the VSCode internal API.
   *
   * @param message - The message to be sent. It must include a type property.
   * @throws Will warn if the message type is not provided.
   */
  private readonly postMessage = (message: VSCodeInternalAPIWrapperMessage): void => {
    if (isEmpty(message.type)) {
      console.warn('No message type provided')
      return
    }

    this.requestCurl(message).catch(getUnknownError)
  }

  /**
   * Retrieves the current state.
   *
   * @returns The current state of type `T`, or `undefined` if no state is set.
   */
  private readonly getState = (): T | undefined => this.currentState

  /**
   * Updates the current state with the provided new state and returns the new state.
   *
   * @template TState - The type of the new state, which extends the type of the current state or undefined.
   * @param {TState} newState - The new state to set.
   * @returns {TState} - The updated state.
   */
  private readonly setState = <TState extends T | undefined>(newState: TState): TState => {
    this.currentState = newState
    return newState
  }

  /**
   * Provides access to the Webview API.
   *
   * @returns {WebviewApi<T>} An object containing methods to interact with the webview.
   * @property {Function} postMessage - Sends a message to the webview.
   * @property {Function} getState - Retrieves the current state from the webview.
   * @property {Function} setState - Sets the state in the webview.
   */
  get api(): WebviewApi<T> {
    return {
      postMessage: this.postMessage,
      getState: this.getState,
      setState: this.setState,
    }
  }
}

export const vscodeInternal = new VSCodeInternalAPIWrapper()
