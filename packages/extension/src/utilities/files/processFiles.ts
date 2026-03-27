import type { SVGFile, ViewExportSVG } from '@jt-view-exports-svg/core'
import * as path from 'path'
import * as vsc from 'vscode'

import { REGEX_FILE } from '@/constants/regex'
import { AssetsPathsController, ShowNotExportedIconsController } from '@/controllers/config'
import { getCache } from '@/services/cache/main'
import type { ViewExportSVGCache } from '@/services/cache/ViewExportSVGCache'
import { isEmpty } from '../misc'
import { extractSVGData } from '../svg/extracts'
import { getUriPath } from '../vscode/uri'
import { groupIconsByPattern } from './groupIconsByPattern'
import { pathToSVGFile } from './misc'

interface ProcessResult {
  exportItem: ViewExportSVG
  fileItem: SVGFile
}

interface ProcessFileItemOptions {
  isShowNoExports: boolean
  cacheItem: ViewExportSVGCache
}

/**
 * Processes a single file to extract SVG information.
 * Isolated logic for better testability and concurrency management.
 *
 * @param uri - The file URI to process.
 * @param isShowNoExports - Configuration flag to include non-exported components.
 * @returns A promise that resolves to the process result or null if invalid/error.
 */
async function processFileItem(
  uri: vsc.Uri,
  options: ProcessFileItemOptions
): Promise<ProcessResult | null> {
  try {
    const extname = path.extname(uri.fsPath)

    if (!REGEX_FILE.test(extname)) return null

    const file = await pathToSVGFile(getUriPath(uri))

    const currentWorkspace = vsc.workspace.workspaceFolders?.[0] ?? 'global'
    const currentItem = await options.cacheItem.getByFile(currentWorkspace, file)

    if (currentItem) {
      return { exportItem: currentItem.data, fileItem: file }
    }

    const { svg } = await extractSVGData(file, uri)

    const totalExports = svg.exportComponents.length
    const totalNoExports = svg.noExportComponents.length
    const totalSVG = totalExports + totalNoExports

    const components = options.isShowNoExports
      ? [...svg.exportComponents, ...svg.noExportComponents]
      : svg.exportComponents

    if (components.length > 0) {
      const exportItem: ViewExportSVG = {
        components,
        totalExports,
        totalNoExports,
        totalSVG,
        groupKind: { id: file.id, label: file.relativePath },
        isShowNoExports: options.isShowNoExports,
        files: [file.id],
      }

      await options.cacheItem.add(currentWorkspace, { file, data: exportItem })

      return { exportItem, fileItem: file }
    }
  } catch (error) {
    console.error(vsc.l10n.t('Error processing file "{file}"', { file: uri.fsPath }), error)
  }

  return null
}

/**
 * Processes the selected files and extracts SVG exports from them.
 *
 * @param items - An array of URIs representing the selected files.
 * @param operation - A callback function that will be called with the extracted SVG exports.
 * @returns A promise that resolves when the processing is complete.
 */
export async function processFiles(
  items: vsc.Uri[],
  operation: (result: ViewExportSVG[], files: SVGFile[]) => void
): Promise<void> {
  try {
    const progressOptions: vsc.ProgressOptions = {
      location: vsc.ProgressLocation.Notification,
      title: vsc.l10n.t('Icon extraction in progress...'),
      cancellable: false,
    }

    const progress = await vsc.window.withProgress(progressOptions, async (progress) => {
      const configAssetsPath = new AssetsPathsController()
      const configShowNoExports = new ShowNotExportedIconsController()
      const isShowNoExports = configShowNoExports.isShow()
      const cacheItem = getCache().get('viewExports')

      // Process files in parallel
      // Note: For extremely large datasets (thousands of files), consider using a concurrency limit library in the future.
      const results = await Promise.all(
        items.map((uri) => processFileItem(uri, { isShowNoExports, cacheItem }))
      )

      const validResults = results.filter((item): item is ProcessResult => item !== null)

      const exportItems = validResults.map((r) => r.exportItem)
      const fileList = validResults.map((r) => r.fileItem)

      if (!fileList.length) {
        operation([], [])
        return progress
      }

      configAssetsPath.set(fileList).catch((error) => {
        console.error(vsc.l10n.t('Error setting assets path'), error)
      })

      // Group the SVG exports by pattern
      const groupedSVGExports = groupIconsByPattern(exportItems)

      // Process the SVG exports
      operation(groupedSVGExports, fileList)

      return progress
    })

    // Hide the progress message if it was shown
    if (!isEmpty(progress)) {
      progress.report({ increment: 100 })
    }
  } catch (error) {
    console.error(vsc.l10n.t('Error processing files'), error)
  }
}
