import type * as vsc from 'vscode'

import { CacheManager } from './CacheManager'
import { createFactories } from './createFactories'

export type AppCacheManager = CacheManager<ReturnType<typeof createFactories>>

export function initCache(context: vsc.ExtensionContext) {
  return CacheManager.init(createFactories(context))
}

export function getCache(): AppCacheManager {
  return CacheManager.getInstance<ReturnType<typeof createFactories>>()
}
