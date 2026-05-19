import { ExtensionMessage, WebviewMessage } from '@jt-view-exports-svg/core'

import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { getConfigurationEditor } from '@/services/vscode/editorConfig'

import { BaseHandler } from '../BaseHandler'

export class RequestEditorConfigHandler extends BaseHandler {
  readonly type = WebviewMessage.RequestEditorConfig

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  handle() {
    const config = getConfigurationEditor()
    this.messenger.postMessage(ExtensionMessage.LoadEditorConfig, config)
  }
}
