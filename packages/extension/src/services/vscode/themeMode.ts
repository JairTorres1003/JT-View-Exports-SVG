import type { ThemeMode } from '@jt-view-exports-svg/core'
import { ColorThemeKind, window } from 'vscode'

/**
 * Gets the current color theme of the Visual Studio Code editor.
 * @returns The current color theme: "dark" or "light".
 */
export function getCurrentThemeMode(): ThemeMode {
  // Get the current color theme's kind value
  const currentTheme = window.activeColorTheme.kind

  // Check if the kind value corresponds to a "light" theme (1, 4) or "dark" theme (2, 3)
  // and return the appropriate theme name
  return currentTheme === ColorThemeKind.Light || currentTheme === ColorThemeKind.HighContrastLight
    ? 'light'
    : 'dark'
}
