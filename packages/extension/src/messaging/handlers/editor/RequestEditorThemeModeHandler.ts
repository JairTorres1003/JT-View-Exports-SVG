import { SVGPostMessage, SVGReceiveMessage } from '@jt-view-exports-svg/core'

import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { getCurrentThemeMode } from '@/services/vscode/themeMode'

import { BaseHandler } from '../BaseHandler'

export class RequestEditorThemeModeHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.RequestEditorThemeMode

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  handle() {
    const theme = getCurrentThemeMode()
    this.messenger.postMessage(SVGPostMessage.LoadEditorThemeMode, theme)
  }
}
