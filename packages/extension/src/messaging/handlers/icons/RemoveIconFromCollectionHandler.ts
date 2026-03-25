import { type SVGIconCollection, SVGReceiveMessage } from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import { getCache } from '@/services/cache/main'
import { viewExportStore } from '@/store/ViewExportStore'

import { BaseHandler } from '../BaseHandler'

export class RemoveIconFromCollectionHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.RemoveIconFromCollection

  handle(icon: SVGIconCollection) {
    const fileList = viewExportStore.getFiles()
    const file = fileList[icon.location.id]
    const workspace = vsc.workspace.workspaceFolders?.[0]

    if (!file || file.isTemporary || !workspace) return

    const cache = getCache().get('icons')

    cache.remove(workspace, { ...icon, file })
  }
}
