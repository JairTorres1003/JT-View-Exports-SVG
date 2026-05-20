import {
  ExtensionHostKind,
  type IExtensionManifest,
  registerExtension,
} from '@codingame/monaco-vscode-api/extensions'
import { sanitizePathStart } from '@jt-view-exports-svg/core'

import { axiosInstance } from '@/services/instance'

import isExtensionAlreadyInstalled from './is-extension-already-installed'

/**
 * Activates the theme extension in development mode by registering a default theme.
 *
 * This function registers a default theme named "Default Theme One Dark" with the Monaco Editor.
 * It sets the theme's path and other metadata, allowing it to be used in the editor.
 */
export default async function devActivate(): Promise<void> {
  const manifest = (await axiosInstance.get<IExtensionManifest>('/vs/extension/theme-package')).data

  if (!manifest) {
    console.error('Failed to fetch the theme extension manifest.')
    return
  }

  const isAlreadyRegistered = isExtensionAlreadyInstalled(manifest)
  if (isAlreadyRegistered) return

  const extensionTheme = registerExtension(manifest, ExtensionHostKind.LocalProcess)

  manifest.contributes?.themes?.forEach((theme) => {
    extensionTheme.registerFileUrl(
      theme.path,
      new URL(`/assets/vs/extensions/theme/${sanitizePathStart(theme.path)}`, window.location.href)
        .href
    )
  })

  document.documentElement.classList.add('monaco-workbench')
}
