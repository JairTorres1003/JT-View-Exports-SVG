import fs from 'node:fs'
import path from 'node:path'
import type { Uri } from 'vscode'

/**
 * Initializes workspace settings by creating a `.vscode/settings.json` file.
 *
 * Creates the `.vscode` directory if it doesn't exist and writes default editor
 * configuration settings to the workspace settings file.
 *
 * @param workspaceUri - The URI of the workspace root directory
 */
export function initializeWorkspaceSettings(workspaceUri: Uri) {
  const settingsPath = path.join(workspaceUri.fsPath, '.vscode', 'settings.json')

  fs.mkdirSync(path.dirname(settingsPath), { recursive: true })

  const settings = {
    'editor.tabSize': 2,
  }

  fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2))
}
