import { ColorThemeKind, window, workspace } from 'vscode'

import { DEFAULT_FONT_FAMILY } from '@/constants/misc'
import type { VsCodeStyles, ThemeMode } from '@/types/vscode'

/**
 * Gets the current color theme of the Visual Studio Code editor.
 * @returns The current color theme: "dark" or "light".
 */
export function getCurrentTheme(): ThemeMode {
  // Get the current color theme's kind value
  const currentTheme = window.activeColorTheme.kind

  // Check if the kind value corresponds to a "light" theme (1, 4) or "dark" theme (2, 3)
  // and return the appropriate theme name
  return currentTheme === ColorThemeKind.Light || currentTheme === ColorThemeKind.HighContrastLight
    ? 'light'
    : 'dark'
}

/**
 * Retrieves the styles for the VS Code editor.
 * @returns {VsCodeStyles} The styles for the VS Code editor.
 */
export function getStyles(): VsCodeStyles {
  const configuration = workspace.getConfiguration('editor')

  return {
    fontFamily: configuration.get('fontFamily', DEFAULT_FONT_FAMILY),
    fontSize: configuration.get('fontSize', 12),
    fontWeight: configuration.get('fontWeight', 'normal'),
    letterSpacing: configuration.get('letterSpacing', 0),
    tabSize: configuration.get('tabSize', 4),
    fontFeatureSettings: configuration.get('fontLigatures', false) ? '"liga", "calt"' : 'normal',
  }
}
