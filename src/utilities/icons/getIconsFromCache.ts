import { l10n, workspace } from 'vscode'

import { getFileTimestamp } from '../files'
import { isEmpty } from '../misc'

import { getCacheManager } from '@/controllers/cache'
import { RecentIconsShowController, ShowNotExportedIconsController } from '@/controllers/config'
import { CacheIconKind } from '@/enum/cache'
import type { SVGIconCache } from '@/types/cache'
import type { SVGComponent, ViewExportSVG } from '@/types/ViewExportsSVG'

const valideteShowIcons = (): Partial<Record<CacheIconKind, boolean>> => {
  const configRecent = new RecentIconsShowController()

  return {
    [CacheIconKind.RECENT]: configRecent.isShow(),
    [CacheIconKind.FAVORITE]: true,
  }
}

export const getIconsFromCache = (): ViewExportSVG[] => {
  const { RecentIconCache, FavoritesIconCache } = getCacheManager()
  const validateShow = valideteShowIcons()

  const cacheList = [RecentIconCache, FavoritesIconCache]
  const result: ViewExportSVG[] = []

  cacheList.forEach((cache, index) => {
    const kind = cache.getKind()
    if (!validateShow[kind]) return

    let icons: SVGIconCache[] = []
    const workspaceFolderUri = workspace.workspaceFolders?.[0]?.uri

    if (!isEmpty(workspaceFolderUri)) {
      icons = cache.getIcons(workspaceFolderUri) ?? []
    }

    const configShowNoExports = new ShowNotExportedIconsController()
    const isShowNoExports = configShowNoExports.isShow()

    const components: SVGComponent[] = []
    const otherTotal = {
      totalExports: 0,
      totalNoExports: 0,
    }

    const { ComponentsFileCache } = getCacheManager()

    icons?.forEach(({ location, name }) => {
      const lastModified = getFileTimestamp(location.file.absolutePath)
      const cachedFile = ComponentsFileCache.get(location.file.absolutePath, lastModified)

      if (!cachedFile) return

      const component = cachedFile.components.find((c) => c.name === name)

      if (component) {
        components.push(component)

        otherTotal[component.isExported ? 'totalExports' : 'totalNoExports']++
      } else if (!isEmpty(workspaceFolderUri)) {
        cache.remove(workspaceFolderUri, { location, name })
      }
    })

    result.push({
      components,
      isShowNoExports,
      totalSVG: components.length,
      ...otherTotal,
      groupKind: {
        id: workspaceFolderUri ? cache.getId(workspaceFolderUri) : `icon-${index}`,
        label: l10n.t('{kind} icons', {
          kind: l10n.t(kind).charAt(0).toUpperCase() + l10n.t(kind).slice(1),
        }),
      },
    })
  })

  return result
}
