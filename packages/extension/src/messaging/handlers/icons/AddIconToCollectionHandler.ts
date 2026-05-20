import {
  IconCollectionKind,
  type SVGIconCollection,
  WebviewMessage,
} from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import { getCache } from '@/services/cache/main'

import { BaseHandler } from '../BaseHandler'

export class AddIconToCollectionHandler extends BaseHandler {
  readonly type = WebviewMessage.AddIconToCollection

  async handle(icon: SVGIconCollection) {
    const workspace = vsc.workspace.workspaceFolders?.[0]
    if (!workspace) return

    const filesCache = getCache().get('files')
    const file = await filesCache.getFile(workspace, icon.location.id)

    if (!file) return

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

    try {
      await cache.add(workspace, {
        ...icon,
        allowMoreIcons: icon.collection === IconCollectionKind.FAVORITE,
      })

      if (icon.collection === IconCollectionKind.FAVORITE) {
        const exportCache = getCache().get('viewExports')
        await exportCache.toggleIconFavorite(workspace, icon, true)
      }
    } catch (error) {
      vsc.window.showErrorMessage(
        vsc.l10n.t('Failed to add icon to collection: {message}', {
          message: error instanceof Error ? error.message : String(error),
        })
      )
    }
  }
}
