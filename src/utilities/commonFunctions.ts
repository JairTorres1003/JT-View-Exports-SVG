import { ProgressLocation, ProgressOptions, Uri, window } from "vscode";
import * as path from "path";

import { getTranslations } from "./getLocaleLanguage";
import { getWorkspaceFolder } from "./getWorkspaceFolder";
import { SvgExport, SvgExportErrors, SvgFile } from "../interfaces/svgExports";
import { REGEX_FILE } from "./regex";
import { extractSVGComponentExports } from "./svg/exportParser";

/**
 * Process the selected files and extract the svg components
 * @param items An array of Uri objects representing selected items.
 * @param filesPath An array of file paths to process.
 * @param operation An operation to be executed after processing the files.
 */
export async function processFiles(
  items: Uri[] | undefined | null,
  filesPath: string[] | null,
  operation: (result: SvgExport[] | SvgExportErrors) => void
) {
  try {
    // Get the translation messages
    const i18n = getTranslations();

    // Initialize variables
    const selectedFiles: SvgFile[] = [];
    const workspaceFolder: string = getWorkspaceFolder();
    const newError: SvgExportErrors = { messageError: "" };
    const progressOptions: ProgressOptions = {
      location: ProgressLocation.Notification,
      title: i18n.progressTitle,
      cancellable: false,
    };
    const arrayFiles = items || filesPath;

    // Show loader message
    const progress = await window.withProgress(progressOptions, async (progress) => {
      // Check if any files are selected
      if (!arrayFiles || arrayFiles.length === 0) {
        newError.messageError = i18n.NoFileSelected;
        newError.fileSelected = 0;

        // Execute the specified operation for no selected files
        operation(newError);
        return;
      }

      // Define a sorting function based on the source of files
      let sortingFunction: ((a: any, b: any) => number) | undefined = undefined;

      if (items) {
        sortingFunction = (a: Uri, b: Uri) => a.fsPath.localeCompare(b.fsPath);
      } else if (filesPath) {
        sortingFunction = (a: string, b: string) => a.localeCompare(b);
      }

      // Sort the array of files
      arrayFiles.sort(sortingFunction);

      arrayFiles.forEach((file) => {
        let filePath: string | null = null;
        if (items) {
          const f = file as Uri;
          filePath = f.scheme === "file" ? f.fsPath : null;
        } else if (filesPath) {
          filePath = file as string;
        }

        if (filePath) {
          const extname = path.extname(filePath);

          if (filePath && REGEX_FILE.test(extname)) {
            const basename = path.basename(filePath);
            const dirname = path.dirname(filePath);
            const relativePath: string = path.relative(workspaceFolder, filePath);

            selectedFiles.push({ absolutePath: filePath, relativePath, basename, dirname });
          }
        }
      });

      // Extract SVG exports from the selected files
      const svgComponents: SvgExport[] = await Promise.all(
        selectedFiles.map(async (file) => {
          try {
            const svgExports = await extractSVGComponentExports(file.absolutePath);
            return { ...svgExports, file, lengthSvg: svgExports.svgComponents.length };
          } catch (error) {
            console.error(`Error parsing file ${file.absolutePath}: ${error}`);
            return { file, lengthExports: 0, lengthSvg: 0, svgComponents: [] };
          }
        })
      );

      // Handle cases where no SVG icons are found
      if (svgComponents.length <= 0 && selectedFiles.length > 0) {
        newError.messageError = i18n.NoIconsFound;
        newError.fileSelected = selectedFiles.length;
      }

      // Execute the specified operation with the extracted SVG components

      operation(svgComponents.length > 0 ? svgComponents : newError);

      return progress;
    });

    // Hide the progress message if it was shown
    if (progress) {
      progress.report({ increment: 100 });
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
