export type postMessageCommand = "requestSvgComponents" | "searchSvgComponents";
export type onMessageCommand = "svgComponents";

/**
 * Data structure representing a message sent between the webview and the extension.
 */
interface MessageData {
  /**
   * The command associated with the message.
   */
  command: onMessageCommand;
  /**
   * The data payload of the message.
   */
  data: any;
}
