import { ConfigurationTarget } from 'vscode'

import ExtensionConfigManager from '../extensionConfigManager'

export class ConfigLastScanDate extends ExtensionConfigManager<string> {
  private readonly lastScanDate: string = this.get() ?? ''

  constructor() {
    super('lastScanDate')
  }

  /**
   * Retrieves the last scan date from the configuration.
   * @returns The last scan date.
   */
  public getLastScanDate(): string {
    return this.lastScanDate
  }

  /**
   * Updates the last scan date in the configuration.
   * @param date The last scan date.
   */
  public async updateLastScanDate(date: string): Promise<void> {
    await this.update(date, ConfigurationTarget.Workspace)
  }

  /**
   * Resets the last scan date in the configuration.
   */
  public async resetLastScanDate(): Promise<void> {
    await this.update('', ConfigurationTarget.Workspace)
  }
}
