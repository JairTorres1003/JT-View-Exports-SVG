import { ConfigurationTarget, env } from 'vscode'

import { formatDate } from '@/utilities/misc'

import { ConfigManager } from './base/ConfigManager'

export class LastScanDateConfig extends ConfigManager<string> {
  readonly section = 'lastScanDate'
  readonly defaultValue = ''

  get dateString(): string {
    return this.getValue()
  }

  get date(): Date {
    return new Date(this.getValue())
  }

  get dateTimestamp(): number {
    return this.date.getTime()
  }

  async updateDate(): Promise<void> {
    const value = formatDate(new Date(), env.language ?? 'en')
    await this.update(value, ConfigurationTarget.Workspace)
  }

  async resetDate(): Promise<void> {
    await this.update('', ConfigurationTarget.Workspace)
  }
}
