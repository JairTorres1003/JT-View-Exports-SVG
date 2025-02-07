import * as fs from 'fs'

import { Uri, commands, l10n, window, workspace } from 'vscode'

import { isEmpty } from '../misc'

/**
 * Saves the response data as a JSON file.
 *
 * @param data - The response data to be saved.
 * @param name - The name of the file to be saved.
 * @param path - The optional path where the file should be saved. If not provided, the file will be saved in the workspace folder.
 * @returns A promise that resolves when the file is saved successfully.
 */
export async function saveResponseFile(data: object, name: string, path?: string): Promise<void> {
  const content = JSON.stringify(data, null, 2)
  const filePath = path ?? workspace.workspaceFolders?.[0].uri.fsPath + `/${name}.json`

  try {
    await new Promise((resolve, reject) => {
      fs.writeFile(filePath, content, (err) => {
        if (!isEmpty(err)) {
          reject(err)
        } else {
          resolve(l10n.t('File saved successfully.'))
        }
      })
    })

    const result = await window.showInformationMessage(
      l10n.t('The file was saved successfully at: {filePath}', { filePath }),
      'View file',
      'Close'
    )

    if (result === 'View file') {
      await commands.executeCommand('vscode.open', Uri.file(filePath))
    }
  } catch (error) {
    console.error(l10n.t('Error creating and saving the file. Try again.'), error)
  }
}
