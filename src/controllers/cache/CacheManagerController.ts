import * as fs from 'node:fs'
import * as path from 'node:path'

import { l10n, Uri, type ExtensionContext } from 'vscode'

import { isEmpty } from '../../utilities/misc'
import { RecentIconsLimitController } from '../config'

import { ComponentsCacheController } from './ComponentsCacheController'
import { FileModifiedCacheController } from './FileModifiedCacheController'
import { IconCacheController } from './IconCacheController'

import { CacheIconKind } from '@/enum/cache'
import type { ExtractSVGExports } from '@/types/ViewExportsSVG'
import type { ExtensionManage } from '@/types/vscode'

/**
 * Cache manager to handle multiple file caches, one for each type.
 */
class CacheManagerController {
  public DeclarationFileCache: FileModifiedCacheController<ExtractSVGExports['base']>
  public ComponentsFileCache: ComponentsCacheController
  public FavoritesIconCache: IconCacheController
  public RecentIconCache: IconCacheController
  public ExtensionCache: FileModifiedCacheController<ExtensionManage | undefined>

  constructor(private readonly context: ExtensionContext) {
    const recentIconsLimitController = new RecentIconsLimitController()
    const limitFun = (): number => recentIconsLimitController.getLimit()

    // Create cache directory if it doesn't exist
    const cacheDir = Uri.joinPath(context.globalStorageUri, 'cache').fsPath
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true })
    }

    // Set up file paths for each cache
    const declarationCacheFile = path.join(cacheDir, 'declaration_cache.json')
    const componentsCacheFile = path.join(cacheDir, 'components_cache.json')
    const favoritesCacheFile = path.join(cacheDir, 'favorites_cache.json')
    const recentCacheFile = path.join(cacheDir, 'recent_cache.json')
    const extensionCacheFile = path.join(cacheDir, 'extension_cache.json')

    // Initialize caches
    this.DeclarationFileCache = new FileModifiedCacheController(declarationCacheFile)
    this.ComponentsFileCache = new ComponentsCacheController(componentsCacheFile)
    this.FavoritesIconCache = new IconCacheController(favoritesCacheFile, CacheIconKind.FAVORITE)
    this.RecentIconCache = new IconCacheController(recentCacheFile, CacheIconKind.RECENT, limitFun)
    this.ExtensionCache = new FileModifiedCacheController(extensionCacheFile)
  }

  /**
   * Clears all caches.
   */
  clearAll(): void {
    this.DeclarationFileCache.clear()
    this.ComponentsFileCache.clear()
    this.FavoritesIconCache.clear()
    this.RecentIconCache.clear()
    this.ExtensionCache.clear()
  }
}

let cacheManager: CacheManagerController | undefined = undefined

/**
 * Initializes the cache manager. Should be called once from the `activate` function of your extension.
 */
export function initializeCacheManager(context: ExtensionContext): void {
  cacheManager = new CacheManagerController(context)
}

/**
 * Returns the cache manager instance.
 */
export function getCacheManager(): CacheManagerController {
  if (isEmpty(cacheManager)) {
    throw new Error(l10n.t('CacheManager has not been initialized'))
  }
  return cacheManager
}
