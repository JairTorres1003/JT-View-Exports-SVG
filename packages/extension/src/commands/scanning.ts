import { pathnames, type ViewExportSVG } from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import { PanelController } from '@/controllers/views/PanelController'
import { allowedFilesInFolder } from '@/services/allowedFilesInFolder'
import { getIconsCollection } from '@/services/getIconsCollection'
import { viewExportStore } from '@/store/ViewExportStore'
import { processFiles } from '@/utilities/files/processFiles'

/**
 * Runs the scanning process for the current workspace.
 */
export const runScanningWorkspace = async (context: vsc.ExtensionContext): Promise<void> => {
  const currentWorkspace = vsc.workspace.workspaceFolders?.[0]

  if (!currentWorkspace) {
    const errorMessage = vsc.l10n.t(
      'No workspace folder found. Please open a workspace and try again.'
    )
    vsc.window.showErrorMessage(errorMessage).then(undefined, console.error)
    return
  }

  await PanelController.render(context)

  viewExportStore.clear()

  const messageEncoded = encodeURIComponent(vsc.l10n.t('Scanning workspace...'))

  PanelController.navigate(`${pathnames.main}?load-message=${messageEncoded}`)

  const files = await allowedFilesInFolder(currentWorkspace.uri)

  if (files.length === 0) {
    const items = await getIconsCollection()
    viewExportStore.set(items)
    PanelController.navigate(pathnames.home)

    vsc.window
      .showInformationMessage(vsc.l10n.t('No files found in the workspace.'))
      .then(undefined, console.error)
    return
  }

  const operation = (result: ViewExportSVG[]): void => {
    viewExportStore.set(result)
    PanelController.navigate(pathnames.dashboard)
  }

  await processFiles(files, operation)
}
