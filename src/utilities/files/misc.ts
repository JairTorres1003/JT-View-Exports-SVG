import * as fs from 'node:fs'
import * as os from 'node:os'
import * as path from 'node:path'

import { l10n, Position, Selection, TextEditorRevealType, Uri, window, workspace } from 'vscode'

import { getUnknownError } from '../misc'
import { getWorkspacePath } from '../vscode'

import type { SVGFile } from '@/types/ViewExportsSVG'
import type { OpenFile } from '@/types/views/content'

/**
 * Gets the last modification timestamp of a file.
 * @param filePath - The path to the file.
 * @returns The last modification timestamp as a Unix timestamp in milliseconds, or 0 if the file doesn't exist or an error occurs.
 */
export function getFileTimestamp(filePath: string): number {
  try {
    const stats = fs.statSync(filePath)

    // Extract the modification timestamp (mtime) and return it
    const timestamp = stats.mtime.getTime()
    return timestamp
  } catch {
    return 0
  }
}

/**
 * Retrieves the language of a file based on its extension.
 * @param fileName - The name of the file.
 * @returns The language of the file, or 'javascript' if no matching language is found.
 */
export async function getLanguageFromFile(file: Uri): Promise<string> {
  try {
    const document = await workspace.openTextDocument(file)
    return document.languageId ?? 'javascript'
  } catch {
    return 'javascript'
  }
}

/**
 * Converts an absolute file path to an SVGFile object.
 * @param filePath - The absolute file path.
 * @returns The SVGFile object containing information about the file.
 */
export async function pathToSVGFile(filePath: string): Promise<SVGFile> {
  const workspacePath = getWorkspacePath()

  const absolutePath = path.isAbsolute(filePath) ? filePath : path.join(workspacePath, filePath)
  const basename = path.basename(absolutePath)
  const extension = path.extname(absolutePath).slice(1)
  const dirname = path.dirname(absolutePath)
  const relativePath = path.relative(workspacePath, absolutePath)
  const language = await getLanguageFromFile(Uri.file(absolutePath))
  const isTemporary = dirname.startsWith(os.tmpdir())

  return { absolutePath, basename, dirname, relativePath, language, isTemporary, extension }
}

/**
 * Opens a file in the editor at the specified position.
 * @param file - The file to open.
 * @param position - The position in the file to navigate to (optional).
 */
export function openFile({ file, position = { column: 1, line: 1, index: 1 } }: OpenFile): void {
  const { absolutePath } = file

  try {
    if (fs.existsSync(absolutePath)) {
      ;(async () => {
        const document = await workspace.openTextDocument(absolutePath)
        const editor = await window.showTextDocument(document)
        const line = position.line > 0 ? position.line - 1 : 0
        const column = position.column > 0 ? position.column - 1 : 0

        const pos = new Position(line, column)

        editor.selection = new Selection(pos, pos)
        editor.revealRange(new Selection(pos, pos), TextEditorRevealType.AtTop)
      })().catch(console.error)
    } else {
      window
        .showErrorMessage(l10n.t('File does not exist: {file}', { file: absolutePath }))
        .then(undefined, console.error)
    }
  } catch (error) {
    console.error(`Error opening file ${absolutePath} in editor: `, getUnknownError(error))
    window
      .showErrorMessage(l10n.t('Error opening file: {file}', { file: absolutePath }))
      .then(undefined, console.error)
  }
}
