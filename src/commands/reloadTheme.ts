import { l10n, window } from 'vscode'

import { ViewExportsSVGController } from '@/controllers/views'
import { SVGPostMessage } from '@/enum/ViewExportsSVG'
import { isEmpty } from '@/utilities/misc'
import { getExtensionTheme, reloadExtensionTheme } from '@/utilities/vscode/extensions/theme'

/**
 * Reloads the extension theme and sends it to the current panel if it exists.
 */
export const runReloadTheme = (): void => {
  if (!isEmpty(ViewExportsSVGController.currentPanel)) {
    reloadExtensionTheme()

    const theme = getExtensionTheme()

    if (!isEmpty(theme)) {
      ViewExportsSVGController.currentPanel._postMessage(SVGPostMessage.SendExtensionTheme, theme)
    } else {
      window
        .showInformationMessage(l10n.t('No theme found for the current workspace'))
        .then(undefined, console.error)
    }
  }
}
