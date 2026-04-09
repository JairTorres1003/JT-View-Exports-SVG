import type { Position, SVGFile } from '@jt-view-exports-svg/core'
import * as path from 'path'
import * as vsc from 'vscode'
import xxhash from 'xxhashjs'

import { CONFIG_KEY } from '@/constants/misc'

import { getUnknownError } from '../misc'

/**
 * Map of file extensions to language IDs for faster lookup without opening documents.
 */
const LANGUAGE_MAP: Record<string, string> = {
  '.js': 'javascript',
  '.jsx': 'javascriptreact',
  '.ts': 'typescript',
  '.tsx': 'typescriptreact',
}

/**
 * Gets the last modification timestamp of a file.
 * @param fileUri - The uri to the file.
 * @returns The last modification timestamp as a Unix timestamp in milliseconds, or 0 if the file doesn't exist or an error occurs.
 */
export async function getFileTimestamp(fileUri: vsc.Uri): Promise<number> {
  try {
    const stats = await vsc.workspace.fs.stat(fileUri)
    return stats.mtime
  } catch {
    return 0
  }
}

/**
 * Retrieves the language of a file based on its extension efficiently.
 * Optimized to avoid opening the text document which is heavy on memory.
 * @returns The language ID, or 'unknown' if it cannot be determined.
 */
export function getLanguageFromExtension(ext: string): string {
  return LANGUAGE_MAP[ext.toLowerCase()] ?? 'unknown'
}

/**
 * Converts an absolute file path or URI string to an SVGFile object.
 * Acts as a Mapper between the file system and the Domain Entity.
 *
 * @param filePath - The absolute file path or URI string.
 * @returns The SVGFile object containing information about the file.
 */
export async function pathToSVGFile(filePath: string): Promise<SVGFile> {
  const workspaceUri = vsc.workspace.workspaceFolders?.[0]?.uri
  const workspacePath = workspaceUri?.fsPath ?? ''

  // Normalize URI parsing
  const uri = vsc.Uri.parse(filePath)
  const isTemporary =
    uri.scheme === `scheme-${CONFIG_KEY}` || filePath.includes(`scheme-${CONFIG_KEY}:`)

  // Resolve absolute path
  let absolutePath = uri.fsPath
  if (!isTemporary && !path.isAbsolute(absolutePath)) {
    absolutePath = path.join(workspacePath, absolutePath)
  }

  const basename = path.basename(absolutePath)
  const extname = path.extname(absolutePath)
  const extension = extname.slice(1)
  const dirname = path.dirname(absolutePath)
  const language = getLanguageFromExtension(extname)
  const lastModified = await getFileTimestamp(uri)
  const hashId = xxhash.h64(uri.toString(), 0xabcd).toString(36)

  return {
    id: `file-${hashId}`,
    uri: uri.toString(),
    absolutePath,
    dirname,
    language,
    basename,
    extension,
    relativePath: isTemporary ? absolutePath : path.relative(workspacePath, absolutePath),
    isTemporary,
    lastModified,
  }
}

/**
 * Opens a file in the editor at the specified position.
 * Consider moving this to a dedicated 'editor.ts' utility in the future.
 *
 * @param file - The file to open.
 * @param position - The position in the file to navigate to (optional).
 */
export async function openFile(
  file: SVGFile,
  position: Position = { column: 1, line: 1, index: 1 }
): Promise<void> {
  try {
    let fileUri = vsc.Uri.parse(file.uri)
    const workspaceUri = vsc.workspace.workspaceFolders?.[0]?.uri

    if (workspaceUri && fileUri.scheme !== `scheme-${CONFIG_KEY}`) {
      // Normalize scheme for workspace files if needed
      fileUri = fileUri.with({ authority: workspaceUri.authority, scheme: workspaceUri.scheme })
    }

    // Check existence before opening to prevent "File not found" editor error tabs
    try {
      await vsc.workspace.fs.stat(fileUri)
    } catch {
      vsc.window.showErrorMessage(
        vsc.l10n.t('File does not exist: {file}', { file: file.absolutePath })
      )
      return
    }

    const document = await vsc.workspace.openTextDocument(fileUri)
    const editor = await vsc.window.showTextDocument(document)

    // Calculate position (VS Code uses 0-based index)
    const line = Math.max(0, position.line - 1)
    const column = Math.max(0, position.column - 1)
    const pos = new vsc.Position(line, column)
    const selection = new vsc.Selection(pos, pos)

    editor.selection = selection
    editor.revealRange(selection, vsc.TextEditorRevealType.AtTop)
  } catch (error) {
    console.error(`Error opening file ${file.absolutePath}:`, getUnknownError(error))
    vsc.window.showErrorMessage(
      vsc.l10n.t('Error opening file: {file}', { file: file.absolutePath })
    )
  }
}
