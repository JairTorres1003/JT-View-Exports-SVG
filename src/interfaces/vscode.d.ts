export type ReceiveMessageCommand =
  | 'extractIconsFile'
  | 'getAssetsPath'
  | 'getConfigurationVsCode'
  | 'getCurrentTheme'
  | 'getTranslations'
  | 'playgroundSvgComponents'
  | 'requestSvgComponents'
  | 'searchSvgComponents'
  | 'openFile'
  | 'viewAssets'
  | 'removeAsset'
export type PostMessageCommand =
  | 'assetsPath'
  | 'configurationVsCode'
  | 'currentTheme'
  | 'customSvgComponent'
  | 'filteredSvgComponents'
  | 'language'
  | 'svgComponents'
/**
 * Data structure representing a message received by the webview.
 */
interface ReceiveMessageData {
  /**
   * The command associated with the received message.
   */
  command: ReceiveMessageCommand
  /**
   * The payload data of the received message.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

/**
 * Represents a handler for commands.
 */
type CommandHandler = Record<ReceiveMessageCommand, (message: ReceiveMessageData) => void>

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

/**
 * Represents the theme mode.
 */
export type ThemeMode = 'dark' | 'light'

/**
 * Represents information about a theme.
 */
export interface ThemeInfo {
  /**
   * The name of the theme.
   */
  id?: string
  /**
   * The label of the theme.
   */
  label?: string
  /**
   * The path of the theme.
   */
  path?: string
  /**
   * The mode of the theme.
   */
  uiTheme?: string
}
