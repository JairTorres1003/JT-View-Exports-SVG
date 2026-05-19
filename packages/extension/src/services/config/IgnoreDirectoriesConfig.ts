import { l10n } from 'vscode'

import { IGNORE_DIRECTORIES } from '@/constants/misc'
import { isEmpty } from '@/utilities/misc'

import type { ConfigNotification } from './base/ConfigManager'
import { ConfigManager } from './base/ConfigManager'

export class IgnoreDirectoriesConfig extends ConfigManager<string[]> {
  readonly section = 'ignoreDirectories'
  readonly defaultValue = IGNORE_DIRECTORIES
  override get notification(): ConfigNotification {
    return {
      message: l10n.t('Ignore directories changed. Reload the panel to apply.'),
    }
  }

  get directories(): string[] {
    const value = this.getValue()
    return isEmpty(value) ? this.defaultValue : value
  }

  get allDirectories(): string[] {
    return [...this.getValue(), ...this.defaultValue]
  }
}
