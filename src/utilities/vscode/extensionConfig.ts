import { ConfigurationTarget, workspace } from 'vscode'
import ExtensionConfigManager from './extensionConfigManager'
import { type SvgFile } from '../../interfaces/svgExports'

/**
 * Manages the configuration of the assets path for the extension.
 * Extends the `ExtensionConfigManager` class.
 */
export class ConfigAssetsPath extends ExtensionConfigManager<string[]> {
  private readonly assetsPath: string[] = this.get() ?? []
  private readonly assetsPathUser: string[] = this.inspect() ?? []
  private readonly workspaceFolders = workspace.workspaceFolders

  constructor() {
    super('assetsPath')
  }

  /**
   * Checks if the given file exists in the workspace folders.
   * @param file - The SVG file to check.
   * @returns `true` if the file exists in the workspace folders, `false` otherwise.
   */
  private existsInWorkspace(file: SvgFile): boolean {
    if (!this.workspaceFolders) return false

    return this.workspaceFolders.some((folder) => file.absolutePath.includes(folder.uri.fsPath))
  }

  /**
   * Gets the path of the file based on whether it exists in the workspace folders.
   * @param file - The SVG file.
   * @returns The relative path if the file exists in the workspace folders, otherwise the absolute path.
   */
  private getPath(file: SvgFile): string {
    const exists = this.existsInWorkspace(file)

    return exists ? file.relativePath : file.absolutePath
  }

  /**
   * Gets the target and value for updating the configuration based on whether the file exists in the workspace folders.
   * @param file - The SVG file.
   * @returns A tuple containing the configuration target and value.
   */
  private getTargetValue(file: SvgFile): [ConfigurationTarget, string[]] {
    const exists = this.existsInWorkspace(file)
    const target = exists ? ConfigurationTarget.Workspace : ConfigurationTarget.Global
    const value = exists ? this.assetsPath : this.assetsPathUser
    return [target, value]
  }

  /**
   * Sets the assets path for the given SVG file.
   * Adds the file to the assets path if it doesn't already exist.
   * @param file - The SVG file.
   */
  public async set(file: SvgFile): Promise<void> {
    if (this.workspaceFolders) {
      try {
        const filePath = this.getPath(file)
        const [target, value] = this.getTargetValue(file)

        // Add the file to the assets path if it doesn't exist
        if (!value.includes(filePath)) {
          value.push(filePath)
          value.sort((a, b) => a.localeCompare(b))

          await this.update(value, target)
        }
      } catch (error) {
        console.error('Error setting assets path:', error)
      }
    }
  }

  /**
   * Removes the assets path for the given SVG file.
   * Removes the file from the assets path if it exists.
   * @param file - The SVG file.
   */
  public async remove(file: SvgFile): Promise<void> {
    if (this.workspaceFolders) {
      try {
        const filePath = this.getPath(file)
        const [target, value] = this.getTargetValue(file)

        // Remove the file from the assets path if it exists
        if (value.includes(filePath)) {
          const index = value.indexOf(filePath)
          value.splice(index, 1)

          await this.update(value, target)
        }
      } catch (error) {
        console.error('Error removing assets path:', error)
      }
    }
  }
}
