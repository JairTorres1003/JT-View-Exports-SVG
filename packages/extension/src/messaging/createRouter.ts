import { ChangeViewPathHandler } from './handlers/ChangeViewPathHandler'
import { createDevtoolsHandlers } from './handlers/devtools/devtoolsHandlers'
import { createUIHandlers } from './handlers/ui/uiHandlers'
import { MessageRouter } from './MessageRouter'
import type { WebviewMessenger } from './WebviewMessenger'

export function createRouter(messenger: WebviewMessenger): MessageRouter {
  return new MessageRouter([
    new ChangeViewPathHandler(),
    ...createUIHandlers(messenger),
    ...createDevtoolsHandlers(),
  ])
}
