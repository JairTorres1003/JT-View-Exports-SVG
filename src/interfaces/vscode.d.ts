export type receiveMessageCommand =
  | "getCurrentTheme"
  | "getTranslations"
  | "requestSvgComponents"
  | "searchSvgComponents";
export type postMessageCommand =
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
  command: receiveMessageCommand;

  /**
   * The payload data of the received message.
   */
  data: any;
}
