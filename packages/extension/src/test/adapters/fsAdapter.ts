import * as vsc from 'vscode'

export const fsAdapter = {
  writeFile: vsc.workspace.fs.writeFile,
  readFile: vsc.workspace.fs.readFile,
  createDirectory: vsc.workspace.fs.createDirectory,
}
