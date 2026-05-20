import { ExtensionMessage, WebviewMessage } from '@jt-view-exports-svg/core'
import { l10n } from 'vscode'

import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { viewExportStore } from '@/store/ViewExportStore'

import { BaseHandler } from '../BaseHandler'

export class RequestComponentsHandler extends BaseHandler {
  readonly type = WebviewMessage.RequestComponents

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  handle() {
    const components = viewExportStore.getAll()

    if (!components.length) {
      this.messenger.postMessage(ExtensionMessage.OnErrorComponents, {
        message: l10n.t('No SVG components found...'),
      })
      return
    }

    this.messenger.postMessage(ExtensionMessage.LoadComponents, components)
  }
}
