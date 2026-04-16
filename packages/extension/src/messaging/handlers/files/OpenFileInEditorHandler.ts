import { type LocationIdentifier, SVGReceiveMessage } from '@jt-view-exports-svg/core'
import { l10n, window, workspace } from 'vscode'

import { getCache } from '@/services/cache/main'
import { openFile } from '@/utilities/files/misc'

import { BaseHandler } from '../BaseHandler'

export class OpenFileInEditorHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.OpenFileInEditor

  async handle(location: LocationIdentifier) {
    const filesCache = getCache().get('files')
    const currentWorkspace = workspace.workspaceFolders?.[0] ?? 'global'

    const file =
      (await filesCache.getFile(currentWorkspace, location.id)) ??
      (await filesCache.getFile('global', location.id))

    if (!file) return

    if (!file.isTemporary) {
      openFile(file, location.start)
      return
    }

    window
      .showWarningMessage(
        l10n.t('This file is temporary. Do you want to continue?'),
        l10n.t('Yes'),
        l10n.t('No')
      )
      .then((selection) => {
        if (selection === l10n.t('Yes')) {
          openFile(file, location.start)
        }
      })
  }
}
