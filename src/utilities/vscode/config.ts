import { workspace } from 'vscode'

import { getExtensionTheme } from './extensions/theme'
import { getCurrentTheme } from './theme'

/**
 * Retrieves the editor configuration settings from the workspace and modifies certain properties.
 *
 * @returns {Record<string, unknown>} An object containing the editor configuration settings with specific modifications:
 * - `editor.minimap.enabled` is set to `false`.
 * - `editor.folding` is set to `false`.
 * - `editor.glyphMargin` is set to `false`.
 * - `editor.lineNumbers` is set to `'off'`.
 */
export function getConfigurationEditor(): Record<string, unknown> {
  const configuration = workspace.getConfiguration('editor')
  const workbenchConfiguration = workspace.getConfiguration('workbench')

  // biome-ignore lint/suspicious/noExplicitAny: -- This is a workaround for the type issue
  const editorConfig: Record<string, any> = {}

  for (const key in configuration) {
    if (Object.hasOwn(configuration, key)) {
      const value = configuration.get(key)

      if (value) {
        editorConfig[`editor.${key}`] = value
      }
    }
  }

  if (typeof editorConfig['editor.minimap'] === 'object') {
    ;(editorConfig['editor.minimap'] as { enabled?: boolean }).enabled = false
  } else {
    editorConfig['editor.minimap.enabled'] = false
  }

  const kind = getCurrentTheme()
  const extensionTheme = getExtensionTheme()
  const defTheme = kind === 'dark' ? 'Default Dark+' : 'Default Light+'

  return {
    ...editorConfig,
    'editor.folding': false,
    'editor.glyphMargin': false,
    'editor.lineNumbers': 'off',
    'workbench.colorTheme': extensionTheme
      ? workbenchConfiguration.get('colorTheme', defTheme)
      : defTheme,
    'workbench.iconTheme': workbenchConfiguration.get('iconTheme'),
    'workbench.colorCustomizations': workbenchConfiguration.get('colorCustomizations'),
  }
}
