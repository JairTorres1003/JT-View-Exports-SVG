import { FileModifiedCacheController } from './FileModifiedCacheController'

import type { SVGIcon, ViewExportSVG } from '@/types/ViewExportsSVG'
import { getFileTimestamp } from '@/utilities/files'

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
    const absolutePath = icon.location?.file?.absolutePath

    if (!absolutePath) return

    const lastModified = getFileTimestamp(absolutePath)
    const current = this.get(absolutePath, lastModified)

    if (!current) return

    const component = current.components.find(
      (c) => c.name === icon.name && c.location.file.absolutePath === absolutePath
    )

    if (component) {
      component.isFavorite = !component.isFavorite
      this.set(absolutePath, current, lastModified)
    }
  }
}
