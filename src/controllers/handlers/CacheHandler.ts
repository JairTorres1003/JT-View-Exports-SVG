import { l10n, window, workspace } from 'vscode'

import { getCacheManager } from '../cache'

import { SVGPostMessage } from '@/enum/ViewExportsSVG'
import type { SVGIcon } from '@/types/ViewExportsSVG'
import type { FuncPostMessage } from '@/types/views/PostMessage'
import { getIconsFromCache } from '@/utilities/icons/getIconsFromCache'
import { isEmpty } from '@/utilities/misc'

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
    const icons = getIconsFromCache()
    this.postMessage(SVGPostMessage.SendHomeIcons, icons)
  }

  private addIconToCache(icon: SVGIcon, isRecent: boolean): void {
    if (icon.location.file.isTemporary) {
      window.showWarningMessage(
        isRecent
          ? l10n.t('Cannot add temporary icons to recent icons.')
          : l10n.t('Cannot add temporary icons to favorites.')
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
