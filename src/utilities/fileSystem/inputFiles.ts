import { Uri, commands, window } from 'vscode'
import * as fs from 'fs'
import * as path from 'path'

import { processFiles } from '../commonFunctions'
import { getWorkspaceFolder } from './workspaceFolder'
import { type SvgExport, type SvgExportErrors } from '../../interfaces/svgExports'
import { ViewExportsSVGPanel } from '../../panels/ViewExportsSVGPanel'

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

export const viewAssetFile = (filePath: string): void => {
  const isRelative = !path.isAbsolute(filePath)
  const absolutePath = isRelative ? path.join(getWorkspaceFolder(), filePath) : filePath

  getInputFiles([absolutePath]).catch((error) => {
    console.error(error)
  })
}
