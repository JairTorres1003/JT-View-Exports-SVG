import {
  IconCollectionKind,
  type SVGIconCollection,
  SVGReceiveMessage,
} from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import { getCache } from '@/services/cache/main'

import { BaseHandler } from '../BaseHandler'

export class RemoveIconFromCollectionHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.RemoveIconFromCollection

  async handle(icon: SVGIconCollection) {
    const workspace = vsc.workspace.workspaceFolders?.[0]
    if (!workspace) return

    const filesCache = getCache().get('files')
    const file = await filesCache.getFile(workspace, icon.location.id)

    if (!file || file.isTemporary) return

    const cache = getCache().get('icons')

    cache.remove(workspace, icon)

    if (icon.collection === IconCollectionKind.FAVORITE) {
      const exportCache = getCache().get('viewExports')
      exportCache.toggleIconFavorite(workspace, icon, false)
    }
  }
}
