import { SVGPostMessage, SVGReceiveMessage } from '@jt-view-exports-svg/core'
import { l10n, window } from 'vscode'

import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { getExtensionTheme } from '@/services/vscode/extensionTheme'

import { BaseHandler } from '../BaseHandler'

export class RequestEditorExtensionThemeHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.RequestEditorExtensionTheme

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  handle() {
    const theme = getExtensionTheme()

    if (!theme) {
      window
        .showInformationMessage(l10n.t('No theme found for the current workspace'))
        .then(undefined, console.error)

      return
    }

    this.messenger.postMessage(SVGPostMessage.LoadExtensionTheme, theme)
  }
}
