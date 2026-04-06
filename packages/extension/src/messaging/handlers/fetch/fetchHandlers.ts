import type { WebviewMessenger } from '../../WebviewMessenger'

import { FetchVSCodeThemeHandler } from './FetchVSCodeThemeHandler'
import { FetchVsCodeThemePackageHandler } from './FetchVsCodeThemePackageHandler'

export function createFetchHandlers(messenger: WebviewMessenger) {
  return [new FetchVSCodeThemeHandler(messenger), new FetchVsCodeThemePackageHandler(messenger)]
}
