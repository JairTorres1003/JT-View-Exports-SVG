import type { WebviewMessenger } from '../../WebviewMessenger'

import { RequestComponentsHandler } from './RequestComponentsHandler'

export function createUIHandlers(messenger: WebviewMessenger) {
  return [new RequestComponentsHandler(messenger)]
}
