import { SVGPostMessage } from '@/enum/ViewExportsSVG'
import { SVGComponent, SVGErrors, ViewExportSVG } from '../ViewExportsSVG'
import { ExtensionManage, ThemeMode, VsCodeStyles } from '../vscode'
import { AssetPath } from './content'

/**
 * The message to send to the webview.
 */
export type PostMessage =
  | { type: SVGPostMessage.SendAssetsPath; data: AssetPath }
  | { type: SVGPostMessage.SendLanguage; data: string }
  | { type: SVGPostMessage.SendLastScanDate; data: string }
  | { type: SVGPostMessage.SendPlaygroundError; data: SVGErrors }
  | { type: SVGPostMessage.SendRunExtraction; data: boolean }
  | { type: SVGPostMessage.SendSVGComponents; data: ViewExportSVG[] }
  | { type: SVGPostMessage.SendSVGError; data: SVGErrors }
  | { type: SVGPostMessage.SendSVGFilteredComponents; data: ViewExportSVG[] }
  | { type: SVGPostMessage.SendSVGPlayground; data: SVGComponent }
  | { type: SVGPostMessage.SendTheme; data: ThemeMode }
  | { type: SVGPostMessage.SendEditorConfig; data: Record<string, unknown> }
  | { type: SVGPostMessage.SendVsCodeStyles; data: VsCodeStyles }
  | { type: SVGPostMessage.SendRecentIcons; data: ViewExportSVG[] }
  | { type: SVGPostMessage.SendFavoriteIcons; data: ViewExportSVG[] }
  | { type: SVGPostMessage.SendExpandAllIcons; data: boolean }
  | { type: SVGPostMessage.SendOpenDevTools; data: boolean }
  | { type: SVGPostMessage.SendExtensionTheme; data: ExtensionManage }

/**
 * The message to send to the webview.
 */
export interface FuncPostMessage {
  /**
   * Sends the assets path to the webview.
   * @param data - The assets path for the workspace and user.
   */
  (type: SVGPostMessage.SendAssetsPath, data: AssetPath): void
  /**
   * Sends the language to the webview.
   * @param data - The language.
   */
  (type: SVGPostMessage.SendLanguage, data: string): void
  /**
   * Sends the last scan date to the webview.
   * @param data - The last scan date.
   */
  (type: SVGPostMessage.SendLastScanDate, data: string): void
  /**
   * Sends the SVG components to the webview.
   * @param data - The SVG components.
   */
  (type: SVGPostMessage.SendSVGComponents, data: ViewExportSVG[]): void
  /**
   * Sends an error message to the webview.
   * @param data - The error data.
   */
  (type: SVGPostMessage.SendSVGError, data: SVGErrors): void
  /**
   * Sends the filtered SVG components to the webview.
   * @param data - The filtered SVG components.
   */
  (type: SVGPostMessage.SendSVGFilteredComponents, data: ViewExportSVG[]): void
  /**
   * Sends the custom SVG component to the webview.
   * @param data - The custom SVG component.
   */
  (type: SVGPostMessage.SendSVGPlayground, data: SVGComponent): void
  /**
   * Sends an error message from the playground to the webview.
   * @param data - The error data.
   */
  (type: SVGPostMessage.SendPlaygroundError, data: SVGErrors): void
  /**
   * Sends the start extraction message to the webview.
   * @param data - The theme mode.
   */
  (type: SVGPostMessage.SendRunExtraction, data: boolean): void
  /**
   * Sends the current theme to the webview.
   * @param data - The theme mode.
   */
  (type: SVGPostMessage.SendTheme, data: ThemeMode): void
  /**
   * Sends the editor configuration to the webview.
   * @param data - The editor configuration.
   */
  (type: SVGPostMessage.SendEditorConfig, data: Record<string, unknown>): void
  /**
   * Sends the Visual Studio Code styles to the webview.
   * @param data - The Visual Studio Code styles.
   */
  (type: SVGPostMessage.SendVsCodeStyles, data: VsCodeStyles): void
  /**
   * Sends the recent icons to the webview.
   * @param data - The recent icons.
   */
  (type: SVGPostMessage.SendRecentIcons, data: ViewExportSVG[]): void
  /**
   * Sends the favorite icons to the webview.
   * @param data - The favorite icons.
   */
  (type: SVGPostMessage.SendFavoriteIcons, data: ViewExportSVG[]): void
  /**
   * Sends the expand all icons message to the webview.
   * @param data - The expand all icons message.
   */
  (type: SVGPostMessage.SendExpandAllIcons, data: boolean): void
  /**
   * Sends the open dev tools message to the webview.
   * @param data - The open dev tools message.
   */
  (type: SVGPostMessage.SendOpenDevTools, data: boolean): void
  /**
   * Sends the extension theme to the webview.
   * @param data - The extension theme.
   */
  (type: SVGPostMessage.SendExtensionTheme, data?: ExtensionManage): void
}
