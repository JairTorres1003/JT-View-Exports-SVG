/**
 * Post message type definitions (Extension → Webview)
 *
 * Types for messages sent from the extension to the webview
 */

import type { SVGPostMessage } from '../../constants/messages'
import type { ExtensionManage, ThemeMode, VsCodeStyles } from '../editor'
import type { SVGComponent, SVGErrors, ViewExportSVG } from '../svg'

import type { AssetPath, MessageFnMap, MessagesUnion } from './base'

/**
 * Map of post message types to their data payloads
 */
export type PostMessageMap = {
  [SVGPostMessage.SendAssetsPath]: AssetPath
  [SVGPostMessage.SendLastScanDate]: string
  [SVGPostMessage.SendPlaygroundError]: SVGErrors
  [SVGPostMessage.SendRunLoading]: string
  [SVGPostMessage.SendSVGComponents]: ViewExportSVG[]
  [SVGPostMessage.SendRefreshSVGComponents]: ViewExportSVG[]
  [SVGPostMessage.SendSVGError]: SVGErrors
  [SVGPostMessage.SendSVGFilteredComponents]: ViewExportSVG[]
  [SVGPostMessage.SendSVGPlayground]: SVGComponent
  [SVGPostMessage.SendTheme]: ThemeMode
  [SVGPostMessage.SendEditorConfig]: Record<string, unknown>
  [SVGPostMessage.SendVsCodeStyles]: VsCodeStyles
  [SVGPostMessage.SendHomeIcons]: ViewExportSVG[]
  [SVGPostMessage.SendExpandAllIcons]: boolean
  [SVGPostMessage.SendToggleOpenDevTools]: boolean
  [SVGPostMessage.SendExtensionTheme]: ExtensionManage
  [SVGPostMessage.SendUpdateConfiguration]: Record<string, unknown>
  [SVGPostMessage.SendReloadWebview]: string
  [SVGPostMessage.SendOpenFiles]: string[]
}

/**
 * Union type of all possible post messages
 */
export type PostMessage = MessagesUnion<PostMessageMap>

/**
 * Function type for posting messages to the webview
 * Auto-generated from PostMessageMap
 */
export type FuncPostMessage = MessageFnMap<PostMessageMap>
