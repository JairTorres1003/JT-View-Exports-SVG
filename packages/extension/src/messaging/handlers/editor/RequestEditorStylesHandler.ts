import { ExtensionMessage, WebviewMessage } from '@jt-view-exports-svg/core'

import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { getEditorStyles } from '@/services/vscode/styles'

import { BaseHandler } from '../BaseHandler'

export class RequestEditorStylesHandler extends BaseHandler {
  readonly type = WebviewMessage.RequestEditorStyles

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  handle() {
    const styles = getEditorStyles()
    this.messenger.postMessage(ExtensionMessage.LoadEditorStyles, styles)
  }
}
