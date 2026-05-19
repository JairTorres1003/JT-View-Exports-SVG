import type {
  ExtensionMessage,
  ExtensionMessageMap,
  ExtensionMessageSubscriber,
  FetchResponse,
  WebviewMessage,
  WebviewMessageEmitter,
  WebviewMessageMap,
} from '@jt-view-exports-svg/core'

import { vscode } from '@/services/vscode'

interface PayloadBase<
  TRequest extends WebviewMessage,
  TResponse extends ExtensionMessage,
  TResponseData = Record<string, unknown>,
> {
  requestType: TRequest
  responseType: ExtensionMessageMap[TResponse] extends FetchResponse<TResponseData>
    ? TResponse
    : never
}

interface PayloadWithData<
  TRequest extends WebviewMessage,
  TResponse extends ExtensionMessage,
  TData,
> extends PayloadBase<TRequest, TResponse> {
  data: TData
}

export type VscodeMessageExchangePayload<
  TRequest extends WebviewMessage,
  TResponse extends ExtensionMessage,
  TData = WebviewMessageMap[TRequest],
> = TData extends undefined
  ? PayloadBase<TRequest, TResponse>
  : PayloadWithData<TRequest, TResponse, TData>

/**
 * Creates a `Response` object from a fetch exchange result.
 *
 * If the input is `null`, unsuccessful, or has no `data`, this returns a JSON error response
 * with `success: false`, `data: null`, and an error message (defaulting to `"Unknown error"`),
 * using HTTP status `404`.
 *
 * If the input is successful and contains `data`, this returns a JSON response with the payload
 * from `data.data` and HTTP status `200`.
 *
 * @param data - The fetch response wrapper to convert into a web `Response`.
 * @returns A JSON `Response` representing either a success payload or an error payload.
 */
function createResponse(data: FetchResponse<unknown> | null): Response {
  if (!data?.success || !data?.data) {
    return new Response(
      JSON.stringify({
        success: false,
        data: null,
        error: data?.error || 'Unknown error',
      }),
      {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }

  return new Response(JSON.stringify(data.data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

/**
 * Sends a VS Code webview request message and resolves with a normalized `Response`
 * when the expected response message type is received.
 *
 * This helper:
 * - Registers a one-time response listener for `responseType`
 * - Posts a request using `requestType` and the provided payload
 * - Enforces a 10-second timeout and rejects if no response arrives
 * - Cleans up the registered listener on success, timeout, or failure
 *
 * @template TRequest - Request message type extending `WebviewMessage`.
 * @template TResponse - Response message type extending `ExtensionMessage`.
 * @param params - Exchange configuration containing:
 * - `requestType`: outbound message event name
 * - `responseType`: inbound message event name to wait for
 * - remaining fields as the request payload
 * @returns A promise that resolves to a `Response` created from the received data.
 * @throws If no response is received within 10 seconds.
 * @throws Re-throws any error that occurs while posting or subscribing to messages.
 */
export async function handleVscodeMessageExchange<
  TRequest extends WebviewMessage = WebviewMessage,
  TResponse extends ExtensionMessage = ExtensionMessage,
>({
  requestType,
  responseType,
  ...payload
}: VscodeMessageExchangePayload<TRequest, TResponse>): Promise<Response> {
  return new Promise<Response>((resolve, reject) => {
    const timeoutId = window.setTimeout(() => {
      vscode.unregisterMessage(responseType)
      reject(new Error(`Timeout waiting for ${responseType}`))
    }, 10000)

    const onResponse = (data: FetchResponse<unknown> | null) => {
      window.clearTimeout(timeoutId)
      resolve(createResponse(data))
      vscode.unregisterMessage(responseType)
    }

    try {
      vscode.postMessage(
        ...([requestType, payload] as unknown as Parameters<WebviewMessageEmitter>)
      )
      vscode.onMessage(
        ...([responseType, onResponse] as unknown as Parameters<ExtensionMessageSubscriber>)
      )
    } catch (error) {
      window.clearTimeout(timeoutId)
      vscode.unregisterMessage(responseType)
      reject(error)
    }
  })
}
