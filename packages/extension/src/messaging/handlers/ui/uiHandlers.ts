import type { WebviewMessenger } from '../../WebviewMessenger'

import { RequestComponentsHandler } from './RequestComponentsHandler'
import { RequestUserComponentsHandler } from './RequestUserComponentsHandler'
import { SearchComponentsHandler } from './SearchComponentsHandler'

export function createUIHandlers(messenger: WebviewMessenger) {
  return [
    new RequestComponentsHandler(messenger),
    new RequestUserComponentsHandler(messenger),
    new SearchComponentsHandler(messenger),
  ]
}
