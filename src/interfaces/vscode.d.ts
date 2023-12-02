export type ReceiveMessageCommand =
  | 'extractIconsFile'
  | 'getConfigurationVsCode'
  | 'getCurrentTheme'
  | 'getTranslations'
  | 'playgroundSvgComponents'
  | 'requestSvgComponents'
  | 'searchSvgComponents'
export type PostMessageCommand =
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
  data: any
}

/**
 * Represents a handler for commands.
 */
type CommandHandler = Record<string, (message: ReceiveMessageData) => void>
