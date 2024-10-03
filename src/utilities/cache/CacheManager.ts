import * as fs from 'fs'
import * as path from 'path'

import { Uri, type ExtensionContext } from 'vscode'

import { isEmpty } from '../misc'
import { translate } from '../vscode'

import { FileModifiedCache } from './FileModifiedCache'

import { type ExtractSVGExports, type ViewExportSVG } from '@/interfaces/ViewExportsSVG'

/**
 * Cache manager to handle multiple file caches, one for each type.
 */
class CacheManager {
  public DeclarationFileCache: FileModifiedCache<ExtractSVGExports['base']>
  public SVGFileCache: FileModifiedCache<ViewExportSVG>

  constructor(private readonly context: ExtensionContext) {
    // Create cache directory if it doesn't exist
    const cacheDir = Uri.joinPath(context.globalStorageUri, 'cache').fsPath
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true })
    }

    // Set up file paths for each cache
    const declarationCacheFilePath = path.join(cacheDir, 'declaration_cache.json')
    const svgCacheFilePath = path.join(cacheDir, 'svg_cache.json')

    // Initialize caches
    this.DeclarationFileCache = new FileModifiedCache<ExtractSVGExports['base']>(
      declarationCacheFilePath
    )
    this.SVGFileCache = new FileModifiedCache<ViewExportSVG>(svgCacheFilePath)
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
    throw new Error(translate('CacheManager has not been initialized'))
  }
  return cacheManager
}
