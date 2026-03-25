import type { ReceiveMessageMap, SVGReceiveMessage } from '@jt-view-exports-svg/core'

export abstract class BaseHandler<T extends SVGReceiveMessage = SVGReceiveMessage> {
  abstract readonly type: T

  abstract handle(
    data: T extends keyof ReceiveMessageMap ? ReceiveMessageMap[T] : unknown
  ): void | Promise<void>
}
