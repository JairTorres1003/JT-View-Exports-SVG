import { SVGPostMessage, SVGReceiveMessage } from '@jt-view-exports-svg/core'
import { l10n, window } from 'vscode'

import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { getCache } from '@/services/cache/main'
import { CACHE_KEY } from '@/services/vscode/extensionTheme'
import { BaseHandler } from '../BaseHandler'

export class RequestEditorExtensionThemeHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.RequestEditorExtensionTheme

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  private showNoThemeMessage() {
    window
      .showInformationMessage(l10n.t('No theme found for the current workspace'))
      .then(undefined, console.error)
  }

  handle() {
    const cache = getCache().get('extensionTheme')

    if (!cache.has(CACHE_KEY)) {
      this.showNoThemeMessage()
      return
    }

    cache.get(CACHE_KEY).then((theme) => {
      if (!theme) {
        this.showNoThemeMessage()
        return
      }

      this.messenger.postMessage(SVGPostMessage.LoadExtensionTheme, theme)
    })
  }
}
