import * as fs from 'fs'
import * as path from 'path'

import { Uri, commands, window } from 'vscode'

import { type SvgExport, type SvgExportErrors } from '../../interfaces/svgExports'
import { ViewExportsSVGPanel } from '../../panels/ViewExportsSVGPanel'
import { processFiles } from '../commonFunctions'
import { ConfigAssetsPath } from '../vscode'

import { getWorkspaceFolder } from './workspaceFolder'

/**
 * Get input files and start the process for the extraction of svg components.
 * @param filesPath An array of file paths.
 */
export async function getInputFiles(filesPath: string[] | null) {
  // Define the operation that will be executed after processing files
  const operation = (result: SvgExport[] | SvgExportErrors) => {
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
 * @param filePath - The path to the file to be opened and processed.
 * @returns A promise that resolves when the file is successfully processed.
 */
export const viewAssetFile = async (filePath: string): Promise<void> => {
  const isRelative = !path.isAbsolute(filePath)
  const absolutePath = isRelative ? path.join(getWorkspaceFolder(), filePath) : filePath

  if (fs.existsSync(absolutePath)) {
    await getInputFiles([absolutePath])
  } else {
    await window.showErrorMessage(`The file ${absolutePath} does not exist.`)
  }
}

/**
 * Removes an asset file.
 *
 * @param filePath - The path to the file to be removed.
 * @returns A promise that resolves when the file is successfully removed.
 */
export const removeAssetFile = async (filePath: string): Promise<void> => {
  const isRelative = !path.isAbsolute(filePath)
  const absolutePath = isRelative ? path.join(getWorkspaceFolder(), filePath) : filePath

  const file = {
    basename: path.basename(absolutePath),
    dirname: path.dirname(absolutePath),
    absolutePath,
    relativePath: path.relative(getWorkspaceFolder(), absolutePath),
  }

  await new ConfigAssetsPath().remove(file)
}
