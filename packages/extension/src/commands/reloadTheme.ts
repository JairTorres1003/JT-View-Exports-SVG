import { SVGPostMessage } from '@jt-view-exports-svg/core'
import { type ExtensionContext, l10n, window } from 'vscode'

import { PanelController } from '@/controllers/views/PanelController'
import { getConfigurationEditor } from '@/services/vscode/editorConfig'
import { getExtensionTheme, reloadExtensionTheme } from '@/services/vscode/extensionTheme'
import { getCurrentThemeMode } from '@/services/vscode/themeMode'
import { isEmpty } from '@/utilities/misc'

/**
 * Reloads the extension theme and sends it to the current panel if it exists.
 */
export const runReloadTheme = async (context: ExtensionContext): Promise<void> => {
  await reloadExtensionTheme(context)

  const config = getConfigurationEditor()
  const kind = getCurrentThemeMode()
  const theme = getExtensionTheme()

  PanelController.send(SVGPostMessage.LoadEditorConfig, config)
  PanelController.send(SVGPostMessage.LoadEditorThemeMode, kind)

  if (!isEmpty(theme)) {
    PanelController.send(SVGPostMessage.LoadExtensionTheme, theme)
  } else {
    window
      .showInformationMessage(l10n.t('No theme found for the current workspace'))
      .then(undefined, console.error)
  }
}
