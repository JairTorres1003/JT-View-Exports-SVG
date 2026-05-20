import { ExtensionMessage, WebviewMessage } from '@jt-view-exports-svg/core'
import { handleVscodeMessageExchange } from '../exchanges/handleVscodeMessageExchange'
import type { InterceptorHandler } from '../fetchInterceptorEngine'

const PACKAGE_REGEX = /assets\/vs\/extensions\/theme\/package\.json$/

export const packageHandler: InterceptorHandler = async (path) => {
  if (!PACKAGE_REGEX.test(path)) return null

  return handleVscodeMessageExchange({
    requestType: WebviewMessage.FetchVsCodeThemePackage,
    responseType: ExtensionMessage.FetchVsCodeThemePackage,
  })
}
