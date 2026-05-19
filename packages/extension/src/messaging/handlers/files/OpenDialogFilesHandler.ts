import { ExtensionMessage, WebviewMessage } from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import type { WebviewMessenger } from '@/messaging/WebviewMessenger'

import { BaseHandler } from '../BaseHandler'

export class OpenDialogFilesHandler extends BaseHandler {
  readonly type = WebviewMessage.OpenDialogFiles

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  handle() {
    const options: vsc.OpenDialogOptions = {
      canSelectMany: true, // Allow selecting multiple files
      openLabel: vsc.l10n.t('Select files'),
      filters: {
        'All Files': ['ts', 'tsx', 'js', 'jsx'],
      },
    }

    vsc.window.showOpenDialog(options).then((uris) => {
      if (uris && uris.length > 0) {
        const fileUris = uris.map((uri) => uri.toString())
        this.messenger.postMessage(ExtensionMessage.LoadOpenFiles, fileUris)
      }
    })
  }
}
