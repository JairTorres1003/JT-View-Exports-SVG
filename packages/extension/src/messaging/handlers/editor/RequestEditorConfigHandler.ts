import { SVGPostMessage, SVGReceiveMessage } from '@jt-view-exports-svg/core'

import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { getConfigurationEditor } from '@/services/vscode/editorConfig'

import { BaseHandler } from '../BaseHandler'

export class RequestEditorConfigHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.RequestEditorConfig

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  handle() {
    const config = getConfigurationEditor()
    this.messenger.postMessage(SVGPostMessage.LoadEditorConfig, config)
  }
}
