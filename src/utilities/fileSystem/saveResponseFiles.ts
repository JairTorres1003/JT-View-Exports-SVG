import { Uri, commands, window, workspace } from 'vscode'
import * as fs from 'fs'

export async function saveResponseFile(data: object) {
  const content = JSON.stringify(data, null, 2)
  const filePath = workspace.rootPath + '/responseFile.json'

  try {
    await new Promise((resolve, reject) => {
      fs.writeFile(filePath, content, (err) => {
        if (err) {
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
