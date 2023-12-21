import { processFiles } from '../commonFunctions'
import { type SvgExport, type SvgExportErrors } from '../../interfaces/svgExports'
import { ViewExportsSVGPanel } from '../../panels/ViewExportsSVGPanel'

/**
 * Get input files and start the process for the extraction of svg components.
 * @param filesPath An array of file paths.
 */
export async function getInputFiles(filesPath: string[] | null) {
  // Define the operation that will be executed after processing files
  const operation = (result: SvgExport[] | SvgExportErrors) => {
    // Update or show the webview panel
    ViewExportsSVGPanel.update(result)
  }

  await processFiles(null, filesPath, operation)
}
