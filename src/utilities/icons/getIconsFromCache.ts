import * as fs from 'node:fs'

import { l10n, workspace } from 'vscode'

import { getFileTimestamp } from '../files'
import { isEmpty } from '../misc'

import { getCacheManager } from '@/controllers/cache'
import { RecentIconsShowController, ShowNotExportedIconsController } from '@/controllers/config'
import { CacheIconKind } from '@/enum/cache'
import type { SVGIconCache } from '@/types/cache'
import type { SVGComponent, SVGFile, SVGIcon, ViewExportSVG } from '@/types/ViewExportsSVG'

const filesExists: Record<string, boolean> = {}
const removeElementsCache: { files: string[]; icons: SVGIcon[] } = {
  files: [],
  icons: [],
}

/**
 * Checks if a file exists in the cache and updates the cache if it doesn't.
 * @param filePath - The absolute path of the file to check.
 * @returns A boolean indicating whether the file exists.
 */
const checkFileExists = (filePath: string): boolean => {
  if (filesExists[filePath] !== undefined) return filesExists[filePath]

  const exists = fs.existsSync(filePath)

  if (!exists) {
    removeElementsCache.files.push(filePath)
  }

  filesExists[filePath] = exists
  return exists
}

/**
 * Validates whether the icons should be shown based on the configuration.
 * @returns An object indicating whether recent and favorite icons should be shown.
 */
const valideteShowIcons = (): Partial<Record<CacheIconKind, boolean>> => {
  const configRecent = new RecentIconsShowController()

  return {
    [CacheIconKind.RECENT]: configRecent.isShow(),
    [CacheIconKind.FAVORITE]: true,
  }
}

/**
 * Retrieves icons from the cache and processes them into a structured format.
 * @returns An array of ViewExportSVG objects containing the icons and their metadata.
 */
export const getIconsFromCache = (): ViewExportSVG[] => {
  const { RecentIconCache, FavoritesIconCache } = getCacheManager()
  const validateShow = valideteShowIcons()

  const cacheList = [RecentIconCache, FavoritesIconCache]
  const result: ViewExportSVG[] = []

  const { ComponentsFileCache } = getCacheManager()

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
    const files = new Map<string, SVGFile[]>()
    const otherProps: Pick<ViewExportSVG, 'totalExports' | 'totalNoExports'> = {
      totalExports: 0,
      totalNoExports: 0,
    }

    icons?.forEach(({ location, name }) => {
      if (!checkFileExists(location.file.absolutePath)) {
        removeElementsCache.icons.push({ name, location })
        return
      }

      const lastModified = getFileTimestamp(location.file.absolutePath)
      const cachedFile = ComponentsFileCache.get(location.file.absolutePath, lastModified)

      if (!cachedFile) return

      const component = cachedFile.components.find((c) => c.name === name)

      if (component) {
        components.push(component)

        otherProps[component.isExported ? 'totalExports' : 'totalNoExports']++

        if (!files.has(location.file.absolutePath)) {
          files.set(location.file.absolutePath, [])
        }

        files.get(location.file.absolutePath)?.push(location.file)
      } else if (!isEmpty(workspaceFolderUri)) {
        cache.remove(workspaceFolderUri, { location, name })
      }
    })

    if (removeElementsCache.icons.length > 0 && !isEmpty(workspaceFolderUri)) {
      cache.remove(workspaceFolderUri, removeElementsCache.icons)
      removeElementsCache.icons = []
    }

    const sortedFiles = [...files.values()].flat().sort((a, b) => {
      return a.absolutePath.localeCompare(b.absolutePath)
    })

    result.push({
      ...otherProps,
      components,
      isShowNoExports,
      totalSVG: components.length,
      files: sortedFiles,
      groupKind: {
        id: workspaceFolderUri ? cache.getId(workspaceFolderUri) : `icon-${index}`,
        label: l10n.t('{kind} icons', {
          kind: l10n.t(kind).charAt(0).toUpperCase() + l10n.t(kind).slice(1),
        }),
      },
    })
  })

  if (removeElementsCache.files.length > 0) {
    ComponentsFileCache.delete(removeElementsCache.files)
  }

  return result
}
