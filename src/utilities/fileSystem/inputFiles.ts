import * as fs from 'fs'
import * as path from 'path'

import { Uri, commands, window } from 'vscode'

import { type SvgFile, type SvgExport, type SvgExportErrors } from '../../interfaces/svgExports'
import { ViewExportsSVGPanel } from '../../panels/ViewExportsSVGPanel'
import { processFiles } from '../commonFunctions'
import { ConfigAssetsPath } from '../vscode'

import { getWorkspaceFolder } from './workspaceFolder'

/**
 * Get input files and start the process for the extraction of svg components.
 * @param filesPath An array of file paths.
 */
export async function getInputFiles(filesPath: string[] | null): Promise<void> {
  // Define the operation that will be executed after processing files
  const operation = (result: SvgExport[] | SvgExportErrors): void => {
    // Update or show the webview panel
    ViewExportsSVGPanel.update(result)
  }

  await processFiles(null, filesPath, operation)
}

/**
 * Opens a file in the VS Code editor.
 * @param filePath - The path of the file to be opened.
 */
export const openFile = async (filePath: string): Promise<void> => {
  const isRelative = !path.isAbsolute(filePath)

  const absolutePath = isRelative ? path.join(getWorkspaceFolder(), filePath) : filePath

  if (fs.existsSync(absolutePath)) {
    await commands.executeCommand('vscode.open', Uri.file(absolutePath))
  } else {
    await window.showErrorMessage(`The file ${absolutePath} does not exist.`)
  }
}

/**
 * Opens and processes a view asset file.
 *
 * @param filePath - The path's to the file to be processed.
 * @returns A promise that resolves when the file is successfully processed.
 */
export const viewAssetFile = async (filePath: string[]): Promise<void> => {
  const absolutePath: string[] = []
  const notExist: string[] = []

  filePath.forEach((file) => {
    const isRelative = !path.isAbsolute(file)
    const absPath = isRelative ? path.join(getWorkspaceFolder(), file) : file

    if (fs.existsSync(absPath)) {
      absolutePath.push(absPath)
    } else {
      notExist.push(absPath)
    }
  })

  if (notExist.length > 0) {
    await window.showErrorMessage(`The file(s) ${notExist.join(', ')} do(es) not exist.`)
  }

  if (absolutePath.length > 0) {
    await getInputFiles(absolutePath)
  }
}

/**
 * Removes an asset files from the configuration.
 *
 * @param filePath - The path's to the file to be removed.
 * @returns A promise that resolves when the file is successfully removed.
 */
export const removeAssetFile = async (filePath: string[]): Promise<void> => {
  const allFiles: SvgFile[] = []

  filePath.forEach((file) => {
    const isRelative = !path.isAbsolute(file)
    const absPath = isRelative ? path.join(getWorkspaceFolder(), file) : file

    allFiles.push({
      basename: path.basename(absPath),
      dirname: path.dirname(absPath),
      absolutePath: absPath,
      relativePath: path.relative(getWorkspaceFolder(), absPath),
    })
  })

  await new ConfigAssetsPath().removeMultiple(allFiles)
}
