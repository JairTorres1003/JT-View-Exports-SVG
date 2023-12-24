export type BuiltinTheme = 'vs' | 'vs-dark' | 'hc-black' | 'hc-light'

export type IColors = {
  [colorId: string]: string
}

export interface ITokenThemeRule {
  /**
   * The scope selector against which the themes rules are evaluated.
   */
  token: string
  /**
   * The color or style of the rule.
   */
  foreground?: string
  /**
   * The background color of the rule.
   */
  background?: string
  /**
   * The font style of the rule, e.g. 'italic' or 'bold' or 'underline'
   */
  fontStyle?: string
}

export interface ITokenEntry {
  name?: string
  scope: string[] | string
  settings: ITokenThemeRule
}

export interface IThemeObject {
  name: string
  type?: string
  colors?: IColors
  tokenColors?: ITokenEntry[]
}

export interface IStandaloneThemeData {
  base: BuiltinTheme
  inherit: boolean
  rules: ITokenThemeRule[]
  encodedTokensColors?: string[]
  colors: IColors
}

export interface IThemeData {
  themeName: string
  themeData: IStandaloneThemeData
}
