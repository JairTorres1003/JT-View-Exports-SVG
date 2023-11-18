import { window, workspace } from 'vscode'
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

    await window.showInformationMessage(`File saved at ${filePath}`)

    const doc = await workspace.openTextDocument(filePath)
    await window.showTextDocument(doc)
  } catch (error) {
    await window.showErrorMessage('Error creating and saving the file. Try again.')
  }
}
