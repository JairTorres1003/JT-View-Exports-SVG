import type { ViewExportSVG } from '@jt-view-exports-svg/core'
import type { ExtensionContext, Uri } from 'vscode'

import { ViewExportsSVGController } from '@/controllers/views'
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
  const filesToProcess = !isEmpty(items) ? items : !isEmpty(item) ? [item] : []

  if (!ViewExportsSVGController.currentPanel) {
    await ViewExportsSVGController.render(context, [], filesToProcess.length)
  }

  if (filesToProcess.length === 0) {
    ViewExportsSVGController.update([], 0)
    return
  }

  ViewExportsSVGController.currentPanel?.init()

  const operation = (result: ViewExportSVG[]): void => {
    ViewExportsSVGController.update(result, filesToProcess.length)
  }

  await processFiles(filesToProcess, operation)
}
