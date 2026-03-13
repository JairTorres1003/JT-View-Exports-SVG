import { SVGPostMessage, SVGReceiveMessage } from '@jt-view-exports-svg/core'

import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { viewExportStore } from '@/store/ViewExportStore'

import { BaseHandler } from '../BaseHandler'

export class RequestUserComponentsHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.RequestUserComponents

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  handle() {
    const components = viewExportStore.getAll()

    this.messenger.postMessage(SVGPostMessage.LoadUserComponents, components)
  }
}
