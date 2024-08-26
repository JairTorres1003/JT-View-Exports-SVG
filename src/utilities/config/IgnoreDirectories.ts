import { isEmpty } from '../misc'

import ExtensionConfigManager from './configManager'

export class IgnoreDirectories extends ExtensionConfigManager<string[]> {
  /**
   * The directories to ignore.
   */
  private readonly ignoreDirectories: string[] = []
  /**
   * The directories to ignore by the user.
   */
  private readonly ignoreDirectoriesUser: string[] = []

  constructor() {
    super('ignoreDirectories', [])
    this.ignoreDirectories = this.get() ?? []
    this.ignoreDirectoriesUser = this.inspect() ?? []
  }

  /**
   * Gets the list of directories to ignore.
   * @returns An array of strings representing the directories to ignore.
   */
  public get _directories(): string[] {
    return isEmpty(this.ignoreDirectories) ? this.ignoreDirectoriesUser : this.ignoreDirectories
  }

  /**
   * Gets the list of directories to ignore for the user.
   * @returns An array of strings representing the directories to ignore.
   */
  public get _directoriesUser(): string[] {
    return this.ignoreDirectoriesUser
  }

  /**
   * Gets an array of all directories to ignore.
   * This includes both the default ignore directories and the user-defined ignore directories.
   * @returns An array of strings representing the directories to ignore.
   */
  public get _allDirectories(): string[] {
    return [...this.ignoreDirectories, ...this.ignoreDirectoriesUser]
  }
}
