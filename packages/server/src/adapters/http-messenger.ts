import type { PostMessageEmitter } from '@jt-view-exports-svg/core'
import type { Response } from 'express'

export class HttpMessenger {
  constructor(private readonly res: Response) {}

  public postMessage: PostMessageEmitter = (type, data) => {
    this.res.status(200).json({ type, data }).send()
  }
}
