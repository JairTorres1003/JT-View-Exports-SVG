export type ReceiveMessageCommand =
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
