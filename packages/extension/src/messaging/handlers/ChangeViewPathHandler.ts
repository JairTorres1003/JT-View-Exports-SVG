import { pathnames, WebviewMessage } from '@jt-view-exports-svg/core'
import { l10n } from 'vscode'

import { toggleViewActions } from '@/commands/editorTitleActions'
import { getUnknownError } from '@/utilities/misc'

import { BaseHandler } from './BaseHandler'

export class ChangeViewPathHandler extends BaseHandler {
  readonly type = WebviewMessage.ChangeViewPath

  private readonly showingPaths: string[] = [pathnames.home, pathnames.dashboard]

  handle(path: string) {
    toggleViewActions(this.showingPaths.includes(path)).catch((error) => {
      console.error(
        l10n.t('Error toggling view actions: {error}', { error: getUnknownError(error) })
      )
    })
  }
}
