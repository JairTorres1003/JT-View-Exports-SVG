import { ConfigurationTarget, env } from 'vscode'

import { formatDate } from '@/utilities/misc'

import ConfigManagerController from './ConfigManagerController'

export class LastScanDateController extends ConfigManagerController<string> {
  /**
   * The last scan date.
   */
  private readonly lastScanDate: string = ''

  constructor() {
    super('lastScanDate', '')
    this.lastScanDate = this.get()
  }

  /**
   * Get the last scan date.
   * @returns The last scan date.
   */
  public get _dateString(): string {
    return this.lastScanDate
  }

  /**
   * Get the last scan date as a Date object.
   */
  public get _date(): Date {
    return new Date(this.lastScanDate)
  }

  /**
   * Get the last scan date as a timestamp.
   */
  public get _dateTimestamp(): number {
    return this._date.getTime()
  }

  /**
   * Set the last scan date.
   * @param lastScanDate - The last scan date.
   */
  public async updateDate(): Promise<void> {
    const value = formatDate(new Date(), env.language ?? 'en')
    await this.update(value, ConfigurationTarget.Workspace)
  }

  /**
   * Reset the last scan date.
   */
  public async resetDate(): Promise<void> {
    await this.update('', ConfigurationTarget.Workspace)
  }
}
