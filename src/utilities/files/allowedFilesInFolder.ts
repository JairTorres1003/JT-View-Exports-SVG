import * as path from 'node:path'

import { FileType, l10n, Uri, workspace } from 'vscode'

import { isEmpty, matchesPattern } from '../misc'

import { REGEX_FILE } from '@/constants/regex'
import { IgnoreDirectoriesController } from '@/controllers/config'

/**
 * Gets the list of allowed files in a folder and its subfolders,
 * excluding those that match the ignored directory patterns.
 * @param folder - The folder URI.
 * @returns A promise that resolves to an array of URIs of the allowed files.
 */
export async function allowedFilesInFolder(folder: Uri): Promise<Uri[]> {
  const allowedFiles: Uri[] = []

  if (!isEmpty(folder)) {
    const config = new IgnoreDirectoriesController()
    const patterns = config._allDirectories
    const files = await workspace.fs.readDirectory(folder)

    for (const [fileName, fileType] of files) {
      const filePath = Uri.joinPath(folder, fileName)
      const filePathStr = filePath.fsPath

      if (fileType === FileType.Directory && matchesPattern(patterns, filePathStr)) {
        continue
      }

      if (fileType === FileType.File) {
        const extname = path.extname(fileName)

        if (REGEX_FILE.test(extname)) {
          allowedFiles.push(filePath)
        }
      } else if (fileType === FileType.Directory) {
        try {
          const subFiles = await allowedFilesInFolder(filePath)
          allowedFiles.push(...subFiles)
        } catch (error) {
          console.error(l10n.t('Error reading directory "{file}":', { file: filePathStr }), error)
        }
      }
    }
  }

  return allowedFiles
}
