import type { ExtensionManage } from '@api/types/vscode'
import {
  registerExtension,
  ExtensionHostKind,
  type IExtensionManifest,
} from '@codingame/monaco-vscode-api/extensions'

import i18next from '@/i18n'
import { getUnknownError } from '@/utils/misc'

/**
 * Activates the theme extension by fetching its manifest and registering its themes.
 *
 * This function locates the base URL for the extension, fetches the `package.json` manifest,
 * and registers each theme contributed by the extension. If any step fails, an error is logged.
 *
 * @async
 * @throws Logs an error if the manifest cannot be fetched or processed.
 */
async function activate(_themeConfig?: ExtensionManage) {
  try {
    if (import.meta.env.DEV) {
      devActivate()
      return
    }

    const urlTemp = new URL('favicon.ico', import.meta.url).href
    const baseUrl = urlTemp.substring(0, urlTemp.lastIndexOf('/'))

    const packageJSON = await fetch(`${baseUrl}/extensions/theme/package.json`)

    if (!packageJSON.ok) {
      throw new Error(i18next.t('errors.FailedToFetchExtensionTheme'))
    }

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

/**
 * Activates the theme extension in development mode by registering a default theme.
 *
 * This function registers a default theme named "Default Theme One Dark" with the Monaco Editor.
 * It sets the theme's path and other metadata, allowing it to be used in the editor.
 */
function devActivate() {
  const themePath = '/vs/theme/default-theme-one-dark.json'
  const manifest: IExtensionManifest = {
    name: 'default-theme-one-dark',
    displayName: 'Default Theme One Dark',
    publisher: 'zhuangtongfa',
    version: __APP_VERSION,
    engines: {
      vscode: '*',
    },
    contributes: {
      themes: [
        {
          label: 'Default Theme One Dark',
          path: themePath,
          id: 'default-theme-one-dark',
          uiTheme: 'vs-dark',
        },
      ],
    },
  }

  const extensionTheme = registerExtension(manifest, ExtensionHostKind.LocalProcess)
  extensionTheme.registerFileUrl(themePath, new URL(themePath, window.location.href).href)

  document.documentElement.classList.add('monaco-workbench')
}

export default activate
