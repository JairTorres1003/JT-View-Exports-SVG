import type { Extension } from 'vscode'

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
  fontFamily: string
  fontSize: number
  fontWeight: string | number
  letterSpacing: number
  tabSize: number
  fontFeatureSettings: string
  [key: string]: unknown
}

export type ExtensionManage = Pick<
  Extension<any>,
  'id' | 'extensionUri' | 'extensionPath' | 'isActive'
> & { isValid: boolean }

export interface IPackageJSON {
  contributes?: {
    themes?: Array<{
      label: string
      uiTheme: string
      path: string
      id: string
    }>
  }
}

export interface IExtension extends Omit<Extension<unknown>, 'packageJSON'> {
  packageJSON: IPackageJSON
}
