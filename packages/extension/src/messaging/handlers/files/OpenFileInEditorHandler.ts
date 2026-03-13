import { type FileToOpen, SVGReceiveMessage } from '@jt-view-exports-svg/core'
import { l10n, window } from 'vscode'

import { openFile } from '@/utilities/files/misc'
import { BaseHandler } from '../BaseHandler'

export class OpenFileInEditorHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.OpenFileInEditor

  handle(params: FileToOpen) {
    if (!params.file.isTemporary) {
      openFile(params)
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
          openFile(params)
        }
      })
  }
}
