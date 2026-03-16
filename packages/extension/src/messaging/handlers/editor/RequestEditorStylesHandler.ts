import { SVGPostMessage, SVGReceiveMessage } from '@jt-view-exports-svg/core'

import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { getEditorStyles } from '@/services/vscode/styles'

import { BaseHandler } from '../BaseHandler'

export class RequestEditorStylesHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.RequestEditorStyles

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  handle() {
    const styles = getEditorStyles()
    this.messenger.postMessage(SVGPostMessage.LoadEditorStyles, styles)
  }
}
