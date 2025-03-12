import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import {
  SVGComponent,
  SVGErrors,
  SVGFile,
  SVGIcon,
  SVGPlayground,
  ViewExportSVG,
} from '@api/interfaces/ViewExportsSVG'
import { AssetPath } from '@api/interfaces/views/content'
import { ExtensionManage, ThemeMode, VsCodeStyles } from '@api/interfaces/vscode'

/**
 * The message to receive from the webview.
 */
export interface MessageHandlersView {
  [SVGPostMessage.SendAssetsPath]?: (data: AssetPath) => void
  [SVGPostMessage.SendLanguage]?: (data: string) => void
  [SVGPostMessage.SendLastScanDate]?: (data: string) => void
  [SVGPostMessage.SendPlaygroundError]?: (data: SVGErrors) => void
  [SVGPostMessage.SendRunExtraction]?: (data: boolean) => void
  [SVGPostMessage.SendSVGComponents]?: (data: ViewExportSVG[]) => void
  [SVGPostMessage.SendSVGError]?: (data: SVGErrors) => void
  [SVGPostMessage.SendSVGFilteredComponents]?: (data: ViewExportSVG[]) => void
  [SVGPostMessage.SendSVGPlayground]?: (data: SVGComponent) => void
  [SVGPostMessage.SendTheme]?: (data: ThemeMode) => void
  [SVGPostMessage.SendEditorConfig]?: (data: Record<string, unknown>) => void
  [SVGPostMessage.SendVsCodeStyles]?: (data: VsCodeStyles) => void
  [SVGPostMessage.SendRecentIcons]?: (data: ViewExportSVG[]) => void
  [SVGPostMessage.SendFavoriteIcons]?: (data: ViewExportSVG[]) => void
  [SVGPostMessage.SendExpandAllIcons]?: (data: boolean) => void
  [SVGPostMessage.SendOpenDevTools]?: (data: boolean) => void
  [SVGPostMessage.SendExtensionTheme]?: (data: ExtensionManage) => void
}

/**
 * The handler for receiving messages from the webview.
 */
export interface FuncOnMessage {
  (type: SVGPostMessage.SendAssetsPath, handler: (data: AssetPath) => void): void
  (type: SVGPostMessage.SendLanguage, handler: (data: string) => void): void
  (type: SVGPostMessage.SendLastScanDate, handler: (data: string) => void): void
  (type: SVGPostMessage.SendPlaygroundError, handler: (data: SVGErrors) => void): void
  (type: SVGPostMessage.SendRunExtraction, handler: (data: boolean) => void): void
  (type: SVGPostMessage.SendSVGComponents, handler: (data: ViewExportSVG[]) => void): void
  (type: SVGPostMessage.SendSVGError, handler: (data: SVGErrors) => void): void
  (type: SVGPostMessage.SendSVGFilteredComponents, handler: (data: ViewExportSVG[]) => void): void
  (type: SVGPostMessage.SendSVGPlayground, handler: (data: SVGComponent) => void): void
  (type: SVGPostMessage.SendTheme, handler: (data: ThemeMode) => void): void
  (type: SVGPostMessage.SendEditorConfig, handler: (data: Record<string, unknown>) => void): void
  (type: SVGPostMessage.SendVsCodeStyles, handler: (data: VsCodeStyles) => void): void
  (type: SVGPostMessage.SendRecentIcons, handler: (data: ViewExportSVG[]) => void): void
  (type: SVGPostMessage.SendFavoriteIcons, handler: (data: ViewExportSVG[]) => void): void
  (type: SVGPostMessage.SendExpandAllIcons, handler: (data: boolean) => void): void
  (type: SVGPostMessage.SendOpenDevTools, handler: (data: boolean) => void): void
  (type: SVGPostMessage.SendExtensionTheme, handler: (data: ExtensionManage) => void): void
}

/**
 * The message to send to the webview.
 */
export interface FuncPostMessage {
  (type: SVGReceiveMessage.ExtractSVGComponent, data: string[]): void
  (type: SVGReceiveMessage.GetAssetsPath): void
  (type: SVGReceiveMessage.GetLanguage): void
  (type: SVGReceiveMessage.GetLastScanDate): void
  (type: SVGReceiveMessage.GetSVGComponents): void
  (type: SVGReceiveMessage.GetTheme): void
  (type: SVGReceiveMessage.GetViewAssets, data: SVGFile[]): void
  (type: SVGReceiveMessage.GetEditorConfig): void
  (type: SVGReceiveMessage.GetVsCodeStyles): void
  (type: SVGReceiveMessage.OpenFile, data: OpenFile): void
  (type: SVGReceiveMessage.PlaygroundSVGComponents, data: SVGPlayground): void
  (type: SVGReceiveMessage.RemoveAssets, data: SVGFile[]): void
  (type: SVGReceiveMessage.ScanWorkspace): void
  (type: SVGReceiveMessage.SearchSVGComponents, data: string): void
  (type: SVGReceiveMessage.AddRecentIcon, data: SVGIcon): void
  (type: SVGReceiveMessage.RemoveRecentIcon, data: SVGIcon): void
  (type: SVGReceiveMessage.GetRecentIcons): void
  (type: SVGReceiveMessage.ClearRecentIcons): void
  (type: SVGReceiveMessage.AddFavoriteIcon, data: SVGIcon): void
  (type: SVGReceiveMessage.RemoveFavoriteIcon, data: SVGIcon): void
  (type: SVGReceiveMessage.ClearFavoriteIcons): void
  (type: SVGReceiveMessage.GetFavoriteIcons): void
  (type: SVGReceiveMessage.InitDefaultExpandedIcons): void
  (type: SVGReceiveMessage.ToggleExpandIcon, data: boolean): void
  (type: SVGReceiveMessage.InitDefaultOpenDevTools): void
  (type: SVGReceiveMessage.GetExtensionTheme): void
}
