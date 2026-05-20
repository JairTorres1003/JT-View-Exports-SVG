import type { WebviewMessenger } from '@/messaging/WebviewMessenger'

import { AddIconToCollectionHandler } from './AddIconToCollectionHandler'
import { ClearIconCollectionHandler } from './ClearIconCollectionHandler'
import { RemoveIconFromCollectionHandler } from './RemoveIconFromCollectionHandler'

export function createIconsHandlers(messenger: WebviewMessenger) {
  return [
    new AddIconToCollectionHandler(),
    new RemoveIconFromCollectionHandler(),
    new ClearIconCollectionHandler(messenger),
  ]
}
