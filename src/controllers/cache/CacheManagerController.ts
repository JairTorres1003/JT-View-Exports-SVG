import {
  CacheIconKind,
  type ExtensionManage,
  type ExtractSVGExports,
} from '@jt-view-exports-svg/core'
import { type ExtensionContext, l10n, Uri, workspace } from 'vscode'

import { isEmpty } from '../../utilities/misc'
import { RecentIconsLimitController } from '../config'

import { ComponentsCacheController } from './ComponentsCacheController'
import { FileModifiedCacheController } from './FileModifiedCacheController'
import { IconCacheController } from './IconCacheController'

/**
 * Cache manager to handle multiple file caches, one for each type.
 */
class CacheManagerController {
  static DeclarationFileCache: FileModifiedCacheController<ExtractSVGExports['base']>
  static ComponentsFileCache: ComponentsCacheController
  static FavoritesIconCache: IconCacheController
  static RecentIconCache: IconCacheController
  static ExtensionCache: FileModifiedCacheController<ExtensionManage | undefined>

  public static async initialize(context: ExtensionContext) {
    const cacheUri = Uri.joinPath(context.globalStorageUri, 'cache')
    const recentIconsLimitController = new RecentIconsLimitController()
    const limitFun = (): number => recentIconsLimitController.getLimit()

    try {
      await workspace.fs.stat(cacheUri)
    } catch {
      // Create cache directory if it doesn't exist
      await workspace.fs.createDirectory(cacheUri)
    }

    // Set up file paths for each cache
    const declarationCacheFile = Uri.joinPath(cacheUri, 'declaration_cache.json')
    const componentsCacheFile = Uri.joinPath(cacheUri, 'components_cache.json')
    const favoritesCacheFile = Uri.joinPath(cacheUri, 'favorites_cache.json')
    const recentCacheFile = Uri.joinPath(cacheUri, 'recent_cache.json')
    const extensionCacheFile = Uri.joinPath(cacheUri, 'extension_cache.json')

    // Initialize caches
    CacheManagerController.DeclarationFileCache = new FileModifiedCacheController(
      declarationCacheFile
    )
    CacheManagerController.ComponentsFileCache = new ComponentsCacheController(componentsCacheFile)
    CacheManagerController.FavoritesIconCache = new IconCacheController(
      favoritesCacheFile,
      CacheIconKind.FAVORITE
    )
    CacheManagerController.RecentIconCache = new IconCacheController(
      recentCacheFile,
      CacheIconKind.RECENT,
      limitFun
    )
    CacheManagerController.ExtensionCache = new FileModifiedCacheController(extensionCacheFile)

    const cache = new CacheManagerController()

    await cache.loadCaches()

    return cache
  }

  get DeclarationFileCache() {
    return CacheManagerController.DeclarationFileCache
  }
  get ComponentsFileCache() {
    return CacheManagerController.ComponentsFileCache
  }
  get FavoritesIconCache() {
    return CacheManagerController.FavoritesIconCache
  }
  get RecentIconCache() {
    return CacheManagerController.RecentIconCache
  }
  get ExtensionCache() {
    return CacheManagerController.ExtensionCache
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

  /**
   * Loads all caches.
   */
  private async loadCaches(): Promise<void> {
    await Promise.all([
      this.DeclarationFileCache.loadCache(),
      this.ComponentsFileCache.loadCache(),
      this.FavoritesIconCache.loadCache(),
      this.RecentIconCache.loadCache(),
      this.ExtensionCache.loadCache(),
    ])
  }
}

let cacheManager: CacheManagerController | undefined

/**
 * Initializes the cache manager. Should be called once from the `activate` function of your extension.
 */
export async function initializeCacheManager(context: ExtensionContext): Promise<void> {
  cacheManager = await CacheManagerController.initialize(context)
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
