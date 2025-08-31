import * as path from 'path'

import { l10n, Position, Selection, TextEditorRevealType, Uri, window, workspace } from 'vscode'

import { CONFIG_KEY } from '@/constants/misc'
import type { SVGFile } from '@/types/ViewExportsSVG'
import type { OpenFile } from '@/types/views/content'

import { getUnknownError } from '../misc'

/**
 * Gets the last modification timestamp of a file.
 * @param fileUri - The uri to the file.
 * @returns The last modification timestamp as a Unix timestamp in milliseconds, or 0 if the file doesn't exist or an error occurs.
 */
export async function getFileTimestamp(fileUri: string): Promise<number> {
  try {
    const stats = await workspace.fs.stat(Uri.parse(fileUri))
    return stats.mtime
  } catch {
    return 0
  }
}

/**
 * Retrieves the language of a file based on its extension.
 * @returns The language ID (e.g., 'typescriptreact'), or 'unknown' if it cannot be determined.
 */
export async function getLanguageFromFile(file?: Uri): Promise<string> {
  if (!file) return 'unknown'

  try {
    const document = await workspace.openTextDocument(file)
    return document.languageId ?? 'unknown'
  } catch {
    return 'unknown'
  }
}

/**
 * Converts an absolute file path to an SVGFile object.
 * @param filePath - The absolute file path.
 * @returns The SVGFile object containing information about the file.
 */
export async function pathToSVGFile(filePath: string): Promise<SVGFile> {
  const workspaceUri = workspace.workspaceFolders?.[0]?.uri
  const workspacePath = workspaceUri?.fsPath ?? ''

  const isTemporary = filePath.includes(`scheme-${CONFIG_KEY}:`)

  const uri: Uri = Uri.parse(filePath)
  let absolutePath = uri.fsPath

  if (!isTemporary) {
    absolutePath = path.isAbsolute(uri.fsPath) ? uri.fsPath : path.join(workspacePath, uri.fsPath)
  }

  const dirname = path.dirname(absolutePath)
  const language = await getLanguageFromFile(uri)

  return {
    uri: uri?.toString() ?? '',
    absolutePath,
    dirname,
    language,
    basename: path.basename(absolutePath),
    extension: path.extname(absolutePath).slice(1),
    relativePath: isTemporary ? absolutePath : path.relative(workspacePath, absolutePath),
    isTemporary,
  }
}

/**
 * Opens a file in the editor at the specified position.
 * @param file - The file to open.
 * @param position - The position in the file to navigate to (optional).
 */
export function openFile({ file, position = { column: 1, line: 1, index: 1 } }: OpenFile): void {
  let fileUri = Uri.parse(file.uri)

  const workspaceUri = workspace.workspaceFolders?.[0]?.uri
  if (workspaceUri && fileUri.scheme !== `scheme-${CONFIG_KEY}`) {
    fileUri = fileUri.with({ authority: workspaceUri.authority, scheme: workspaceUri.scheme })
  }

  const onOpen = async () => {
    let stat = false

    try {
      await workspace.fs.stat(fileUri)
      stat = true
    } catch {
      stat = false
    }

    if (stat) {
      const document = await workspace.openTextDocument(fileUri)
      const editor = await window.showTextDocument(document)
      const line = position.line > 0 ? position.line - 1 : 0
      const column = position.column > 0 ? position.column - 1 : 0

      const pos = new Position(line, column)

      editor.selection = new Selection(pos, pos)
      editor.revealRange(new Selection(pos, pos), TextEditorRevealType.AtTop)
    } else {
      window
        .showErrorMessage(l10n.t('File does not exist: {file}', { file: file.absolutePath }))
        .then(undefined, console.error)
    }
  }

  onOpen().catch((e) => {
    console.error(`Error opening file ${file.absolutePath} in editor: `, getUnknownError(e))
    window
      .showErrorMessage(l10n.t('Error opening file: {file}', { file: file.absolutePath }))
      .then(undefined, console.error)
  })
}
