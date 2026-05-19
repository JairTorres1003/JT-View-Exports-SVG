import { SVGReceiveMessage } from '@jt-view-exports-svg/core'
import { l10n } from 'vscode'

import { toggleDevTools } from '@/commands'
import { getUnknownError } from '@/utilities/misc'

import { BaseHandler } from '../BaseHandler'

export class IsOpenDevToolsHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.IsOpenDevTools

  handle(isExpanded: boolean) {
    toggleDevTools(isExpanded).catch((error) => {
      console.error(
        l10n.t('Error toggling developer tools: {error}', { error: getUnknownError(error) })
      )
    })
  }
}
