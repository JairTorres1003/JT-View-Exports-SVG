export type PostMessageCommand =
  | 'extractIconsFile'
  | 'getCurrentTheme'
  | 'getTranslations'
  | 'requestSvgComponents'
  | 'searchSvgComponents'
export type OnMessageCommand =
  | 'currentTheme'
  | 'filteredSvgComponents'
  | 'language'
  | 'svgComponents'

/**
 * Data structure representing a message sent between the webview and the extension.
 */
interface MessageData {
  /**
   * The command associated with the message.
   */
  command: OnMessageCommand
  /**
   * The data payload of the message.
   */
  data: any
}
