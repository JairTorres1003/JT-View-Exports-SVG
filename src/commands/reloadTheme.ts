import { type ExtensionContext, l10n, window } from 'vscode'

import { ViewExportsSVGController } from '@/controllers/views'
import { SVGPostMessage } from '@/enum/ViewExportsSVG'
import { isEmpty } from '@/utilities/misc'
import { getConfigurationEditor, getCurrentTheme } from '@/utilities/vscode'
import { getExtensionTheme, reloadExtensionTheme } from '@/utilities/vscode/extensions/theme'

/**
 * Reloads the extension theme and sends it to the current panel if it exists.
 */
export const runReloadTheme = async (context: ExtensionContext): Promise<void> => {
  if (!isEmpty(ViewExportsSVGController.currentPanel)) {
    await reloadExtensionTheme(context)

    const theme = getExtensionTheme()

    if (!isEmpty(theme)) {
      ViewExportsSVGController.currentPanel._postMessage(SVGPostMessage.SendExtensionTheme, theme)
    } else {
      window
        .showInformationMessage(l10n.t('No theme found for the current workspace'))
        .then(undefined, console.error)
    }

    const config = getConfigurationEditor()
    const kind = getCurrentTheme()

    ViewExportsSVGController.currentPanel._postMessage(SVGPostMessage.SendEditorConfig, config)
    ViewExportsSVGController.currentPanel._postMessage(SVGPostMessage.SendTheme, kind)
  }
}
