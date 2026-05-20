import {
  type FileIdentifier,
  IconCollectionKind,
  type SVGComponent,
  type SVGFile,
  type SVGIconCollection,
  type ViewExportSVG,
} from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import { getConfig } from '@/services/config'
import { processFiles } from '@/utilities/files/processFiles'
import { svgFileToUri } from '@/utilities/vscode/uri'

import type { FilesCache } from './cache/FilesCache'
import type { IconCollectionCacheEntry } from './cache/IconCollectionCache'
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
  notFoundIcons: SVGIconCollection[],
  fileIds: FileIdentifier[]
) {
  const iconsCache = getCache().get('icons')
  const viewExportCache = getCache().get('viewExports')

  iconsCache.removeIconsInBulk(workspace, notFoundIcons)
  viewExportCache.removeByFileIds(workspace, fileIds)
}

async function detectFilesToProcess(
  collectionEntries: (IconCollectionCacheEntry | undefined)[],
  viewExportData: Record<FileIdentifier, ViewExportSVG>,
  filesCache: FilesCache,
  workspace: vsc.WorkspaceFolder
): Promise<Map<FileIdentifier, vsc.Uri>> {
  const toProcessMap = new Map<FileIdentifier, vsc.Uri>()

  for (const collection of collectionEntries) {
    if (!collection) continue

    for (const fileId of Object.keys(collection.fileCounts) as FileIdentifier[]) {
      if (viewExportData[fileId]) continue

      const file = await filesCache.getFile(workspace, fileId)
      if (!file) continue

      if (!toProcessMap.has(fileId)) {
        toProcessMap.set(fileId, svgFileToUri(file))
      }
    }
  }

  return toProcessMap
}

async function getIconsComponents(
  workspace: vsc.WorkspaceFolder,
  collection: IconCollectionCacheEntry,
  viewExportData: Record<FileIdentifier, ViewExportSVG>,
  filesCache: FilesCache
): Promise<IconsComponentsResult | null> {
  const notFoundIcons: SVGIconCollection[] = []
  const notFoundFileIds: FileIdentifier[] = []

  const results: IconsComponentsResult = { files: {}, components: [] }

  for (const icon of collection.data) {
    const file = await filesCache.getFile(workspace, icon.location.id)

    if (!file) {
      notFoundFileIds.push(icon.location.id)
      continue
    }

    const exists = await checkFileExists(file)

    if (!exists) {
      notFoundIcons.push({ ...icon, collection: collection.name })
      notFoundFileIds.push(file.id)
      continue
    }

    const data = viewExportData[file.id]
    if (!data) continue

    const component = data.components.find((c) => c.name === icon.name)
    if (!component) continue

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
export const getIconsCollection = async (): Promise<ViewExportSVG[]> => {
  const currentWorkspace = vsc.workspace.workspaceFolders?.[0]
  if (!currentWorkspace) return []

  const iconsCache = getCache().get('icons')
  const viewExportCache = getCache().get('viewExports')
  const filesCache = getCache().get('files')
  const limits = getConfig().get('iconCollection').getValue()
  const collectionList = Object.values(IconCollectionKind).filter((c) => (limits[c] ?? 0) > 0)

  // Phase 1: Load all collections and their viewExports cache
  const [collectionEntries, viewExportData] = await Promise.all([
    Promise.all(collectionList.map((c) => iconsCache.get([currentWorkspace, c]))),
    viewExportCache.get(currentWorkspace).then((r) => r ?? {}),
  ])

  // Phase 2: Detect all files that need processing
  const toProcessMap = await detectFilesToProcess(
    collectionEntries,
    viewExportData,
    filesCache,
    currentWorkspace
  )

  if (toProcessMap.size > 0) {
    // Phase 3: A single processFiles command for all pending files
    await processFiles([...toProcessMap.values()])

    const refreshed = (await viewExportCache.get(currentWorkspace)) ?? {}
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

      const components = await getIconsComponents(
        currentWorkspace,
        cacheEntry,
        viewExportData,
        filesCache
      )
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

  return results.items.filter((v): v is NonNullable<typeof v> => !!v)
}
