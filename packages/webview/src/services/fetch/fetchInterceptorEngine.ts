export type InterceptorHandler = (
  pathname: string,
  input: RequestInfo | URL,
  init?: RequestInit
) => Promise<Response | null>

const interceptors: InterceptorHandler[] = []
let isEngineInstalled = false

export function registerInterceptor(handler: InterceptorHandler) {
  interceptors.push(handler)
}

function toPathname(input: RequestInfo | URL): string {
  if (typeof input === 'string') {
    return new URL(input, window.location.href).pathname
  }

  if (input instanceof URL) {
    return input.pathname
  }

  return new URL(input.url, window.location.href).pathname
}

/**
 * Installs a global `fetch` interception engine once, wrapping `globalThis.fetch`
 * to route requests through registered interceptors before performing the original request.
 */
export function setupFetchEngine() {
  if (isEngineInstalled) return

  const originalFetch = globalThis.fetch.bind(globalThis)

  globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const pathname = toPathname(input)
    const normalizedPath = pathname.startsWith('/') ? pathname.slice(1) : pathname

    for (const handler of interceptors) {
      const response = await handler(normalizedPath, input, init)
      if (response) return response
    }

    return originalFetch(input, init)
  }

  isEngineInstalled = true
}
