import type { SVGPostMessage } from '../../constants/messages'
import type { SVGErrors } from '../common'
import type { ExtensionManage, ThemeMode, VsCodeStyles } from '../editor'
import type { SVGComponent, ViewExportSVG } from '../svg'

import type {
  AssetPath,
  HandlerArgs,
  HandlersMap,
  MessageEmitter,
  MessageSubscriber,
  MessagesUnion,
} from './base'

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
 * Handler interface for all post messages
 * Auto-generated from PostMessageMap
 */
export type HandlerPostMessage = HandlersMap<PostMessageMap>

/**
 * Callback function that handles incoming messages.
 * @param arg0 - Optional arguments containing the post message handler data.
 * @returns void
 */
export type OnMessagePosted = (arg0?: HandlerArgs<HandlerPostMessage>) => void

/**
 * Message emitter function type for sending messages to the webview.
 * Auto-generated from PostMessageMap
 */
export type PostMessageEmitter = MessageEmitter<PostMessageMap>

/**
 * Message subscriber function type for subscribing to messages from the webview.
 * Auto-generated from PostMessageMap
 */
export type PostMessageSubscriber = MessageSubscriber<PostMessageMap>
