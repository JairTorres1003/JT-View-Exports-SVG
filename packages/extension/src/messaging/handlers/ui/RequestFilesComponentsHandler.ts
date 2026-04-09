import { SVGPostMessage, SVGReceiveMessage } from '@jt-view-exports-svg/core'

import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { viewExportStore } from '@/store/ViewExportStore'

import { BaseHandler } from '../BaseHandler'

export class RequestFilesComponentsHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.RequestFilesComponents

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  handle() {
    const files = viewExportStore.getFiles()

    this.messenger.postMessage(SVGPostMessage.LoadFilesComponents, files)
  }
}
