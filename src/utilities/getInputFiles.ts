import { ProgressLocation, ProgressOptions, window } from "vscode";
import * as path from "path";

import { SvgExport, SvgExportErrors, SvgFile } from "../interfaces/svgExports";
import { getWorkspaceFolder } from "./getWorkspaceFolder";
import { getTranslations } from "./getLocaleLanguage";
import { REGEX_FILE } from "./regex";
import { extractSVGComponentExports } from "./svg/exportParser";

/**
 *
 * @param filesPath
 */
export async function getInputFiles(filesPath: string[] | null) {
  try {
    const i18n = getTranslations();
    const selectedFiles: SvgFile[] = [];
    const workspaceFolder: string = getWorkspaceFolder();
    const newError: SvgExportErrors = { messageError: "" };
    const progressOptions: ProgressOptions = {
      location: ProgressLocation.Notification,
      title: i18n.progressTitle,
      cancellable: false,
    };

    // Show loader message
    const progress = await window.withProgress(progressOptions, async (progress) => {
      if (!filesPath || filesPath.length === 0) {
        newError.messageError = i18n.NoFileSelected;
        newError.fileSelected = 0;

        // Update the webview panel
        // code update ..
        return;
      }

      filesPath.sort();

      filesPath.forEach((file) => {
        // Check if the file is supported extension
        if (REGEX_FILE.test(file.slice(-4))) {
          const relativePath: string = path.relative(workspaceFolder, file);
          selectedFiles.push({ absolutePath: file, relativePath });
        }
      });

      // Extract the exports from selected files
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

      if (svgComponents.length <= 0 && selectedFiles.length > 0) {
        newError.messageError = i18n.NoIconsFound;
        newError.fileSelected = selectedFiles.length;
      }

      // Update the webview panel
      // code update ..
      return progress;
    });

    if (progress) {
      // Hide the loader message
      progress.report({ increment: 100 });
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
