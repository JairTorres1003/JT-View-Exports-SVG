import type { ReceiveMessage } from '@jt-view-exports-svg/core'
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
    const handler = this.handlers.get(message.type)

    if (!handler) {
      console.warn(l10n.t('No handler found for message type: {0}', message.type))
      return false
    }

    const data = Object.hasOwn(message, 'data') ? (message as { data: unknown }).data : undefined

    await handler.handle(data as Parameters<BaseHandler['handle']>[0])

    return true
  }
}
