import { pathnames, type SVGFile, type ViewExportSVG } from '@jt-view-exports-svg/core'
import { type ExtensionContext, l10n, type Uri } from 'vscode'

import { PanelController } from '@/controllers/views/PanelController'
import { getIconsCollection } from '@/services/getIconsCollection'
import { viewExportStore } from '@/store/ViewExportStore'
import { processFiles } from '@/utilities/files/processFiles'
import { isEmpty } from '@/utilities/misc'

/**
 * Displays a menu and processes the selected files.
 *
 * @param context - The extension context.
 * @param item - The selected file URI.
 * @param items - An array of file URIs.
 * @returns A promise that resolves when the files are processed.
 */
export const showMenu = async (
  context: ExtensionContext,
  item: Uri | null = null,
  items: Uri[] = []
): Promise<void> => {
  await PanelController.render(context)

  const filesToProcess = !isEmpty(items) ? items : !isEmpty(item) ? [item] : []

  const loadMessage = filesToProcess.length
    ? l10n.t('Processing {0} file(s)...', filesToProcess.length)
    : l10n.t('Loading...')

  const messageEncoded = encodeURIComponent(loadMessage)

  PanelController.navigate(`${pathnames.main}?load-message=${messageEncoded}`)

  if (filesToProcess.length === 0) {
    const { files, items } = await getIconsCollection()
    viewExportStore.set(items, files)
    PanelController.navigate(pathnames.home)
    return
  }

  const operation = (result: ViewExportSVG[], files: SVGFile[]): void => {
    viewExportStore.set(result, files)
    PanelController.navigate(pathnames.dashboard)
  }

  await processFiles(filesToProcess, operation)
}
