import { ExtensionMessage } from '@jt-view-exports-svg/core'
import { l10n, window } from 'vscode'

import { PanelController } from '@/controllers/views/PanelController'
import { getCache } from '@/services/cache/main'
import { getConfigurationEditor } from '@/services/vscode/editorConfig'
import { CACHE_KEY, initializeExtensionTheme } from '@/services/vscode/extensionTheme'
import { isEmpty } from '@/utilities/misc'

/**
 * Reloads the extension theme and sends it to the current panel if it exists.
 */
export const runReloadTheme = async (): Promise<void> => {
  const cache = getCache().get('extensionTheme')

  await cache.delete(CACHE_KEY)

  initializeExtensionTheme()

  const config = getConfigurationEditor()
  const theme = await cache.get(CACHE_KEY)

  PanelController.send(ExtensionMessage.LoadEditorConfig, config)

  if (!isEmpty(theme)) {
    PanelController.send(ExtensionMessage.LoadExtensionTheme, theme)
  } else {
    window
      .showInformationMessage(l10n.t('No theme found for the current workspace'))
      .then(undefined, console.error)
  }
}
