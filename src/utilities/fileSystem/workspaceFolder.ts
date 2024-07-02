import * as path from 'path'

import { FileType, Uri, workspace } from 'vscode'

import { IGNORE_DIRECTORIES } from '../../constants/misc'
import { REGEX_FILE } from '../../constants/regex'
import { isEmpty } from '../misc'
import { ConfigIgnoreDirectories } from '../vscode/extensionConfig/ConfigIgnoreDirectories'

/**
 * Retrieves the file system path of the first workspace folder in the currently
 * opened workspace in VS Code.
 * @returns The file system path of the workspace folder, or empty string if no
 * workspace folder is found.
 */
export function getWorkspaceFolder(): string {
  const workspaceFolders = workspace.workspaceFolders

  if (!isEmpty(workspaceFolders)) {
    const firstWorkspaceFolder = workspaceFolders[0]
    const workspaceFolderPath = firstWorkspaceFolder.uri.fsPath

    return workspaceFolderPath
  }

  return ''
}

export async function getAllowedFilesInFolder(folder: Uri): Promise<Uri[]> {
  const allowedFiles: Uri[] = []
  const ignoredDirectories = new ConfigIgnoreDirectories().get() ?? []

  if (!isEmpty(folder)) {
    const files = await workspace.fs.readDirectory(folder)

    for (const [fileName, fileType] of files) {
      const filePath = Uri.joinPath(folder, fileName)

      if (fileType === FileType.File) {
        const extname = path.extname(fileName)

        if (REGEX_FILE.test(extname)) {
          allowedFiles.push(filePath)
        }
      } else if (fileType === FileType.Directory) {
        const isIgnored = [...ignoredDirectories, ...IGNORE_DIRECTORIES].includes(fileName)

        if (!isIgnored) {
          try {
            const allowedFilesInSubfolder = await getAllowedFilesInFolder(filePath)
            allowedFiles.push(...allowedFilesInSubfolder)
          } catch (error) {
            console.error(`Error reading directory ${filePath.fsPath}:`, error)
          }
        }
      }
    }
  }

  return allowedFiles
}
