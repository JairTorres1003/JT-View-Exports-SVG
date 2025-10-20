import { l10n, type Uri, workspace } from 'vscode'

import { getCacheManager } from '@/controllers/cache'
import { RecentIconsShowController, ShowNotExportedIconsController } from '@/controllers/config'
import { CacheIconKind } from '@/enum/cache'
import type { SVGIconCache } from '@/types/cache'
import type { SVGComponent, SVGFile, SVGIcon, ViewExportSVG } from '@/types/ViewExportsSVG'

import { getFileTimestamp } from '../files/misc'
import { isEmpty } from '../misc'
import { svgFileToUri } from '../vscode/uri'

let filesExists: Record<string, boolean> = {}
const removeElementsCache: { files: string[]; icons: SVGIcon[] } = {
  files: [],
  icons: [],
}

/**
 * Checks if a file exists in the cache and updates the cache if it doesn't.
 * @param uirFile - The absolute path of the file to check.
 * @returns A boolean indicating whether the file exists.
 */
const checkFileExists = async (uirFile: Uri): Promise<boolean> => {
  const filePath = uirFile.toString()

  if (filesExists[filePath] !== undefined) return filesExists[filePath]

  let exists = false
  try {
    await workspace.fs.stat(uirFile)
    exists = true
  } catch {
    exists = false
  }

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
const validateShowIcons = (): Partial<Record<CacheIconKind, boolean>> => {
  const configRecent = new RecentIconsShowController()

  return {
    [CacheIconKind.RECENT]: configRecent.isShow(),
    [CacheIconKind.FAVORITE]: true,
  }
}

/**
 * Retrieves a component from the cache based on the provided icon.
 * @param icon - The SVGIconCache object containing the icon's metadata.
 * @returns The SVGComponent if found in the cache, otherwise undefined.
 */
const getComponentCache = async (icon: SVGIconCache) => {
  const { location, name } = icon

  const uri = svgFileToUri(location.file)

  const existFile = await checkFileExists(uri)
  if (!existFile) {
    removeElementsCache.icons.push({ name, location })
    return
  }

  const { ComponentsFileCache } = getCacheManager()

  const lastModified = await getFileTimestamp(location.file.uri)
  const cachedFile = ComponentsFileCache.get(location.file.uri, lastModified)

  if (!cachedFile) return

  return cachedFile.components.find((c) => c.name === name)
}

/**
 * Retrieves icons from the cache and processes them into a structured format.
 * @returns An array of ViewExportSVG objects containing the icons and their metadata.
 */
export const getIconsFromCache = async (): Promise<ViewExportSVG[]> => {
  const { RecentIconCache, FavoritesIconCache } = getCacheManager()
  const validateShow = validateShowIcons()

  const cacheList = [RecentIconCache, FavoritesIconCache]
  const result: ViewExportSVG[] = []

  const { ComponentsFileCache } = getCacheManager()

  await Promise.all(
    cacheList.map(async (cache, index) => {
      const kind = cache.getKind()
      if (!validateShow[kind]) return

      let icons: SVGIconCache[] = []
      const workspaceFolderUri = workspace.workspaceFolders?.[0]

      if (!isEmpty(workspaceFolderUri)) {
        icons = cache.getIcons(workspaceFolderUri) ?? []
      }

      const components: SVGComponent[] = []
      const files = new Map<string, SVGFile>()
      const otherProps: Pick<ViewExportSVG, 'totalExports' | 'totalNoExports'> = {
        totalExports: 0,
        totalNoExports: 0,
      }

      await Promise.all(
        icons.map(async (icon) => {
          const component = await getComponentCache(icon)

          if (component) {
            components.push(component)

            otherProps[component.isExported ? 'totalExports' : 'totalNoExports'] += 1

            files.set(icon.location.file.uri, icon.location.file)
          } else if (!isEmpty(workspaceFolderUri)) {
            cache.remove(workspaceFolderUri, icon)
          }
        })
      )

      if (removeElementsCache.icons.length > 0 && !isEmpty(workspaceFolderUri)) {
        cache.remove(workspaceFolderUri, removeElementsCache.icons)
        removeElementsCache.icons = []
      }

      const sortedFiles = [...files.values()].flat().sort((a, b) => {
        return a.uri.localeCompare(b.uri)
      })

      const configShowNoExports = new ShowNotExportedIconsController()
      const isShowNoExports = configShowNoExports.isShow()

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
  )

  if (removeElementsCache.files.length > 0) {
    ComponentsFileCache.delete(removeElementsCache.files)
  }

  filesExists = {}

  return result
}
