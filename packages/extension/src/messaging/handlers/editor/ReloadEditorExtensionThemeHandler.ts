import { WebviewMessage } from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import { CONFIG_KEY } from '@/constants/misc'

import { BaseHandler } from '../BaseHandler'

export class ReloadEditorExtensionThemeHandler extends BaseHandler {
  readonly type = WebviewMessage.ReloadEditorExtensionTheme

  async handle() {
    try {
      await vsc.commands.executeCommand(`${CONFIG_KEY}.reloadTheme`)
    } catch (error) {
      console.error(vsc.l10n.t('Error reloading editor extension theme'), error)
    }
  }
}
