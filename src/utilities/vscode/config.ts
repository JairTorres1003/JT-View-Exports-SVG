import { workspace } from 'vscode'

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editorConfig: Record<string, any> = {}

  for (const key in configuration) {
    const value = configuration.get(key)

    if (value !== undefined) {
      editorConfig[`editor.${key}`] = value
    }
  }

  if (typeof editorConfig['editor.minimap'] === 'object') {
    editorConfig['editor.minimap'].enabled = false
  } else {
    editorConfig['editor.minimap.enabled'] = false
  }

  const kind = getCurrentTheme()

  return {
    ...editorConfig,
    'editor.folding': false,
    'editor.glyphMargin': false,
    'editor.lineNumbers': 'off',
    'workbench.colorTheme': workbenchConfiguration.get(
      'colorTheme',
      kind === 'dark' ? 'Default Dark+' : 'Default Light+'
    ),
    'workbench.iconTheme': workbenchConfiguration.get('iconTheme'),
    'workbench.colorCustomizations': workbenchConfiguration.get('colorCustomizations'),
  }
}
