import { window, workspace } from "vscode";
import * as fs from "fs";

export function saveResponseFile(data: object) {
  const content = JSON.stringify(data, null, 2);

  const filePath = workspace.rootPath + "/responseFile.json";

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      window.showErrorMessage("Error al crear y guardar el archivo.");
    } else {
      window.showInformationMessage(`Archivo guardado: ${filePath}.`);
    }
  });
}
