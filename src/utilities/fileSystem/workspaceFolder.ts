import { workspace } from 'vscode'

/**
 * Retrieves the file system path of the first workspace folder in the currently
 * opened workspace in VS Code.
 * @returns The file system path of the workspace folder, or empty string if no
 * workspace folder is found.
 */
export function getWorkspaceFolder(): string {
  const workspaceFolders = workspace.workspaceFolders

  if (workspaceFolders !== undefined && workspaceFolders.length > 0) {
    const firstWorkspaceFolder = workspaceFolders[0]
    const workspaceFolderPath = firstWorkspaceFolder.uri.fsPath

    return workspaceFolderPath
  }

  return ''
}
