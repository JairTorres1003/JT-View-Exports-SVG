import { IconCollectionKind, SVGPostMessage, SVGReceiveMessage } from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { getCache } from '@/services/cache/main'
import { getIconsCollection } from '@/services/getIconsCollection'
import { viewExportStore } from '@/store/ViewExportStore'

import { BaseHandler } from '../BaseHandler'

export class ClearIconCollectionHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.ClearIconCollection

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  async handle(collection: IconCollectionKind) {
    const workspace = vsc.workspace.workspaceFolders?.[0]

    if (!workspace) return

    const cache = getCache().get('icons')

    if (collection === IconCollectionKind.FAVORITE) {
      const exportCache = getCache().get('viewExports')
      await exportCache.unmarkAllIconsAsFavorite(workspace)
    }

    await cache.delete([workspace, collection])

    const items = await getIconsCollection()
    viewExportStore.set(items)
    this.messenger.postMessage(SVGPostMessage.LoadUserComponents, items)
  }
}
