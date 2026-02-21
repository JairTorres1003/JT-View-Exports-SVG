import type { SVGIcon, ViewExportSVG } from '@jt-view-exports-svg/core'
import { l10n } from 'vscode'

import { getFileTimestamp } from '@/utilities/files/misc'

import { FileModifiedCacheController } from './FileModifiedCacheController'

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
    const uri = icon.location?.file?.uri

    if (!uri) return

    getFileTimestamp(uri)
      .then((lastModified) => {
        const current = this.get(uri, lastModified)

        if (!current) return

        const component = current.components.find(
          (c) => c.name === icon.name && c.location.file.uri === uri
        )

        if (component) {
          component.isFavorite = !component.isFavorite
          this.set(uri, current, lastModified)
        }
      })
      .catch(() => {
        console.error(l10n.t('Error toggling favorite status for icon {name}', { name: icon.name }))
      })
  }
}
