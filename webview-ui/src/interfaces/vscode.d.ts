export type PostMessageCommand =
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
  | 'scanWorkspace'
  | 'getLastScanDate'
export type OnMessageCommand =
  | 'assetsPath'
  | 'configurationVsCode'
  | 'currentTheme'
  | 'customSvgComponent'
  | 'filteredSvgComponents'
  | 'language'
  | 'svgComponents'
  | 'lastScanDate'

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}
