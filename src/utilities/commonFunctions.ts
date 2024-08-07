import * as path from 'path'

import { ProgressLocation, type ProgressOptions, type Uri, window } from 'vscode'

import { REGEX_FILE } from '../constants/regex'
import { type SvgExport, type SvgExportErrors, type SvgFile } from '../interfaces/svgExports'

import { baseFileCache, FileModifiedCache, getFileTimestamp } from './cache'
import { getWorkspaceFolder, getFileLanguage } from './fileSystem'
import { isEmpty } from './misc'
import { extractSVGComponentExports } from './svg/extractSVGComponentExports'
import { ConfigAssetsPath, getTranslations } from './vscode'
import { ConfigHideEmptyFiles } from './vscode/extensionConfig/ConfigHideEmptyFiles'

// Create an instance of FileModifiedCache for caching SvgExport objects
const fileCache = new FileModifiedCache<SvgExport>()

/**
 * Process the selected files and extract the svg components
 * @param items An array of Uri objects representing selected items.
 * @param filesPath An array of file paths to process.
 * @param operation An operation to be executed after processing the files.
 */
export async function processFiles(
  items: Uri[] | undefined | null,
  filesPath: string[] | null,
  operation: (result: SvgExport[] | SvgExportErrors) => void
): Promise<void> {
  try {
    // Get the translation messages
    const i18n = getTranslations()

    // Initialize variables
    const selectedFiles: SvgFile[] = []
    const workspaceFolder: string = getWorkspaceFolder()
    const newError: SvgExportErrors = { messageError: '' }
    const progressOptions: ProgressOptions = {
      location: ProgressLocation.Notification,
      title: i18n.progressTitle,
      cancellable: false,
    }
    const arrayFiles = items ?? filesPath

    // Show loader message
    const progress = await window.withProgress(progressOptions, async (progress) => {
      const configAssetsPath = new ConfigAssetsPath()
      const isHideEmptyFiles = new ConfigHideEmptyFiles().isHide()

      // Check if any files are selected
      if (isEmpty(arrayFiles)) {
        newError.messageError = i18n.NoFileSelected
        newError.fileSelected = 0

        // Execute the specified operation for no selected files
        operation(newError)
        return
      }

      // Define a sorting function based on the source of files
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let sortingFunction: ((a: any, b: any) => number) | undefined

      if (!isEmpty(items)) {
        sortingFunction = (a: Uri, b: Uri) => a.fsPath.localeCompare(b.fsPath)
      } else if (!isEmpty(filesPath)) {
        sortingFunction = (a: string, b: string) => a.localeCompare(b)
      }

      // Sort the array of files
      arrayFiles.sort(sortingFunction)

      arrayFiles.forEach((file) => {
        let absolutePath: string | null = null
        if (!isEmpty(items)) {
          const f = file as Uri
          absolutePath = f.scheme === 'file' ? f.fsPath : null
        } else if (!isEmpty(filesPath)) {
          absolutePath = file as string
        }

        if (!isEmpty(absolutePath)) {
          const extname = path.extname(absolutePath)

          if (!isEmpty(absolutePath) && REGEX_FILE.test(extname)) {
            const basename = path.basename(absolutePath)
            const dirname = path.relative(workspaceFolder, path.dirname(absolutePath))
            const relativePath: string = path.relative(workspaceFolder, absolutePath)
            const language = getFileLanguage(basename)

            selectedFiles.push({ absolutePath, relativePath, basename, dirname, language })
          }
        }
      })

      const svgComponentFiles: SvgFile[] = []
      // Extract SVG exports from the selected files
      const svgComponents: SvgExport[] = await Promise.all(
        selectedFiles.map(async (file) => {
          try {
            const lastModified = getFileTimestamp(file.absolutePath)
            const cachedValue = fileCache.get(file.absolutePath, lastModified)

            // If a cached value exists and the file hasn't been modified since caching, return it
            if (cachedValue !== undefined) {
              if (cachedValue.svgComponents?.length > 0) {
                svgComponentFiles.push(file)
              }

              return cachedValue
            }

            const { base, result: svgExports } = await extractSVGComponentExports(file.absolutePath)

            svgExports.svgComponents.sort((a, b) => a.name.localeCompare(b.name))
            const lengthSvg = svgExports.svgComponents.length
            const result = { ...svgExports, file, lengthSvg, lengthExports: lengthSvg }
            // Cache the result associated with the file and its last modification timestamp
            fileCache.set(file.absolutePath, result, lastModified)
            baseFileCache.set(file.absolutePath, base, lastModified)

            if (lengthSvg > 0) {
              svgComponentFiles.push(file)
            }

            return result
          } catch (error) {
            console.error(`Error parsing file ${file.absolutePath}: ${String(error)}`)
            return { file, lengthExports: 0, lengthSvg: 0, svgComponents: [] }
          }
        })
      )

      let svgComponentsAux = svgComponents

      if (isHideEmptyFiles) {
        svgComponentsAux = svgComponents.filter((svg) => Number(svg.lengthExports) > 0)
      }

      // Handle cases where no SVG icons are found
      if (svgComponentsAux.length === 0 && selectedFiles.length > 0) {
        newError.messageError = i18n.NoIconsFound
        newError.fileSelected = selectedFiles.length
      }

      // Execute the specified operation with the extracted SVG components

      operation(svgComponentsAux.length > 0 ? svgComponentsAux : newError)

      // Update the assets path configuration
      configAssetsPath.set(svgComponentFiles).catch((error) => {
        console.error('Error setting assets path:', error)
      })

      return progress
    })

    // Hide the progress message if it was shown
    if (!isEmpty(progress)) {
      progress.report({ increment: 100 })
    }
  } catch (error) {
    console.error('An error occurred:', error)
  }
}
