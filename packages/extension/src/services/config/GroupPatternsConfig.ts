import { l10n } from 'vscode'

import type { ConfigNotification } from './base/ConfigManager'
import { ConfigManager } from './base/ConfigManager'

export class GroupPatternsConfig extends ConfigManager<Record<string, string>> {
  readonly section = 'groupPatterns'
  readonly defaultValue: Record<string, string> = {}
  readonly notification: ConfigNotification = {
    message: l10n.t('Group patterns changed. Reload the panel to apply.'),
  }

  get patterns(): string[] {
    return Object.keys(this.getValue())
  }

  get patternsArray(): Array<[string, string]> {
    return Object.entries(this.getValue())
  }
}
