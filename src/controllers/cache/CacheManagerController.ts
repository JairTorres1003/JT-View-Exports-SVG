import * as fs from 'fs'
import * as path from 'path'

import { l10n, Uri, type ExtensionContext } from 'vscode'

import { isEmpty } from '../../utilities/misc'

import { FileModifiedCacheController } from './FileModifiedCacheController'
import { IconCacheController } from './IconCacheController'

import { CacheIconKind } from '@/enum/cache'
import { type ExtractSVGExports, type ViewExportSVG } from '@/interfaces/ViewExportsSVG'

/**
 * Cache manager to handle multiple file caches, one for each type.
 */
class CacheManagerController {
  public DeclarationFileCache: FileModifiedCacheController<ExtractSVGExports['base']>
  public SVGFileCache: FileModifiedCacheController<ViewExportSVG>
  public FavoritesIconCache: IconCacheController
  public RecentIconCache: IconCacheController

  constructor(private readonly context: ExtensionContext) {
    // Create cache directory if it doesn't exist
    const cacheDir = Uri.joinPath(context.globalStorageUri, 'cache').fsPath
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true })
    }

    // Set up file paths for each cache
    const declarationCacheFile = path.join(cacheDir, 'declaration_cache.json')
    const svgCacheFile = path.join(cacheDir, 'svg_cache.json')
    const favoritesCacheFile = path.join(cacheDir, 'favorites_cache.json')
    const recentCacheFile = path.join(cacheDir, 'recent_cache.json')

    // Initialize caches
    this.DeclarationFileCache = new FileModifiedCacheController(declarationCacheFile)
    this.SVGFileCache = new FileModifiedCacheController(svgCacheFile)
    this.FavoritesIconCache = new IconCacheController(favoritesCacheFile, CacheIconKind.FAVORITE)
    this.RecentIconCache = new IconCacheController(recentCacheFile, CacheIconKind.RECENT, 10)
  }

  /**
   * Clears all caches.
   */
  clearAll(): void {
    this.DeclarationFileCache.clear()
    this.SVGFileCache.clear()
    this.FavoritesIconCache.clear()
    this.RecentIconCache.clear()
  }
}

let cacheManager: CacheManagerController

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
