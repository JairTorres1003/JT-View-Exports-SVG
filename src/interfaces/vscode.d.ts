/**
 * Represents a language file.
 */
export interface LanguageFile {
  /**
   * The name of the language.
   */
  name: string
  /**
   * The file extensions associated with the language.
   */
  extensions: string[]
}

export type ThemeMode = 'dark' | 'light'

export interface VsCodeStyles {
  fontFamily: unknown
  fontSize: unknown
  fontWeight: unknown
  letterSpacing: unknown
  tabSize: unknown
  fontFeatureSettings: string
  [key: string]: unknown
}
