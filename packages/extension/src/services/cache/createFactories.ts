import type * as vsc from 'vscode'

import type { BaseCache } from './BaseCache'
import { ExtensionThemeCache } from './ExtensionThemeCache'
import { FilesCache } from './FilesCache'
import { IconCollectionCache } from './IconCollectionCache'
import { ViewExportSVGCache } from './ViewExportSVGCache'

export type CacheFactoryMap = Record<string, BaseCache<unknown, unknown>>

export function createFactories(ctx: vsc.ExtensionContext) {
  return {
    extensionTheme: new ExtensionThemeCache(ctx),
    files: new FilesCache(ctx),
    viewExports: new ViewExportSVGCache(ctx),
    icons: new IconCollectionCache(ctx),
  } satisfies CacheFactoryMap
}
