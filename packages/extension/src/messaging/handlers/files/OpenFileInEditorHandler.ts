import { type LocationIdentifier, SVGReceiveMessage } from '@jt-view-exports-svg/core'
import { l10n, window } from 'vscode'

import { viewExportStore } from '@/store/ViewExportStore'
import { openFile } from '@/utilities/files/misc'

import { BaseHandler } from '../BaseHandler'

export class OpenFileInEditorHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.OpenFileInEditor

  handle(location: LocationIdentifier) {
    const fileList = viewExportStore.getFiles()

    const file = fileList[location.id]

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
