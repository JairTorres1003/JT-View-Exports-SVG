import { workspace } from 'vscode'

import { type IThemeData } from '../../interfaces/editorTheme'

import { getThemeInfo } from './theme'

/**
 * Gets the current configuration of the Visual Studio Code editor.
 * @returns The current configuration.
 */
export async function getConfigurationVsCode(): Promise<{
  styles: {
    fontFamily: unknown
    fontLigatures: unknown
    fontSize: unknown
    fontVariations: unknown
    fontWeight: unknown
    letterSpacing: unknown
    lineHeight: number
    tabSize: unknown
    wordBreak: unknown
    wordWrap: unknown
    wordWrapColumn: unknown
  }
  themeData: IThemeData | undefined
}> {
  const configuration = workspace.getConfiguration('editor')
  const colorTheme = workspace.getConfiguration('workbench').get('colorTheme')

  const styles = {
    fontFamily: configuration.get('fontFamily'),
    fontLigatures: configuration.get('fontLigatures'),
    fontSize: configuration.get('fontSize'),
    fontVariations: configuration.get('fontVariations'),
    fontWeight: configuration.get('fontWeight'),
    letterSpacing: configuration.get('letterSpacing'),
    lineHeight: Number(configuration.get('fontSize') ?? 12) + 4,
    tabSize: configuration.get('tabSize'),
    wordBreak: configuration.get('wordBreak'),
    wordWrap: configuration.get('wordWrap'),
    wordWrapColumn: configuration.get('wordWrapColumn'),
  }

  const themeData = await getThemeInfo(colorTheme as string)

  return { styles, themeData }
}
