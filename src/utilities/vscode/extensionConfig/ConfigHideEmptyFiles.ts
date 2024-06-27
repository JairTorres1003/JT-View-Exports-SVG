import { ConfigurationTarget } from 'vscode'

import ExtensionConfigManager from '../extensionConfigManager'

export class ConfigHideEmptyFiles extends ExtensionConfigManager<boolean> {
  private readonly hideEmptyFiles: boolean = this.get()
  private readonly hideEmptyFilesUser: boolean = this.inspect()

  constructor() {
    super('hideEmptyFiles')
  }

  /**
   * Checks if the configuration is set to hide empty files.
   * @returns `true` if the configuration is set to hide empty files, `false` otherwise.
   */
  public isHide(): boolean {
    return this.hideEmptyFiles ?? this.hideEmptyFilesUser ?? true
  }

  /**
   * Toggles the configuration to hide empty files.
   */
  public async toggleHide(): Promise<void> {
    const value = !this.isHide()
    await this.update(value, ConfigurationTarget.Workspace)
  }

  /**
   * Toggles the configuration to hide empty files for the user.
   */
  public async toggleHideUser(): Promise<void> {
    const value = !this.isHide()
    await this.update(value, ConfigurationTarget.Global)
  }
}
