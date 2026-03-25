import type { IconCollectionKind } from '../../constants'
import type { SVGReceiveMessage } from '../../constants/messages'

import type { FileTemporary, LocationIdentifier, SVGFile } from '../common'
import type { SVGIconCollection, SVGPlayground } from '../svg'

import type { HandlerArgs, HandlersMap, MessageEmitter, MessagesUnion } from './base'

/**
 * Map of receive message types to their data payloads
 */
export type ReceiveMessageMap = {
  [SVGReceiveMessage.Ready]: undefined
  [SVGReceiveMessage.ChangeViewPath]: string
  [SVGReceiveMessage.RequestComponents]: undefined
  [SVGReceiveMessage.RequestUserComponents]: undefined
  [SVGReceiveMessage.RequestFilesComponents]: undefined
  [SVGReceiveMessage.SearchComponents]: string
  [SVGReceiveMessage.ReloadComponent]: FileIdentifier[]
  [SVGReceiveMessage.IsExpandComponents]: boolean
  [SVGReceiveMessage.AddIconToCollection]: SVGIconCollection
  [SVGReceiveMessage.RemoveIconFromCollection]: SVGIconCollection
  [SVGReceiveMessage.ClearIconCollection]: IconCollectionKind
  [SVGReceiveMessage.IsOpenDevTools]: boolean
  [SVGReceiveMessage.RequestEditorThemeMode]: undefined
  [SVGReceiveMessage.RequestEditorConfig]: undefined
  [SVGReceiveMessage.RequestEditorExtensionTheme]: undefined
  [SVGReceiveMessage.RequestEditorStyles]: undefined
  [SVGReceiveMessage.OpenFileInEditor]: LocationIdentifier

  [SVGReceiveMessage.ExtractSVGComponentFromFiles]: string[]
  [SVGReceiveMessage.GetAssetsPath]: undefined
  [SVGReceiveMessage.GetLastScanDate]: undefined
  [SVGReceiveMessage.GetViewAssets]: SVGFile[]
  [SVGReceiveMessage.RequestFileOpen]: undefined
  [SVGReceiveMessage.CreateTempFiles]: FileTemporary[]
  [SVGReceiveMessage.PlaygroundSVGComponents]: SVGPlayground
  [SVGReceiveMessage.RemoveAssets]: SVGFile[]
  [SVGReceiveMessage.ScanWorkspace]: undefined
  [SVGReceiveMessage.ReloadExtensionTheme]: undefined
}

/**
 * Union type of all possible receive messages
 */
export type ReceiveMessage = MessagesUnion<ReceiveMessageMap>

/**
 * Handler interface for all receive messages
 * Auto-generated from ReceiveMessageMap
 */
export type HandlerReceiveMessage = HandlersMap<ReceiveMessageMap>

/**
 * Callback function that handles incoming messages.
 * @param arg0 - Optional arguments containing the received message handler data.
 * @returns void
 */
export type OnMessageReceived = (arg0?: HandlerArgs<HandlerReceiveMessage>) => void

/**
 * Message emitter function type for sending messages to the extension.
 * Auto-generated from ReceiveMessageMap
 */
export type ReceiveMessageEmitter = MessageEmitter<ReceiveMessageMap>
