import type { ExtensionContext } from 'vscode'

import { ViewExportsSVGController } from '@/controllers/views'
import { scanningFiles, scanningWorkspace } from '@/utilities/files'

/**
 * Runs the scanning process for the current workspace.
 */
export const runScanningWorkspace = async (context: ExtensionContext): Promise<void> => {
  if (!ViewExportsSVGController.currentPanel) {
    await ViewExportsSVGController.render(context, [], 1)
  }

  ViewExportsSVGController.currentPanel?.init()

  const files = await scanningWorkspace()
  await scanningFiles(files)
}
