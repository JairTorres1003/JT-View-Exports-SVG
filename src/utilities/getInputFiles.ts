import { ProgressLocation, ProgressOptions, window } from "vscode";
import * as path from "path";

import { SvgExportErrors, SvgFile } from "../interfaces/svgExports";
import { getWorkspaceFolder } from "./getWorkspaceFolder";
import { getTranslations } from "./getLocaleLanguage";
import { REGEX_FILE } from "./regex";
/**
 *
 * @param filesPath
 */
export async function getInputFiles(filesPath: string[] | null) {
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
  const progress: any = await window.withProgress(progressOptions, async () => {
    if (filesPath && filesPath.length > 0) {
      filesPath.sort();

      filesPath.forEach((file) => {
        // Check if the file is supported extension
        if (REGEX_FILE.test(file.slice(-4))) {
          const relativePath: string = path.relative(workspaceFolder, file);
          selectedFiles.push({ absolutePath: file, relativePath });
        }
      });
    } else {
      newError.messageError = i18n.NoFileSelected;
      newError.fileSelected = 0;

      // Update the webview panel
      // code update ..

      return;
    }
    console.log(selectedFiles);

    // return svgComponents;
    return;
  });

  if (progress) {
    // Hide the loader message
    progress.report({ increment: 100 });
    progress.dispose();
  }
}
