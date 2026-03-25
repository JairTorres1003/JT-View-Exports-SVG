import type { SVGIcon, ViewExportSVG } from '@jt-view-exports-svg/core'

import { FileModifiedCacheController } from './FileModifiedCacheController'

/**
 * @deprecated This class is deprecated and will be removed in future versions.
 * Use CacheManager.ts instead, which provides a more flexible and scalable caching solution.
 * This class specifically manages a cache of SVG components, allowing for toggling of favorite status.
 */
export class ComponentsCacheController extends FileModifiedCacheController<ViewExportSVG> {
  /**
   * Toggles the `isFavorite` status of a given SVG icon within the cache.
   *
   * Looks up the icon by its absolute file path and name, and flips its `isFavorite` property.
   * If the icon or its file path cannot be found, the operation is aborted.
   * After toggling, the updated cache entry is saved.
   *
   * @param icon - The SVG icon whose favorite status should be toggled.
   */
  toggleFavoriteIcon(icon: SVGIcon) {
    const uri = icon.location?.id

    const current = this.get(uri, 0)

    if (!current) return

    const component = current.components.find((c) => c.name === icon.name && c.location.id === uri)

    if (component) {
      component.isFavorite = !component.isFavorite
      this.set(uri, current, 0)
    }
  }
}
