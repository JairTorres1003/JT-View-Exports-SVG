import { workspace } from 'vscode'

import { isEmpty } from '../misc'

/**
 * Retrieves the path of the current workspace.
 *
 * @returns The path of the current workspace, or an empty string if no workspace is open.
 */
export function getWorkspacePath(): string {
  try {
    const workspaceFolders = workspace.workspaceFolders

    if (!isEmpty(workspaceFolders)) {
      const firstWorkspaceFolder = workspaceFolders[0]
      const workspaceFolderPath = firstWorkspaceFolder.uri.fsPath

      return workspaceFolderPath
    }

    return '/'
  } catch (error) {
    console.error(error)
    return '/'
  }
}
