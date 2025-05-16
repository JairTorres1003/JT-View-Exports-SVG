import type { ExtensionManage } from '@api/interfaces/vscode'
import {
  registerExtension,
  ExtensionHostKind,
  type IExtensionManifest,
} from '@codingame/monaco-vscode-api/extensions'

import i18next from '@/i18n'
import { getUnknownError } from '@/utils/misc'

/**
 * Activates the given extension theme by loading its manifest and registering its theme files.
 *
 * This function fetches the `package.json` manifest for the theme extension, registers the extension,
 * and then iterates over the contributed themes to register their file URLs for use in the editor.
 *
 * @param extensionTheme - The extension theme object containing the extension path and related metadata.
 * @returns A promise that resolves when the activation process is complete.
 * @throws Logs an error to the console if activation fails.
 */
async function activate(extensionTheme: ExtensionManage) {
  try {
    if (!extensionTheme.extensionPath) return

    const urlTemp = new URL('favicon.ico', import.meta.url).href
    const baseUrl = urlTemp.substring(0, urlTemp.lastIndexOf('/'))

    const packageJSON = await fetch(`${baseUrl}/extensions/theme/package.json`)

    const manifest: IExtensionManifest = await packageJSON.json()

    const { registerFileUrl } = registerExtension(manifest, ExtensionHostKind.LocalProcess)

    manifest.contributes?.themes?.forEach((theme) => {
      const themePath = theme.path?.slice(theme.path.indexOf('/') + 1)
      const themeUrl = `${baseUrl}/extensions/theme/${themePath}`
      registerFileUrl(`/${themePath}`, themeUrl)
    })
  } catch (error) {
    console.error(
      `${i18next.t('errors.FailedToActivateExtensionTheme')}: ${getUnknownError(error)}`
    )
  }
}

export default activate
