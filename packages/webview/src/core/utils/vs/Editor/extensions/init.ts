import '@codingame/monaco-vscode-javascript-default-extension'
import '@codingame/monaco-vscode-theme-defaults-default-extension'
import '@codingame/monaco-vscode-typescript-basics-default-extension'

import '@codingame/monaco-vscode-extension-api/localExtensionHost'

import type { EditorConfigurations } from '@/core/types/components/vs/Editor'

import activateDefaultExtension from './default'
import activateExtensionTheme from './theme'

async function activateDefaultExtensions(config: Partial<Omit<EditorConfigurations, 'onChange'>>) {
  await Promise.all([activateDefaultExtension(), activateExtensionTheme(config.extensionTheme)])
}

export { activateDefaultExtensions }
