import {
  isDynamicMessage,
  type ReceiveMessage,
  restoreDynamicMessage,
} from '@jt-view-exports-svg/core'
import { l10n } from 'vscode'

import type { BaseHandler } from './handlers/BaseHandler'

export class MessageRouter {
  private readonly handlers = new Map<string, BaseHandler>()

  constructor(handlers: BaseHandler[]) {
    for (const handler of handlers) {
      this.handlers.set(handler.type, handler)
    }
  }

  /**
   * Routes an incoming message to its corresponding handler.
   *
   * @param message - The message to be routed, containing a type identifier and optional data.
   */
  public async route(message: ReceiveMessage): Promise<boolean> {
    let type = message.type
    let data = Object.hasOwn(message, 'data') ? (message as { data: unknown }).data : undefined

    const isDynamic = isDynamicMessage(type)

    if (isDynamic) {
      type = restoreDynamicMessage(type)
      data = isDynamic.dynamicPart
    }

    const handler = this.handlers.get(type)

    if (!handler) {
      console.warn(l10n.t('No handler found for message type: {type}', { type }))
      return false
    }

    await handler.handle(data as Parameters<BaseHandler['handle']>[0])

    return true
  }
}
