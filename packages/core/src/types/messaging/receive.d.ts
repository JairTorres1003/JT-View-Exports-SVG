import type { SVGReceiveMessage } from '../../constants/messages'

import type { FileTemporary, OpenFile, SVGFile } from '../common'
import type { SVGIcon, SVGPlayground } from '../svg'

import type { HandlerArgs, HandlersMap, MessageEmitter, MessagesUnion } from './base'

/**
 * Map of receive message types to their data payloads
 */
export type ReceiveMessageMap = {
  [SVGReceiveMessage.ExtractSVGComponentFromFiles]: string[]
  [SVGReceiveMessage.GetAssetsPath]: undefined
  [SVGReceiveMessage.GetLastScanDate]: undefined
  [SVGReceiveMessage.GetSVGComponents]: undefined
  [SVGReceiveMessage.GetTheme]: undefined
  [SVGReceiveMessage.GetViewAssets]: SVGFile[]
  [SVGReceiveMessage.OpenFile]: OpenFile
  [SVGReceiveMessage.RequestFileOpen]: undefined
  [SVGReceiveMessage.CreateTempFiles]: FileTemporary[]
  [SVGReceiveMessage.PlaygroundSVGComponents]: SVGPlayground
  [SVGReceiveMessage.RefreshSVGComponents]: SVGFile[]
  [SVGReceiveMessage.RemoveAssets]: SVGFile[]
  [SVGReceiveMessage.ScanWorkspace]: undefined
  [SVGReceiveMessage.SearchSVGComponents]: string
  [SVGReceiveMessage.GetEditorConfig]: undefined
  [SVGReceiveMessage.GetVsCodeStyles]: undefined
  [SVGReceiveMessage.AddRecentIcon]: SVGIcon
  [SVGReceiveMessage.RemoveRecentIcon]: SVGIcon
  [SVGReceiveMessage.ClearRecentIcons]: undefined
  [SVGReceiveMessage.AddFavoriteIcon]: SVGIcon
  [SVGReceiveMessage.RemoveFavoriteIcon]: SVGIcon
  [SVGReceiveMessage.ClearFavoriteIcons]: undefined
  [SVGReceiveMessage.GetHomeIcons]: undefined
  [SVGReceiveMessage.ToggleExpandIcon]: boolean
  [SVGReceiveMessage.ToggleOpenDevTools]: boolean
  [SVGReceiveMessage.GetExtensionTheme]: undefined
  [SVGReceiveMessage.ReloadExtensionTheme]: undefined
  [SVGReceiveMessage.ViewRenderPath]: string
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
