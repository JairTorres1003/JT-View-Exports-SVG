import type { IconCollectionKind } from '../../constants'
import type { WebviewMessage } from '../../constants/messages'

import type { FileTemporary, LocationIdentifier } from '../common'
import type { SVGIconCollection, SVGPlayground } from '../svg'

import type { HandlerArgs, HandlersMap, MessageEmitter, MessagesUnion } from './base'

/**
 * Map of receive message types to their data payloads
 */
export type WebviewMessageMap = {
  [WebviewMessage.Ready]: undefined
  [WebviewMessage.ChangeViewPath]: string
  [WebviewMessage.RequestComponents]: undefined
  [WebviewMessage.RequestUserComponents]: undefined
  [WebviewMessage.SearchComponents]: string
  [WebviewMessage.ReloadComponent]: FileIdentifier[]
  [WebviewMessage.IsExpandComponents]: boolean
  [WebviewMessage.ProcessUploadedFiles]: string[]
  [WebviewMessage.AddIconToCollection]: SVGIconCollection
  [WebviewMessage.RemoveIconFromCollection]: SVGIconCollection
  [WebviewMessage.ClearIconCollection]: IconCollectionKind
  [WebviewMessage.IsOpenDevTools]: boolean
  [WebviewMessage.EditComponentInPlayground]: SVGPlayground
  [WebviewMessage.RequestEditorConfig]: undefined
  [WebviewMessage.RequestEditorExtensionTheme]: undefined
  [WebviewMessage.RequestEditorStyles]: undefined
  [WebviewMessage.ReloadEditorExtensionTheme]: undefined
  [WebviewMessage.OpenFileInEditor]: LocationIdentifier
  [WebviewMessage.OpenDialogFiles]: undefined
  [WebviewMessage.CreateTempFiles]: FileTemporary[]
  [WebviewMessage.RequestFileMetadata]: FileIdentifier[]
  [WebviewMessage.FetchVSCodeTheme]: undefined
  [WebviewMessage.FetchVsCodeThemePackage]: undefined
}

/**
 * Union type of all possible receive messages
 */
export type WebviewMessageData = MessagesUnion<WebviewMessageMap>

/**
 * Handler interface for all receive messages
 * Auto-generated from WebviewMessageMap
 */
export type HandlerWebviewMessage = HandlersMap<WebviewMessageMap>

/**
 * Callback function that handles incoming messages.
 * @param arg0 - Optional arguments containing the received message handler data.
 * @returns void
 */
export type OnMessageReceived = (arg0?: HandlerArgs<HandlerWebviewMessage>) => void

/**
 * Message emitter function type for sending messages to the extension.
 * Auto-generated from WebviewMessageMap
 */
export type WebviewMessageEmitter = MessageEmitter<WebviewMessageMap>
