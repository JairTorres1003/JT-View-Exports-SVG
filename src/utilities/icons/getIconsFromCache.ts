import { workspace } from 'vscode'

import { getFileTimestamp } from '../files'
import { isEmpty } from '../misc'

import { getCacheManager } from '@/controllers/cache'
import { ShowNotExportedIconsController } from '@/controllers/config'
import type { SVGIconCache } from '@/interfaces/cache'
import type { SVGComponent, ViewExportSVG } from '@/interfaces/ViewExportsSVG'

/**
 * Retrieves a list of SVG icon components from the cache based on whether they are recent or favorites.
 *
 * @param isRecent - If `true`, retrieves icons from the recent cache; otherwise, from the favorites cache.
 */
export const getIconsFromCache = (isRecent: boolean): ViewExportSVG[] => {
  let icons: SVGIconCache[] = []

  const { RecentIconCache, FavoritesIconCache } = getCacheManager()
  const cache = isRecent ? RecentIconCache : FavoritesIconCache

  if (!isEmpty(workspace.workspaceFolders)) {
    icons = cache.getIcons(workspace.workspaceFolders[0].uri) ?? []
  }

  const configShowNoExports = new ShowNotExportedIconsController()
  const isShowNoExports = configShowNoExports.isShow()

  const components: SVGComponent[] = []
  const otherTotal = {
    totalExports: 0,
    totalNoExports: 0,
  }

  const { SVGFileCache } = getCacheManager()

  icons?.forEach(({ location, name }) => {
    const lastModified = getFileTimestamp(location.file.absolutePath)
    const cachedFile = SVGFileCache.get(location.file.absolutePath, lastModified)

    if (cachedFile === undefined) return

    const component = cachedFile.components.find((c) => c.name === name)

    if (component !== undefined) {
      components.push(component)

      otherTotal[component.isExported ? 'totalExports' : 'totalNoExports']++
    } else if (!isEmpty(workspace.workspaceFolders)) {
      cache.remove(workspace.workspaceFolders[0].uri, { location, name })
    }
  })

  return [
    {
      components,
      isShowNoExports,
      totalSVG: components.length,
      ...otherTotal,
      groupKind: {
        id: isRecent ? 'recent' : 'favorite',
        label: workspace.workspaceFolders?.[0]?.name ?? '',
      },
    },
  ]
}
