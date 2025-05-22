import '@codingame/monaco-vscode-css-default-extension'
import '@codingame/monaco-vscode-html-default-extension'
import '@codingame/monaco-vscode-javascript-default-extension'
import '@codingame/monaco-vscode-theme-defaults-default-extension'
import '@codingame/monaco-vscode-typescript-basics-default-extension'

import '@codingame/monaco-vscode-extension-api/localExtensionHost'

import activateDefaultExtension from './default'
import activateExtensionTheme from './theme'

async function activateDefaultExtensions() {
  await Promise.all([activateDefaultExtension(), activateExtensionTheme()])
}

export { activateDefaultExtensions }
