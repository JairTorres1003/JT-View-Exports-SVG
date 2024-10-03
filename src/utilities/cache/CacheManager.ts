import * as fs from 'fs'
import * as path from 'path'

import { l10n, Uri, type ExtensionContext } from 'vscode'

import { isEmpty } from '../misc'

import { FileModifiedCache } from './FileModifiedCache'
import { IconCache } from './IconCache'

import { type ExtractSVGExports, type ViewExportSVG } from '@/interfaces/ViewExportsSVG'

/**
 * Cache manager to handle multiple file caches, one for each type.
 */
class CacheManager {
  public DeclarationFileCache: FileModifiedCache<ExtractSVGExports['base']>
  public SVGFileCache: FileModifiedCache<ViewExportSVG>
  public FavoritesIconCache: IconCache
  public RecentIconCache: IconCache

  constructor(private readonly context: ExtensionContext) {
    // Create cache directory if it doesn't exist
    const cacheDir = Uri.joinPath(context.globalStorageUri, 'cache').fsPath
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true })
    }

    // Set up file paths for each cache
    const declarationCacheFilePath = path.join(cacheDir, 'declaration_cache.json')
    const svgCacheFilePath = path.join(cacheDir, 'svg_cache.json')
    const favoritesCacheFilePath = path.join(cacheDir, 'favorites_cache.json')
    const recentCacheFilePath = path.join(cacheDir, 'recent_cache.json')

    // Initialize caches
    this.DeclarationFileCache = new FileModifiedCache(declarationCacheFilePath)
    this.SVGFileCache = new FileModifiedCache(svgCacheFilePath)
    this.FavoritesIconCache = new IconCache(favoritesCacheFilePath)
    this.RecentIconCache = new IconCache(recentCacheFilePath, 10)
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

let cacheManager: CacheManager

/**
 * Initializes the cache manager. Should be called once from the `activate` function of your extension.
 */
export function initializeCacheManager(context: ExtensionContext): void {
  cacheManager = new CacheManager(context)
}

/**
 * Returns the cache manager instance.
 */
export function getCacheManager(): CacheManager {
  if (isEmpty(cacheManager)) {
    throw new Error(l10n.t('CacheManager has not been initialized'))
  }
  return cacheManager
}
