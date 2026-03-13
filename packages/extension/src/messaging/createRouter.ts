import { ChangeViewPathHandler } from './handlers/ChangeViewPathHandler'

import { MessageRouter } from './MessageRouter'
import type { WebviewMessenger } from './WebviewMessenger'

export function createRouter(_messenger: WebviewMessenger): MessageRouter {
  return new MessageRouter([
    new ChangeViewPathHandler()
  ])
}
