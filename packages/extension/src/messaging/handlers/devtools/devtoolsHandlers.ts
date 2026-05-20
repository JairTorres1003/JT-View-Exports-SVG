import type { WebviewMessenger } from '@/messaging/WebviewMessenger'

import { EditComponentInPlaygroundHandler } from './EditComponentInPlaygroundHandler'
import { IsOpenDevToolsHandler } from './IsOpenDevToolsHandler'

export function createDevtoolsHandlers(messenger: WebviewMessenger) {
  return [new IsOpenDevToolsHandler(), new EditComponentInPlaygroundHandler(messenger)]
}
