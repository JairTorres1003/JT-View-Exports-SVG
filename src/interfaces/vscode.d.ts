export type ReceiveMessageCommand =
  | "extractIconsFile"
  | "getCurrentTheme"
  | "getTranslations"
  | "requestSvgComponents"
  | "searchSvgComponents";
export type PostMessageCommand =
  | "currentTheme"
  | "filteredSvgComponents"
  | "language"
  | "svgComponents";
/**
 * Data structure representing a message received by the webview.
 */
interface ReciveMessageData {
  /**
   * The command associated with the received message.
   */
  command: ReceiveMessageCommand;

  /**
   * The payload data of the received message.
   */
  data: any;
}

/**
 * Represents a handler for commands.
 */
interface CommandHandler {
  /**
   * A dictionary of command names and their corresponding handler functions.
   * @param message The received message data.
   */
  [command: string]: (message: ReciveMessageData) => void;
}
