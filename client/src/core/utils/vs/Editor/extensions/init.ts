import '@codingame/monaco-vscode-css-default-extension'
import '@codingame/monaco-vscode-html-default-extension'
import '@codingame/monaco-vscode-javascript-default-extension'
import '@codingame/monaco-vscode-theme-defaults-default-extension'
import '@codingame/monaco-vscode-typescript-basics-default-extension'

import '@codingame/monaco-vscode-extension-api/localExtensionHost'

import type { ExtensionManage } from '@api/interfaces/vscode'

import activateDefaultExtension from './default'
import activateExtensionTheme from './theme'

interface ActivateDefaultExtensionsParams {
  extensionTheme?: ExtensionManage
}

async function activateDefaultExtensions({ extensionTheme }: ActivateDefaultExtensionsParams) {
  if (extensionTheme) await activateExtensionTheme(extensionTheme)
  await activateDefaultExtension()
}

export { activateDefaultExtensions }
