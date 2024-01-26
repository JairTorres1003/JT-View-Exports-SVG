import { ConfigurationTarget, workspace } from 'vscode'

/**
 * Adds an assets file to the extension configuration.
 * @param file - The file object containing the absolute and relative paths.
 */
export const addAssetsFile = async (file: { absolutePath: string; relativePath: string }) => {
  const workspaceFolders = workspace.workspaceFolders
  const config = workspace.getConfiguration('JT-View-Exports-SVG')
  const assetsPath: string[] = config.get('assetsPath') ?? []
  const assetsPathUser: string[] = config.inspect('assetsPath')?.globalValue as []

  if (workspaceFolders) {
    const exists = workspaceFolders.some((folder) => file.absolutePath.includes(folder.uri.fsPath))

    const filePath = exists ? file.relativePath : file.absolutePath
    const target = exists ? ConfigurationTarget.Workspace : ConfigurationTarget.Global
    const value = exists ? assetsPath : assetsPathUser

    if (!value.includes(filePath)) {
      value.push(filePath)
      value.sort((a, b) => a.localeCompare(b))

      await config.update('assetsPath', value, target)
    }
  }
}
