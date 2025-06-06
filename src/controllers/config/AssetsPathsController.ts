import { ConfigurationTarget, l10n, workspace } from 'vscode'

import ConfigManagerController from './ConfigManagerController'

import type { SVGFile } from '@/types/ViewExportsSVG'
import { pathToSVGFile } from '@/utilities/files'
import { getUnknownError } from '@/utilities/misc'

export class AssetsPathsController extends ConfigManagerController<string[]> {
  /**
   * Relative paths to the assets in the workspace.
   */
  private readonly assetsPath: string[] = []
  /**
   * Absolute paths to the assets outside the workspace.
   */
  private readonly assetsPathUser: string[] = []
  private readonly workspaceFolders = workspace.workspaceFolders

  constructor() {
    super('assetsPath', [])
    this.assetsPath = this.get() ?? []
    this.assetsPathUser = this.inspect() ?? []
  }

  /**
   * Checks if the given file exists in the workspace folders.
   * @param file - The SVG file to check.
   * @returns `true` if the file exists in the workspace folders, `false` otherwise.
   */
  private existsInWorkspace(file: SVGFile): boolean {
    if (!this.workspaceFolders) return false

    return this.workspaceFolders.some((folder) => file.absolutePath.includes(folder.uri.fsPath))
  }

  /**
   * Gets the path of the file based on whether it exists in the workspace folders.
   * @param file - The SVG file.
   * @returns The relative path if the file exists in the workspace folders, otherwise the absolute path.
   */
  private getPath(file: SVGFile): string {
    const exists = this.existsInWorkspace(file)

    return exists ? file.relativePath : file.absolutePath
  }

  /**
   * Sets the assets path for the given SVG file.
   * Adds the file to the assets path if it doesn't already exist.
   * @param file - The SVG file to set.
   */
  public async set(file: SVGFile[]): Promise<void> {
    if (this.workspaceFolders) {
      try {
        const value = this.get() ?? []
        const valueUser = this.inspect() ?? []

        for (const f of file) {
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
        console.error(`${l10n.t('Error setting assets path')}:`, error)
      }
    }
  }

  /**
   * Removes the specified SVG files from the assets paths configuration.
   * @param files - An array of SVGFile objects representing the files to be removed.
   * @returns A Promise that resolves once the assets paths configuration has been updated.
   */
  public async remove(files: SVGFile[]): Promise<void> {
    if (this.workspaceFolders) {
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
        console.error(
          l10n.t('Error removing assets path: {error}', { error: getUnknownError(error) })
        )
      }
    }
  }

  /**
   * Retrieves the assets path for the extension.
   * The assets path includes both the workspace and user paths.
   * @returns An object containing the workspace and user assets paths.
   */
  public async getAssetsPath(): Promise<{ workspace: SVGFile[]; user: SVGFile[] }> {
    await Promise.all(
      this.assetsPathUser.map(async (p, index) => {
        const svgFile = await pathToSVGFile(p)
        const exists = this.existsInWorkspace(svgFile)

        if (exists) {
          // Add the file to the assets path if it doesn't exist
          if (!this.assetsPath.includes(svgFile.relativePath)) {
            this.set([svgFile]).catch((error) => {
              console.error(`${l10n.t('Error setting assets path')}:`, error)
            })
          }

          // Remove the file from the user assets path
          this.assetsPathUser.splice(index, 1)
        }
      })
    )

    const workspace = await Promise.all(this.assetsPath.map(pathToSVGFile))
    const user = await Promise.all(this.assetsPathUser.map(pathToSVGFile))

    return { workspace, user }
  }
}
