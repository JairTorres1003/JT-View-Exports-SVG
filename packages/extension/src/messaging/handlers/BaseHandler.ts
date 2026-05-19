import type { WebviewMessage, WebviewMessageMap } from '@jt-view-exports-svg/core'

export abstract class BaseHandler<T extends WebviewMessage = WebviewMessage> {
  abstract readonly type: T

  abstract handle(
    data: T extends keyof WebviewMessageMap ? WebviewMessageMap[T] : unknown
  ): void | Promise<void>
}
