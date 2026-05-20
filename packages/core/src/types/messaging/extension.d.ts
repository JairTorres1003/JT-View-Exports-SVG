import type { ExtensionMessage } from '../../constants/messages'
import type { FileIdentifier, SVGErrors, SVGFile } from '../common'
import type { EditorStyles, ExtensionManage } from '../editor'
import type { SVGComponent, ViewExportSVG } from '../svg'

import type {
  FetchResponse,
  HandlerArgs,
  HandlersMap,
  MessageEmitter,
  MessageSubscriber,
  MessagesUnion,
} from './base'

/**
 * Map of post message types to their data payloads
 */
export type ExtensionMessageMap = {
  [ExtensionMessage.Navigate]: { path: string; options?: { reload?: boolean } }
  [ExtensionMessage.LoadComponents]: ViewExportSVG[]
  [ExtensionMessage.LoadUserComponents]: ViewExportSVG[]
  [ExtensionMessage.FilterComponents]: ViewExportSVG[]
  [ExtensionMessage.OnErrorComponents]: SVGErrors
  [ExtensionMessage.OnReloadComponent]: ViewExportSVG[]
  [ExtensionMessage.ToggleExpandAllComponents]: boolean
  [ExtensionMessage.ToggleOpenDevTools]: boolean
  [ExtensionMessage.ComponentEditedInPlayground]: SVGComponent
  [ExtensionMessage.ErrorEditingComponentInPlayground]: SVGErrors
  [ExtensionMessage.LoadEditorConfig]: Record<string, unknown>
  [ExtensionMessage.LoadExtensionTheme]: ExtensionManage
  [ExtensionMessage.LoadEditorStyles]: EditorStyles
  [ExtensionMessage.FetchVSCodeTheme]: FetchResponse<Record<string, unknown>>
  [ExtensionMessage.LoadOpenFiles]: string[]
  [ExtensionMessage.LoadFileMetadata]: Record<FileIdentifier, SVGFile>
  [ExtensionMessage.FetchVsCodeThemePackage]: FetchResponse<Record<string, unknown>>
}

/**
 * Union type of all possible post messages
 */
export type ExtensionMessageData = MessagesUnion<ExtensionMessageMap>

/**
 * Handler interface for all post messages
 * Auto-generated from ExtensionMessageMap
 */
export type HandlerExtensionMessage = HandlersMap<ExtensionMessageMap>

/**
 * Callback function that handles incoming messages.
 * @param arg0 - Optional arguments containing the post message handler data.
 * @returns void
 */
export type OnMessagePosted = (arg0?: HandlerArgs<HandlerExtensionMessage>) => void

/**
 * Message emitter function type for sending messages to the webview.
 * Auto-generated from ExtensionMessageMap
 */
export type ExtensionMessageEmitter = MessageEmitter<ExtensionMessageMap>

/**
 * Message subscriber function type for subscribing to messages from the webview.
 * Auto-generated from ExtensionMessageMap
 */
export type ExtensionMessageSubscriber = MessageSubscriber<ExtensionMessageMap>
