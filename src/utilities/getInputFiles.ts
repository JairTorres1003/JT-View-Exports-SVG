import { SvgExport, SvgExportErrors } from "../interfaces/svgExports";
import { processFiles } from "./commonFunctions";

/**
 * Get input files and start the process for the extraction of svg components.
 * @param filesPath An array of file paths.
 */
export async function getInputFiles(filesPath: string[] | null) {
  // Define the operation that will be executed after processing files
  const operation = (result: SvgExport[] | SvgExportErrors) => {
    // Update interfaces...
  };

  processFiles(null, filesPath, operation);
}
