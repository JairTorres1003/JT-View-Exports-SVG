import * as fs from 'fs'
import * as path from 'path'

import { Position, Selection, TextEditorRevealType, type Uri, window, workspace } from 'vscode'

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

export async function getAssetsFiles(filesPath: Uri[]): Promise<void> {
  const operation = (result: SvgExport[] | SvgExportErrors): void => {
    ViewExportsSVGPanel.update(result)
  }

  await processFiles(filesPath, null, operation)
}

/**
 * Opens a file in the VS Code editor.
 * @param filePath - The path of the file to be opened.
 */
export const openFile = async (filePath: string): Promise<void> => {
  const parts = filePath.split(':')
  const isRelative = !path.isAbsolute(parts[0])

  const absolutePath = isRelative ? path.join(getWorkspaceFolder(), parts[0]) : parts[0]

  if (fs.existsSync(absolutePath)) {
    const document = await workspace.openTextDocument(absolutePath)
    const editor = await window.showTextDocument(document)
    const [line, column] = (parts[1] ?? '')
      .split(',')
      .map((value) => (Number(value) > 0 ? Number(value) : 1))
    const position = new Position((line ?? 1) - 1, (column ?? 1) - 1)

    editor.selection = new Selection(position, position)
    editor.revealRange(new Selection(position, position), TextEditorRevealType.AtTop)
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
