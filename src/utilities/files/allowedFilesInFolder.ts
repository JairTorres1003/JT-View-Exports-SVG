import * as path from 'path'

import { FileType, Uri, workspace } from 'vscode'

import { IgnoreDirectories } from '../config'
import { isEmpty } from '../misc'

import { IGNORE_DIRECTORIES } from '@/constants/misc'
import { REGEX_FILE } from '@/constants/regex'

/**
 * Retrieves the list of allowed files in a given folder and its subfolders.
 * @param folder - The folder URI.
 * @returns A promise that resolves to an array of URIs representing the allowed files.
 */
export async function allowedFilesInFolder(folder: Uri): Promise<Uri[]> {
  const allowedFiles: Uri[] = []

  if (!isEmpty(folder)) {
    const config = new IgnoreDirectories()
    const ignoreDirectories = [...config._allDirectories, ...IGNORE_DIRECTORIES]
    const files = await workspace.fs.readDirectory(folder)

    for (const [fileName, fileType] of files) {
      const filePath = Uri.joinPath(folder, fileName)

      if (fileType === FileType.File) {
        const extname = path.extname(fileName)

        if (REGEX_FILE.test(extname)) {
          allowedFiles.push(filePath)
        }
      } else if (fileType === FileType.Directory && !ignoreDirectories.includes(fileName)) {
        try {
          const subFiles = await allowedFilesInFolder(filePath)
          allowedFiles.push(...subFiles)
        } catch (error) {
          console.error(`Error reading directory "${filePath.fsPath}":`, error)
        }
      }
    }
  }

  return allowedFiles
}
