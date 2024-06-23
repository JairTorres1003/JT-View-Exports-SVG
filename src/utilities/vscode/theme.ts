import * as path from 'path'

import * as Color from 'color'
import { extensions, window } from 'vscode'

import {
  type IStandaloneThemeData,
  type IThemeData,
  type IThemeObject,
  type ITokenThemeRule,
} from '../../interfaces/editorTheme'
import { type ThemeInfo, type ThemeMode } from '../../interfaces/vscode'
import { BaseCache } from '../cache/base'

const themeCache = new BaseCache<IThemeData>()

/**
 * Gets the current color theme of the Visual Studio Code editor.
 * @returns The current color theme: "dark" or "light".
 */
export function getCurrentTheme(): ThemeMode {
  // Get the current color theme's kind value
  const currentTheme = window.activeColorTheme.kind

  // Check if the kind value corresponds to a "light" theme (1, 4) or "dark" theme (2, 3)
  // and return the appropriate theme name
  return currentTheme === 1 || currentTheme === 4 ? 'light' : 'dark'
}

/**
 * Parses the theme data and converts it into the desired format.
 *
 * @param theme - The theme name.
 * @param mode - The theme mode ('light' or 'dark').
 * @param values - The theme object containing colors and token colors.
 * @returns The parsed theme data.
 */
function themeParser(theme: string, mode: ThemeMode, values: IThemeObject): IThemeData {
  const colors: Record<string, string> = {}
  const rules: ITokenThemeRule[] = []

  // Convert all color values to CSS hex form.
  for (const [key, value] of Object.entries(values.colors ?? {})) {
    colors[key] = (Color(value).hex() ?? '').toLowerCase()
  }

  // Convert all token colors to the new format.
  for (const entry of values.tokenColors ?? []) {
    const { scope, settings } = entry
    const scopes = Array.isArray(scope) ? scope : scope.split(',')
    const { foreground, background, fontStyle } = settings

    for (const scope of scopes) {
      const rule: ITokenThemeRule = {
        token: scope.trim(),
      }

      if (foreground) rule.foreground = (Color(foreground).hex() ?? '').toLowerCase()
      if (background) rule.background = (Color(background).hex() ?? '').toLowerCase()
      if (fontStyle) rule.fontStyle = fontStyle

      rules.push(rule)
    }
  }

  const themeData: IStandaloneThemeData = {
    base: mode === 'light' ? 'vs' : 'vs-dark',
    inherit: true,
    rules,
    colors,
  }

  return {
    themeName: theme.replace(/ /g, '-').toLowerCase(),
    themeData,
  }
}

/**
 * Retrieves theme information for the specified color theme.
 * @param colorTheme The name or ID of the color theme.
 * @returns A promise that resolves to the theme data, or undefined if the theme is not found.
 */
export async function getThemeInfo(colorTheme: string) {
  // Check if the theme is cached
  const cachedTheme = themeCache.get(colorTheme)

  if (cachedTheme) {
    return cachedTheme
  }

  let result: IThemeData | undefined

  // Check if the theme is provided by an extension
  const themeExtensionProvided = extensions.all.find((ext) => {
    const { contributes } = ext.packageJSON
    const contributedThemes = contributes?.themes

    return contributedThemes?.some(
      (theme: ThemeInfo) => theme.label === colorTheme || theme.id === colorTheme
    )
  })

  if (themeExtensionProvided) {
    const { extensionPath, packageJSON } = themeExtensionProvided

    // Theme provided by an extension
    const themeInfo: ThemeInfo = packageJSON.contributes.themes.find(
      (theme: ThemeInfo) => theme.label === colorTheme || theme.id === colorTheme
    )

    if (themeInfo?.path) {
      const themePath = path.join(extensionPath, themeInfo.path)
      const themeJSON = await import(themePath)

      result = themeParser(colorTheme, getCurrentTheme(), themeJSON)
    }
  }

  if (result) {
    themeCache.set(colorTheme, result)
  }

  return result
}
