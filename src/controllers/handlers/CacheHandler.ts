import { l10n, window, workspace } from 'vscode'

import { getCacheManager } from '../cache'

import { SVGPostMessage } from '@/enum/ViewExportsSVG'
import type { SVGIcon } from '@/types/ViewExportsSVG'
import type { FuncPostMessage } from '@/types/views/PostMessage'
import { getIconsFromCache } from '@/utilities/icons/getIconsFromCache'
import { getUnknownError, isEmpty } from '@/utilities/misc'

export class CacheHandler {
  constructor(private readonly postMessage: FuncPostMessage) {}

  addRecentIcon(icon: SVGIcon): void {
    this.addIconToCache(icon, true)
  }

  removeRecentIcon(icon: SVGIcon): void {
    this.removeIconFromCache(icon, true)
  }

  clearRecentIcons(): void {
    this.clearIconsFromCache(true)
  }

  addFavoriteIcon(icon: SVGIcon): void {
    this.addIconToCache(icon, false)
  }

  removeFavoriteIcon(icon: SVGIcon): void {
    this.removeIconFromCache(icon, false)
  }

  clearFavoriteIcons(): void {
    this.clearIconsFromCache(false)
  }

  getHomeIcons(): void {
    getIconsFromCache()
      .then((icons) => {
        this.postMessage(SVGPostMessage.SendHomeIcons, icons)
      })
      .catch((e) => {
        window.showErrorMessage(
          l10n.t('Error retrieving icons: {error}', { error: getUnknownError(e) })
        )
      })
  }

  private addIconToCache(icon: SVGIcon, isRecent: boolean): void {
    if (icon.location.file.isTemporary) {
      window.showWarningMessage(
        isRecent
          ? l10n.t('Icons in the temp directory cannot be added to recent icons.')
          : l10n.t('Icons in the temp directory cannot be added to favorites.')
      )
      return
    }

    const { RecentIconCache, FavoritesIconCache, ComponentsFileCache } = getCacheManager()

    if (isEmpty(workspace.workspaceFolders)) return

    const cache = isRecent ? RecentIconCache : FavoritesIconCache
    cache.add(workspace.workspaceFolders[0].uri, [icon])

    if (!isRecent) {
      ComponentsFileCache.toggleFavoriteIcon(icon)
    }

    this.getHomeIcons()
  }

  private removeIconFromCache(icon: SVGIcon, isRecent: boolean): void {
    if (icon.location.file.isTemporary) return

    const { RecentIconCache, FavoritesIconCache, ComponentsFileCache } = getCacheManager()

    if (isEmpty(workspace.workspaceFolders)) return

    const cache = isRecent ? RecentIconCache : FavoritesIconCache
    cache.remove(workspace.workspaceFolders[0].uri, icon)

    if (!isRecent) {
      ComponentsFileCache.toggleFavoriteIcon(icon)
    }

    this.getHomeIcons()
  }

  private clearIconsFromCache(isRecent: boolean): void {
    const { RecentIconCache, FavoritesIconCache } = getCacheManager()
    const cache = isRecent ? RecentIconCache : FavoritesIconCache
    cache.clear()

    this.getHomeIcons()
  }
}
