import { l10n, window, workspace, type Uri } from 'vscode'

import { getUnknownError, isEmpty } from '../misc'

import { allowedFilesInFolder } from './allowedFilesInFolder'
import { processFiles } from './processFiles'

import { LastScanDateController } from '@/controllers/config'
import { type ViewExportSVG } from '@/interfaces/ViewExportsSVG'
import { ViewExportsSVGPanel } from '@/views'

/**
 * Scans the workspace
 * @returns an array of URIs for the allowed files.
 */
export async function scanningWorkspace(): Promise<Uri[]> {
  try {
    const workspaceFolders = workspace.workspaceFolders
    let files: Uri[] = []
    if (!isEmpty(workspaceFolders)) {
      const config = new LastScanDateController()

      files = await allowedFilesInFolder(workspaceFolders[0].uri)
      await config.updateDate()
    }

    return files
  } catch (error) {
    const errorMessage = l10n.t('Error scanning workspace: {error}', {
      error: getUnknownError(error),
    })
    console.error(errorMessage, error)
    window.showErrorMessage(errorMessage).then(undefined, console.error)
    return []
  }
}

/**
 * Scans the given files and updates the ViewExportsSVGPanel with the result.
 * @param files - An array of file URIs to be scanned.
 * @returns A Promise that resolves when the scanning is complete.
 */
export async function scanningFiles(files: Uri[]): Promise<void> {
  try {
    const operation = (result: ViewExportSVG[]): void => {
      ViewExportsSVGPanel.update(result)
    }

    await processFiles(files, operation)
  } catch (error) {
    const errorMessage = l10n.t('Error scanning files: {error}', {
      error: getUnknownError(error),
    })
    console.error(errorMessage, error)
    window.showErrorMessage(errorMessage).then(undefined, console.error)
  }
}
