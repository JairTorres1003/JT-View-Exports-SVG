import type { SVGFile, ViewExportSVG } from '@jt-view-exports-svg/core'
import * as path from 'path'
import * as vsc from 'vscode'

import { REGEX_FILE } from '@/constants/regex'
import { AssetsPathsController, ShowNotExportedIconsController } from '@/controllers/config'
import { getCache } from '@/services/cache/main'
import type { ViewExportSVGCache } from '@/services/cache/ViewExportSVGCache'
import { componentDeclarationStore } from '@/store/ComponentDeclarationStore'

import { extractComponents } from '../svg/extracts'
import { getUriPath } from '../vscode/uri'
import { groupIconsByPattern } from './groupIconsByPattern'
import { pathToSVGFile } from './misc'

// Adjustable: 5-15 is the optimal range for I/O + CPU operations (Babel parse)
const CONCURRENCY_LIMIT = 10

interface ProcessResult {
  exportItem: ViewExportSVG
  fileItem: SVGFile
}

interface ProcessFileItemOptions {
  isShowNoExports: boolean
  cacheItem: ViewExportSVGCache
}

/**
 * Runs async tasks with a maximum concurrency limit.
 * Avoids external dependencies (e.g. p-limit) to keep Web extension compatibility.
 */
async function withConcurrency<T>(
  items: T[],
  limit: number,
  fn: (item: T, index: number) => Promise<void>
): Promise<void> {
  let index = 0

  async function worker(): Promise<void> {
    while (index < items.length) {
      const current = index++
      await fn(items[current], current)
    }
  }

  const workers = Array.from({ length: Math.min(limit, items.length) }, () => worker())
  await Promise.all(workers)
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

    const { components, declarations } = await extractComponents(file, uri)

    const componentList = options.isShowNoExports
      ? [...components.exported, ...components.noExported]
      : components.exported

    if (componentList.length === 0) return null

    const totalExports = components.exported.length
    const totalNoExports = components.noExported.length
    const totalSVG = totalExports + totalNoExports

    const exportItem: ViewExportSVG = {
      components: componentList,
      totalExports,
      totalNoExports,
      totalSVG,
      groupKind: { id: file.id, label: file.relativePath },
      isShowNoExports: options.isShowNoExports,
      files: [file.id],
    }

    await options.cacheItem.add(currentWorkspace, { file, data: exportItem })
    componentDeclarationStore.set(file.id, declarations)

    return { exportItem, fileItem: file }
  } catch (error) {
    console.error(vsc.l10n.t('Error processing file "{file}"', { file: uri.fsPath }), error)
    return null
  }
}

/**
 * Processes an array of URI items and executes an operation with the results.
 * @param items - Array of VS Code URIs to process
 * @param operation - Callback function that receives grouped export items and file list
 * @returns Promise that resolves when all files are processed
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

    await vsc.window.withProgress(progressOptions, async (progress) => {
      const configAssetsPath = new AssetsPathsController()
      const configShowNoExports = new ShowNotExportedIconsController()
      const isShowNoExports = configShowNoExports.isShow()
      const cacheItem = getCache().get('viewExports')

      const total = items.length
      let completed = 0
      const results: (ProcessResult | null)[] = new Array(total)

      await withConcurrency(items, CONCURRENCY_LIMIT, async (uri, index) => {
        results[index] = await processFileItem(uri, { isShowNoExports, cacheItem })

        completed++
        progress.report({
          increment: (1 / total) * 100,
          message: `${completed} / ${total}`,
        })
      })

      const validResults = results.filter((item): item is ProcessResult => item !== null)
      const exportItems = validResults.map((r) => r.exportItem)
      const fileList = validResults.map((r) => r.fileItem)

      if (!fileList.length) {
        operation([], [])
        return
      }

      configAssetsPath.set(fileList).catch((error) => {
        console.error(vsc.l10n.t('Error setting assets path'), error)
      })

      const grouped = groupIconsByPattern(exportItems)

      operation(grouped, fileList)
    })
  } catch (error) {
    console.error(vsc.l10n.t('Error processing files'), error)
  }
}
