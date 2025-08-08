import { ViewExportsSVGController } from '@/controllers/views'
import { scanningFiles, scanningWorkspace } from '@/utilities/files'
import { isEmpty } from '@/utilities/misc'

/**
 * Runs the scanning process for the current workspace.
 */
export const runScanningWorkspace = async (): Promise<void> => {
  if (!isEmpty(ViewExportsSVGController.currentPanel)) {
    ViewExportsSVGController.currentPanel.init()
  }

  const files = await scanningWorkspace()
  await scanningFiles(files)
}
