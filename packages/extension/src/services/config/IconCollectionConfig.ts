import type { IconCollectionKind } from '@jt-view-exports-svg/core'

import { ConfigManager } from './base/ConfigManager'

export class IconCollectionConfig extends ConfigManager<
  Partial<Record<IconCollectionKind, number>>
> {
  readonly section = 'iconCollection'
  readonly defaultValue: Record<IconCollectionKind, number> = { recent: 10, favorite: 10 }
}
