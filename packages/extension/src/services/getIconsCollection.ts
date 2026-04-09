import {
  type FileIdentifier,
  IconCollectionKind,
  type SVGComponent,
  type SVGFile,
  type ViewExportSVG,
} from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import { processFiles } from '@/utilities/files/processFiles'
import { svgFileToUri } from '@/utilities/vscode/uri'

import type { IconCollectionCacheEntry, IconEntry } from './cache/IconCollectionCache'
import { getCache } from './cache/main'

const fileCache = new Map<FileIdentifier, Promise<boolean>>()

interface IconsComponentsResult {
  files: Record<FileIdentifier, SVGFile>
  components: SVGComponent[]
}

/**
 * Checks if a file exists in the workspace.
 *
 * @param file - The SVG file object to check for existence
 * @returns A promise that resolves to true if the file exists, false otherwise
 *  */
const checkFileExists = (file: SVGFile): Promise<boolean> => {
  if (fileCache.has(file.id)) {
    return fileCache.get(file.id) as Promise<boolean>
  }

  const uri = svgFileToUri(file)

  const promise = Promise.resolve(vsc.workspace.fs.stat(uri))
    .then(() => true)
    .catch(() => false)

  fileCache.set(file.id, promise)

  return promise
}

/**
 * Removes not found icons and their associated view exports from the cache.
 */
function proccessNotFoundIcons(
  workspace: vsc.WorkspaceFolder,
  notFoundIcons: IconEntry[],
  fileIds: FileIdentifier[]
) {
  const iconsCache = getCache().get('icons')
  const viewExportCache = getCache().get('viewExports')

  iconsCache.removeIconsInBulk(workspace, notFoundIcons)
  viewExportCache.removeByFileIds(workspace, fileIds)
}

/**
 * Detects which files need to be processed by comparing the icons in the collections
 * with the existing view export data, and checking for file existence.
 */
async function detectFilesToProcess(
  collectionEntries: Array<IconCollectionCacheEntry | undefined>,
  viewExportData: Record<FileIdentifier, ViewExportSVG>
): Promise<Map<FileIdentifier, vsc.Uri>> {
  const toProcessMap = new Map<FileIdentifier, vsc.Uri>()

  await Promise.all(
    collectionEntries.map(async (entry) => {
      if (!entry) return

      await Promise.all(
        entry.data.map(async (icon) => {
          const file = entry.files[icon.location.id].file

          if (viewExportData[file.id]) return

          const fileExist = await checkFileExists(file)
          if (!fileExist) return

          if (!toProcessMap.has(file.id)) {
            toProcessMap.set(file.id, svgFileToUri(file))
          }
        })
      )
    })
  )

  return toProcessMap
}

/**
 * Fetches the SVG components for a given icon collection, checking for file existence and handling not found icons.
 */
const getIconsComponents = async (
  workspace: vsc.WorkspaceFolder,
  collection: IconCollectionCacheEntry,
  data: Record<FileIdentifier, ViewExportSVG>
): Promise<IconsComponentsResult | null> => {
  if (collection.data.length === 0) return null

  const results: IconsComponentsResult = { files: {}, components: [] }
  const notFoundIcons: IconEntry[] = []
  const notFoundFileIds: FileIdentifier[] = []

  for (const icon of collection.data) {
    const file = collection.files[icon.location.id].file
    const fileExist = await checkFileExists(file)

    if (!fileExist) {
      notFoundIcons.push({ ...icon, file, collection: collection.name })
      notFoundFileIds.push(file.id)
      continue
    }

    const components = data[file.id]?.components ?? []
    const component = components.find((c) => c.name === icon.name)

    if (!component) {
      notFoundIcons.push({ ...icon, file, collection: collection.name })
      continue
    }

    results.files[file.id] = file
    results.components.push(component)
  }

  if (notFoundIcons.length > 0) {
    proccessNotFoundIcons(workspace, notFoundIcons, notFoundFileIds)
  }

  return results
}

/**
 * Retrieves the complete icons collection from the current workspace.
 */
export const getIconsCollection = async (): Promise<{
  items: ViewExportSVG[]
  files: SVGFile[]
}> => {
  const currentWorkspace = vsc.workspace.workspaceFolders?.[0]
  if (!currentWorkspace) return { items: [], files: [] }

  const iconsCache = getCache().get('icons')
  const viewExportCache = getCache().get('viewExports')
  const collectionList = Object.values(IconCollectionKind)

  // Phase 1: Load all collections and their viewExports cache
  const [collectionEntries, viewExportData] = await Promise.all([
    Promise.all(collectionList.map((c) => iconsCache.get([currentWorkspace, c]))),
    viewExportCache.get(currentWorkspace).then((r) => r?.data ?? {}),
  ])

  // Phase 2: Detect all files that need processing
  const toProcessMap = await detectFilesToProcess(collectionEntries, viewExportData)

  if (toProcessMap.size > 0) {
    // Phase 3: A single processFiles command for all pending files
    await processFiles([...toProcessMap.values()])

    const refreshed = (await viewExportCache.get(currentWorkspace))?.data ?? {}
    Object.assign(viewExportData, refreshed)
  }

  // Phase 4: Build results for each collection with complete data
  const results: { items: ViewExportSVG[]; files: Record<FileIdentifier, SVGFile> } = {
    items: [],
    files: {},
  }

  await Promise.all(
    collectionList.map(async (collection, index) => {
      const cacheEntry = collectionEntries[index]
      if (!cacheEntry) return

      const components = await getIconsComponents(currentWorkspace, cacheEntry, viewExportData)
      if (!components) return

      Object.assign(results.files, components.files)

      results.items[index] = {
        components: components.components,
        files: Object.keys(components.files) as FileIdentifier[],
        groupKind: {
          id: collection,
          label: vsc.l10n.t('{kind} icons', { kind: vsc.l10n.t(collection) }),
        },
        isShowNoExports: false,
        totalExports: components.components.length,
        totalNoExports: 0,
        totalSVG: components.components.length,
      }
    })
  )

  fileCache.clear()

  return {
    items: results.items.filter((v): v is NonNullable<typeof v> => !!v),
    files: Object.values(results.files),
  }
}
