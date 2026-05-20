import * as vsc from 'vscode'

export function getCurrentThemeMode(): 'dark' | 'light' {
  // Get the current color theme's kind value
  const currentTheme = vsc.window.activeColorTheme.kind

  // Check if the kind value corresponds to a "light" theme (1, 4) or "dark" theme (2, 3)
  // and return the appropriate theme name
  return currentTheme === vsc.ColorThemeKind.Light ||
    currentTheme === vsc.ColorThemeKind.HighContrastLight
    ? 'light'
    : 'dark'
}

/**
 * Retrieves the editor configuration settings from the workspace and modifies certain properties.
 *
 * @returns An object containing the editor configuration settings with specific modifications:
 * - `editor.minimap.enabled` is set to `false`.
 * - `editor.folding` is set to `false`.
 * - `editor.glyphMargin` is set to `false`.
 * - `editor.lineNumbers` is set to `'off'`.
 */
export function getConfigurationEditor(): Record<string, unknown> {
  const configuration = vsc.workspace.getConfiguration('editor')
  const workbenchConfiguration = vsc.workspace.getConfiguration('workbench')

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

  const kind = getCurrentThemeMode()
  const defTheme = kind === 'dark' ? 'Default Dark+' : 'Default Light+'

  return {
    ...editorConfig,
    'editor.folding': false,
    'editor.glyphMargin': false,
    'editor.lineNumbers': 'off',
    'workbench.colorTheme': workbenchConfiguration.get('colorTheme', defTheme),
    'workbench.iconTheme': workbenchConfiguration.get('iconTheme'),
    'workbench.colorCustomizations': workbenchConfiguration.get('colorCustomizations'),
  }
}
