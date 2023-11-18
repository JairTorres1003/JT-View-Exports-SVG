export type ReceiveMessageCommand =
  | 'extractIconsFile'
  | 'getCurrentTheme'
  | 'getTranslations'
  | 'requestSvgComponents'
  | 'searchSvgComponents'
export type PostMessageCommand =
  | 'currentTheme'
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
