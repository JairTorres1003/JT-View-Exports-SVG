import type { WebviewMessage } from '@jt-view-exports-svg/core'
import type { WebviewApi } from 'vscode-webview'
import { getUnknownError } from '@/utils/errors'
import isEmpty from '@/utils/is-empty'
import { axiosInstance } from '../instance'

interface VSCodeInternalAPIWrapperMessage {
  type: WebviewMessage
  data?: unknown
}
class VSCodeInternalAPIWrapper<T = unknown> implements WebviewApi<T> {
  private currentState: T | undefined

  /**
   * Sends a message to the development server.
   */
  postMessage(message: VSCodeInternalAPIWrapperMessage): void {
    if (isEmpty(message.type)) {
      console.warn('No message type provided')
      return
    }

    this.request(message).catch(getUnknownError)
  }

  /**
   * Performs the HTTP request to the dev server.
   */
  private async request({ type, data }: VSCodeInternalAPIWrapperMessage): Promise<void> {
    try {
      const response =
        data === undefined
          ? await axiosInstance.get(type)
          : await axiosInstance.post(type, { data })

      if (response.status !== 200) {
        console.warn(
          `Request to ${type} failed with status ${response.status}: ${response.statusText}`
        )
        return
      }

      window.postMessage(response.data, '*')
    } catch (error) {
      console.error(getUnknownError(error))
    }
  }

  getState(): T | undefined {
    return this.currentState
  }

  setState<TState extends T | undefined>(newState: TState): TState {
    this.currentState = newState
    return newState
  }
}

export const vscodeInternal = new VSCodeInternalAPIWrapper()
