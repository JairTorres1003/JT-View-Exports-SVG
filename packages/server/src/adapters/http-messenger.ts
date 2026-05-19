import type { ExtensionMessageEmitter } from '@jt-view-exports-svg/core'
import type { Response } from 'express'

export class HttpMessenger {
  constructor(private readonly res: Response) {}

  public postMessage: ExtensionMessageEmitter = (type, data) => {
    if (this.res.headersSent) {
      console.warn('Response already sent, cannot post message:', { type, data })
      return
    }

    this.res.status(200).json({ type, data })
  }
}
