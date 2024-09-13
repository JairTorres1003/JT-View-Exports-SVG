import { type ExtensionContext, type Uri } from 'vscode'

import { type ViewExportSVG } from '@/interfaces/ViewExportsSVG'
import { processFiles } from '@/utilities/files'
import { isEmpty } from '@/utilities/misc'
import { ViewExportsSVGPanel } from '@/views'

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
  if (!isEmpty(ViewExportsSVGPanel.currentPanel)) {
    ViewExportsSVGPanel.currentPanel.RunExtraction()
  }

  const operation = (result: ViewExportSVG[]): void => {
    ViewExportsSVGPanel.render(context.extensionUri, result)
  }

  const filesToProcess = !isEmpty(items) ? items : !isEmpty(item) ? [item] : []

  await processFiles(filesToProcess, operation)
}
