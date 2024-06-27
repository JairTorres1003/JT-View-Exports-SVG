import * as path from 'path'

import { ConfigurationTarget, workspace } from 'vscode'

import { type SvgFile } from '../../interfaces/svgExports'
import { getWorkspaceFolder } from '../fileSystem'

import ExtensionConfigManager from './extensionConfigManager'

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
    if (this.workspaceFolders === undefined) return false

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
   * Updates the assets paths by copying the values from the configuration.
   * If the configuration values are null or undefined, the assets paths will be empty arrays.
   */
  private updateAssetsPaths(): void {
    this.assetsPath.length = 0
    this.assetsPath.push(...(this.get() ?? []))
    this.assetsPathUser.length = 0
    this.assetsPathUser.push(...(this.inspect() ?? []))
  }

  /**
   * Sets the assets path for the given SVG file.
   * Adds the file to the assets path if it doesn't already exist.
   * @param file - The SVG file.
   */
  public async set(file: SvgFile | SvgFile[]): Promise<void> {
    if (this.workspaceFolders !== undefined) {
      try {
        const filesArray = Array.isArray(file) ? file : [file]
        const value = this.get() ?? []
        const valueUser = this.inspect() ?? []

        for (const f of filesArray) {
          const filePath = this.getPath(f)
          const exists = this.existsInWorkspace(f)

          if (!value.includes(filePath) && exists) {
            value.push(filePath)
          } else if (!valueUser.includes(filePath) && !exists) {
            valueUser.push(filePath)
          }
        }

        // Sort the assets path
        value.sort()
        valueUser.sort()

        // Update the configuration
        await this.update(value, ConfigurationTarget.Workspace)
        await this.update(valueUser, ConfigurationTarget.Global)
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
    if (this.workspaceFolders !== undefined) {
      try {
        const filePath = this.getPath(file)
        const [target, value] = this.getTargetValue(file)

        // Remove the file from the assets path if it exists
        if (value.includes(filePath)) {
          const index = value.indexOf(filePath)
          value.splice(index, 1)

          await this.update(value, target)
          this.updateAssetsPaths()
        }
      } catch (error) {
        console.error('Error removing assets path:', error)
      }
    }
  }

  public async removeMultiple(files: SvgFile[]): Promise<void> {
    if (this.workspaceFolders !== undefined) {
      try {
        const value = this.get() ?? []
        const valueUser = this.inspect() ?? []

        for (const f of files) {
          const filePath = this.getPath(f)
          const exists = this.existsInWorkspace(f)

          if (value.includes(filePath) && exists) {
            const index = value.indexOf(filePath)
            value.splice(index, 1)
          } else if (valueUser.includes(filePath) && !exists) {
            const index = valueUser.indexOf(filePath)
            valueUser.splice(index, 1)
          }
        }

        // Update the configuration
        await this.update(value, ConfigurationTarget.Workspace)
        await this.update(valueUser, ConfigurationTarget.Global)
      } catch (error) {
        console.error('Error removing assets path:', error)
      }
    }
  }

  /**
   * Retrieves the assets path for the extension.
   * The assets path includes both the workspace and user paths.
   * @returns An object containing the workspace and user assets paths.
   */
  public getAssetsPath(): { workspace: string[]; user: string[] } {
    this.assetsPathUser.forEach((p, index) => {
      if (this.workspaceFolders !== undefined) {
        const exists = this.workspaceFolders?.some((folder) => p.includes(folder.uri.fsPath))
        const relativePath = exists ? path.relative(getWorkspaceFolder(), p) : p

        if (exists) {
          // Add the file to the assets path if it doesn't exist
          if (!this.assetsPath.includes(relativePath)) {
            const file = {
              basename: path.basename(p),
              dirname: path.dirname(p),
              absolutePath: p,
              relativePath,
            }

            this.set(file).catch((error) => {
              console.error('Error setting assets path:', error)
            })
          }

          // Remove the file from the user assets path
          this.assetsPathUser.splice(index, 1)
        }
      }
    })

    return { workspace: this.assetsPath, user: this.assetsPathUser }
  }
}
