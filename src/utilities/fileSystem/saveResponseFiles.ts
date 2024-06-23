import * as fs from 'fs'

import { Uri, commands, window, workspace } from 'vscode'

import { isEmpty } from '../misc'

export async function saveResponseFile(data: object): Promise<void> {
  const content = JSON.stringify(data, null, 2)
  const filePath = workspace.workspaceFolders?.[0].uri.fsPath + '/response.json'

  try {
    await new Promise((resolve, reject) => {
      fs.writeFile(filePath, content, (err) => {
        if (!isEmpty(err)) {
          reject(err)
        } else {
          resolve('File saved successfully.')
        }
      })
    })

    const result = await window.showInformationMessage(
      `The file was saved successfully at: ${filePath}`,
      'View file',
      'Close'
    )

    if (result === 'View file') {
      await commands.executeCommand('vscode.open', Uri.file(filePath))
    }
  } catch (error) {
    await window.showErrorMessage('Error creating and saving the file. Try again.')
  }
}
