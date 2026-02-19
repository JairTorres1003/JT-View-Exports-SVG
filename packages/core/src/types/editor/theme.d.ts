import type { Extension } from 'vscode'

/**
 * Theme mode (dark or light)
 */
export type ThemeMode = 'dark' | 'light'

/**
 * Extension management information
 */
export type ExtensionManage = Pick<
  Extension<unknown>,
  'id' | 'extensionUri' | 'extensionPath' | 'isActive'
> & { isValid: boolean }

/**
 * Package JSON structure for theme extensions
 */
export interface IPackageJSON {
  contributes?: {
    /** Theme definitions */
    themes?: Array<{
      label: string
      uiTheme: string
      path: string
      id: string
    }>
  }
}

/**
 * Extension with typed package.json
 */
export interface IExtension extends Omit<Extension<unknown>, 'packageJSON'> {
  /** Typed package.json */
  packageJSON: IPackageJSON
}
