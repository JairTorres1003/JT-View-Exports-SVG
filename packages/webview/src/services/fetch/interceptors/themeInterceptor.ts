import {
  generateDynamicMessage,
  SVGPostMessage,
  SVGReceiveMessage,
} from '@jt-view-exports-svg/core'
import { handleVscodeMessageExchange } from '../exchanges/handleVscodeMessageExchange'
import type { InterceptorHandler } from '../fetchInterceptorEngine'

const THEME_REGEX = /assets\/vs\/extensions\/theme\/(.+\.json)$/

export const themeHandler: InterceptorHandler = async (path) => {
  const match = THEME_REGEX.exec(path)

  if (!match || path.endsWith('package.json')) return null

  const routeMatch = match[1]
  const requestType = generateDynamicMessage(SVGReceiveMessage.FetchVSCodeTheme, routeMatch)
  const responseType = generateDynamicMessage(SVGPostMessage.FetchVSCodeTheme, routeMatch)

  return handleVscodeMessageExchange({ requestType, responseType })
}
