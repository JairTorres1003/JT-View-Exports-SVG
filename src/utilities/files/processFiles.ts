import * as path from 'path'

import { ProgressLocation, type Uri, window, type ProgressOptions } from 'vscode'

import { DeclarationFileCache, SVGFileCache } from '../cache'
import { AssetsPaths, ShowNotExportedIcons } from '../config'
import { isEmpty } from '../misc'
import { extractSVGData } from '../svg'
import { getTranslations } from '../vscode'

import { groupIconsByPattern } from './groupIconsByPattern'
import { getFileTimestamp, pathToSVGFile } from './misc'

import { REGEX_FILE } from '@/constants/regex'
import { type SVGFile, type ViewExportSVG } from '@/interfaces/ViewExportsSVG'

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
    const fileSelected: Uri[] = []
    const progressOptions: ProgressOptions = {
      location: ProgressLocation.Notification,
      title: i18n.iconExtractionInProgress,
      cancellable: false,
    }

    const progress = await window.withProgress(progressOptions, async (progress) => {
      const configAssetsPath = new AssetsPaths()
      const configShowNoExports = new ShowNotExportedIcons()
      const SVGFiles: SVGFile[] = []
      const SVGExports: ViewExportSVG[] = []

      items.forEach((item) => {
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
            const cachedFile = SVGFileCache.get(file.absolutePath, lastModified)

            if (
              cachedFile !== undefined &&
              configShowNoExports.isShow() === cachedFile.isShowNoExports
            ) {
              SVGExports.push(cachedFile)
              SVGFiles.push(file)

              return
            }

            const { base, svg } = await extractSVGData(file)
            const totalExports = svg.exportComponents.length
            const totalNoExports = svg.noExportComponents.length
            const totalSVG = totalExports + totalNoExports

            const components = configShowNoExports.isShow()
              ? [...svg.exportComponents, ...svg.noExportComponents]
              : svg.exportComponents

            if (components.length > 0) {
              const result: ViewExportSVG = {
                components,
                totalExports,
                totalNoExports,
                totalSVG,
                groupKind: { id: file.absolutePath, label: file.relativePath },
                isShowNoExports: configShowNoExports.isShow(),
              }

              SVGFileCache.set(file.absolutePath, result, lastModified)
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

      // Group the SVG exports by pattern
      const groupedSVGExports = await groupIconsByPattern(SVGExports)

      // Process the SVG exports
      operation(groupedSVGExports)

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
