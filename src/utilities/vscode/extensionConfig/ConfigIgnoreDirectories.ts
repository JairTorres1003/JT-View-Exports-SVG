import { ConfigurationTarget } from 'vscode'

import ExtensionConfigManager from '../extensionConfigManager'

export class ConfigIgnoreDirectories extends ExtensionConfigManager<string[]> {
  private readonly ignoreDirectories: string[] = this.get() ?? []
  private readonly ignoreDirectoriesUser: string[] = this.inspect() ?? []

  constructor() {
    super('ignoreDirectories')
  }

  /**
   * Retrieves the directories to ignore from the configuration.
   * @returns The directories to ignore.
   */
  public getDirectories(): string[] {
    return [...this.ignoreDirectories, ...this.ignoreDirectoriesUser]
  }

  /**
   * Adds a directory to ignore to the configuration.
   * @param directory The directory to ignore.
   */
  public async addDirectory(directory: string): Promise<void> {
    const directories = this.getDirectories()
    directories.push(directory)
    await this.update(directories, ConfigurationTarget.Workspace)
  }

  /**
   * Removes a directory to ignore from the configuration.
   * @param directory The directory to ignore.
   */
  public async removeDirectory(directory: string): Promise<void> {
    const directories = this.getDirectories()
    const index = directories.indexOf(directory)

    if (index !== -1) {
      directories.splice(index, 1)
      await this.update(directories, ConfigurationTarget.Workspace)
    }
  }
}
