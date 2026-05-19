import { l10n } from 'vscode'

import type { ConfigNotification } from './base/ConfigManager'
import { ConfigManager } from './base/ConfigManager'

export class ShowNotExportedIconsConfig extends ConfigManager<boolean> {
  readonly section = 'showNotExportedIcons'
  readonly defaultValue = false
  override get notification(): ConfigNotification {
    return {
      message: l10n.t('The "Show not exported icons" setting changed. Reload the panel to apply.'),
    }
  }
}
