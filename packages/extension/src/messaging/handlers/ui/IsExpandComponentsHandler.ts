import { SVGReceiveMessage } from '@jt-view-exports-svg/core'
import { l10n } from 'vscode'

import { expandedIcons } from '@/commands'
import { getUnknownError } from '@/utilities/misc'

import { BaseHandler } from '../BaseHandler'

export class IsExpandComponentsHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.IsExpandComponents

  handle(isExpanded: boolean) {
    expandedIcons(isExpanded).catch((error) => {
      console.error(
        l10n.t('Error toggling expanded icons: {error}', { error: getUnknownError(error) })
      )
    })
  }
}
