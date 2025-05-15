import type { ExtensionManage } from '@api/interfaces/vscode'
import {
  registerExtension,
  ExtensionHostKind,
  type IExtensionManifest,
} from '@codingame/monaco-vscode-api/extensions'

import { getUnknownError } from '@/utils/misc'

async function activate(extensionTheme: ExtensionManage) {
  try {
    if (!extensionTheme.extensionPath) return

    const urlTemp = new URL('favicon.ico', import.meta.url).href
    const baseUrl = urlTemp.substring(0, urlTemp.lastIndexOf('/'))

    const packageJSON = await fetch(`${baseUrl}/extensions/theme/package.json`)

    const manifestData: IExtensionManifest = await packageJSON.json()

    const manifest: IExtensionManifest = {
      name: manifestData.name,
      version: manifestData.version,
      publisher: manifestData.publisher,
      engines: {
        vscode: '*',
      },
      contributes: {
        themes: manifestData.contributes?.themes ?? [],
      },
    }

    const { registerFileUrl } = registerExtension(manifestData, ExtensionHostKind.LocalProcess)

    manifest.contributes?.themes?.forEach((theme) => {
      const themePath = theme.path?.slice(theme.path.indexOf('/') + 1)
      const themeUrl = `${baseUrl}/extensions/theme/${themePath}`
      registerFileUrl(`/${themePath}`, themeUrl)
    })
  } catch (error) {
    console.error(`Failed to activate extension theme: ${getUnknownError(error)}`)
  }
}

export default activate
