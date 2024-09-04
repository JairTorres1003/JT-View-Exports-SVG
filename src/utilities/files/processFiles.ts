import * as path from 'path'

import { ProgressLocation, type Uri, window, type ProgressOptions } from 'vscode'

import { DeclarationFileCache, FileModifiedCache } from '../cache'
import { AssetsPaths } from '../config'
import { isEmpty } from '../misc'
import { extractSVGExports } from '../svg'
import { getTranslations } from '../vscode'

import { getFileTimestamp, pathToSVGFile } from './misc'

import { REGEX_FILE } from '@/constants/regex'
import { type SVGFile, type ViewExportSVG } from '@/interfaces/ViewExportsSVG'

// Create an instance of FileModifiedCache for caching SvgExport objects
const fileCache = new FileModifiedCache<ViewExportSVG>()

/**
 * Processes the selected files and extracts SVG exports from them.
 *
 * @param items - An array of URIs representing the selected files.
 * @param operation - A callback function that will be called with the extracted SVG exports.
 * @returns A promise that resolves when the processing is complete.
 */
export async function processFiles(
  items: Uri[],
  operation: (result: ViewExportSVG[]) => void
): Promise<void> {
  try {
    const i18n = getTranslations()
    const currentItems = items
    const fileSelected: Uri[] = []
    const progressOptions: ProgressOptions = {
      location: ProgressLocation.Notification,
      title: i18n.iconExtractionInProgress,
      cancellable: false,
    }

    const progress = await window.withProgress(progressOptions, async (progress) => {
      const configAssetsPath = new AssetsPaths()
      const SVGFiles: SVGFile[] = []
      const SVGExports: ViewExportSVG[] = []

      currentItems.sort((a, b) => a.fsPath.localeCompare(b.fsPath))

      currentItems.forEach((item) => {
        if (item.scheme === 'file') {
          const absolutePath = item.fsPath
          const extname = path.extname(absolutePath)

          if (REGEX_FILE.test(extname)) {
            fileSelected.push(item)
          }
        }
      })

      // Extract SVG exports from the selected files
      await Promise.all(
        fileSelected.map(async (f) => {
          try {
            const file = await pathToSVGFile(f.fsPath)
            const lastModified = getFileTimestamp(file.absolutePath)
            const cachedFile = fileCache.get(file.absolutePath, lastModified)

            if (cachedFile !== undefined && cachedFile.totalExports > 0) {
              SVGExports.push(cachedFile)
              SVGFiles.push(file)

              return
            }

            const { base, svg } = await extractSVGExports(file)
            const totalExports = svg.exportComponents.length
            const totalNoExports = svg.noExportComponents.length
            const totalSVG = totalExports + totalNoExports

            if (totalExports > 0) {
              svg.exportComponents.sort((a, b) => a.name.localeCompare(b.name))
              const result: ViewExportSVG = {
                ...svg,
                totalExports,
                totalNoExports,
                totalSVG,
                groupKind: file.absolutePath,
                labelGroupKind: file.relativePath,
              }

              fileCache.set(file.absolutePath, result, lastModified)
              DeclarationFileCache.set(file.absolutePath, base, lastModified)
              SVGExports.push(result)
              SVGFiles.push(file)
            }
          } catch (error) {
            console.error(`Error processing file ${f.fsPath}:`, error)
          }
        })
      )

      if (SVGFiles.length > 0) {
        // Update the assets path configuration
        configAssetsPath.set(SVGFiles).catch((error) => {
          console.error('Error setting assets path:', error)
        })
      }

      // Process the SVG exports
      operation(SVGExports)

      return progress
    })

    // Hide the progress message if it was shown
    if (!isEmpty(progress)) {
      progress.report({ increment: 100 })
    }
  } catch (error) {
    console.error('Error processing files:', error)
  }
}
