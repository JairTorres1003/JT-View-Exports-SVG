import { commands, l10n, Uri, window, workspace } from 'vscode'

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
  const filePath = path ?? `${workspace.workspaceFolders?.[0].uri.fsPath}/${name}.json`

  try {
    await workspace.fs.writeFile(Uri.file(filePath), new TextEncoder().encode(content))

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
