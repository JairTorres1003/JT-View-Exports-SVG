import { type IconCollectionKind, SVGReceiveMessage } from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import { getCache } from '@/services/cache/main'

import { BaseHandler } from '../BaseHandler'

export class ClearIconCollectionHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.ClearIconCollection

  handle(collection: IconCollectionKind) {
    const workspace = vsc.workspace.workspaceFolders?.[0]

    if (!workspace) return

    const cache = getCache().get('icons')

    cache.delete([workspace, collection])
  }
}
