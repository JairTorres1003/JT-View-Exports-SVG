import '@codingame/monaco-vscode-css-default-extension'
import '@codingame/monaco-vscode-html-default-extension'
import '@codingame/monaco-vscode-javascript-default-extension'
import '@codingame/monaco-vscode-theme-defaults-default-extension'
import '@codingame/monaco-vscode-typescript-basics-default-extension'

import type { ExtensionManage } from '@api/interfaces/vscode'

import activateExtensionTheme from './theme'

interface ActivateDefaultExtensionsParams {
  extensionTheme?: ExtensionManage
}

async function activateDefaultExtensions({ extensionTheme }: ActivateDefaultExtensionsParams) {
  if (extensionTheme) await activateExtensionTheme(extensionTheme)
}

export { activateDefaultExtensions }
