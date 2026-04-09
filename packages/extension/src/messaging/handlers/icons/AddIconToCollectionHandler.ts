import {
  IconCollectionKind,
  type SVGIconCollection,
  SVGReceiveMessage,
} from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import { getCache } from '@/services/cache/main'
import { viewExportStore } from '@/store/ViewExportStore'
import { BaseHandler } from '../BaseHandler'

export class AddIconToCollectionHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.AddIconToCollection

  handle(icon: SVGIconCollection) {
    const fileList = viewExportStore.getFiles()
    const file = fileList[icon.location.id]
    const workspace = vsc.workspace.workspaceFolders?.[0]

    if (!file || !workspace) return

    if (file.isTemporary) {
      vsc.window.showWarningMessage(
        vsc.l10n.t(
          `Icons in the temp directory cannot be added to the "{collection}" collection.`,
          { collection: vsc.l10n.t(icon.collection) }
        )
      )

      return
    }

    const cache = getCache().get('icons')

    cache.add(workspace, { ...icon, file })

    if (icon.collection === IconCollectionKind.FAVORITE) {
      const exportCache = getCache().get('viewExports')
      exportCache.toggleIconFavorite(workspace, icon, true)
    }
  }
}
