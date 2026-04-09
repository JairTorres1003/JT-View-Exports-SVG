import { AddIconToCollectionHandler } from './AddIconToCollectionHandler'
import { ClearIconCollectionHandler } from './ClearIconCollectionHandler'
import { RemoveIconFromCollectionHandler } from './RemoveIconFromCollectionHandler'

export function createIconsHandlers() {
  return [
    new AddIconToCollectionHandler(),
    new RemoveIconFromCollectionHandler(),
    new ClearIconCollectionHandler(),
  ]
}
