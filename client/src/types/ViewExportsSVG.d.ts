import type { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import type {
  SVGComponent,
  SVGErrors,
  SVGFile,
  SVGIcon,
  SVGPlayground,
  ViewExportSVG,
} from '@api/types/ViewExportsSVG'
import type { AssetPath, FileTemporary, OpenFile } from '@api/types/views/content'
import type { ExtensionManage, ThemeMode, VsCodeStyles } from '@api/types/vscode'

/**
 * The message to receive from the webview.
 */
export interface MessageHandlersView {
  [SVGPostMessage.SendAssetsPath]?: (data: AssetPath) => void
  [SVGPostMessage.SendLastScanDate]?: (data: string) => void
  [SVGPostMessage.SendPlaygroundError]?: (data: SVGErrors) => void
  [SVGPostMessage.SendRunLoading]?: (data: string) => void
  [SVGPostMessage.SendSVGComponents]?: (data: ViewExportSVG[]) => void
  [SVGPostMessage.SendRefreshSVGComponents]?: (data: ViewExportSVG[]) => void
  [SVGPostMessage.SendSVGError]?: (data: SVGErrors) => void
  [SVGPostMessage.SendSVGFilteredComponents]?: (data: ViewExportSVG[]) => void
  [SVGPostMessage.SendSVGPlayground]?: (data: SVGComponent) => void
  [SVGPostMessage.SendTheme]?: (data: ThemeMode) => void
  [SVGPostMessage.SendEditorConfig]?: (data: Record<string, unknown>) => void
  [SVGPostMessage.SendVsCodeStyles]?: (data: VsCodeStyles) => void
  [SVGPostMessage.SendHomeIcons]?: (data: ViewExportSVG[]) => void
  [SVGPostMessage.SendExpandAllIcons]?: (data: boolean) => void
  [SVGPostMessage.SendToggleOpenDevTools]?: (data: boolean) => void
  [SVGPostMessage.SendExtensionTheme]?: (data: ExtensionManage) => void
  [SVGPostMessage.SendUpdateConfiguration]?: (data: Record<string, unknown>) => void
  [SVGPostMessage.SendReloadWebview]?: (data: string) => void
  [SVGPostMessage.SendOpenFiles]?: (data: string[]) => void
}

/**
 * The handler for receiving messages from the webview.
 */
export interface FuncOnMessage {
  (type: SVGPostMessage.SendAssetsPath, handler: (data: AssetPath) => void): void
  (
    type:
      | SVGPostMessage.SendLastScanDate
      | SVGPostMessage.SendRunLoading
      | SVGPostMessage.SendReloadWebview,
    handler: (data: string) => void
  ): void
  (
    type: SVGPostMessage.SendPlaygroundError | SVGPostMessage.SendSVGError,
    handler: (data: SVGErrors) => void
  ): void
  (
    type:
      | SVGPostMessage.SendSVGComponents
      | SVGPostMessage.SendRefreshSVGComponents
      | SVGPostMessage.SendSVGFilteredComponents
      | SVGPostMessage.SendHomeIcons,
    handler: (data: ViewExportSVG[]) => void
  ): void
  (type: SVGPostMessage.SendSVGPlayground, handler: (data: SVGComponent) => void): void
  (type: SVGPostMessage.SendTheme, handler: (data: ThemeMode) => void): void
  (
    type: SVGPostMessage.SendEditorConfig | SVGPostMessage.SendUpdateConfiguration,
    handler: (data: Record<string, unknown>) => void
  ): void
  (type: SVGPostMessage.SendVsCodeStyles, handler: (data: VsCodeStyles) => void): void
  (
    type: SVGPostMessage.SendExpandAllIcons | SVGPostMessage.SendToggleOpenDevTools,
    handler: (data: boolean) => void
  ): void
  (type: SVGPostMessage.SendExtensionTheme, handler: (data: ExtensionManage) => void): void
  (type: SVGPostMessage.SendOpenFiles, handler: (data: string[]) => void): void
}

/**
 * The message to send to the webview.
 */
export interface FuncPostMessage {
  (type: SVGReceiveMessage.ExtractSVGComponentFromFiles, data: string[]): void
  (
    type:
      | SVGReceiveMessage.GetAssetsPath
      | SVGReceiveMessage.GetLastScanDate
      | SVGReceiveMessage.GetSVGComponents
      | SVGReceiveMessage.GetTheme
      | SVGReceiveMessage.GetEditorConfig
      | SVGReceiveMessage.GetVsCodeStyles
      | SVGReceiveMessage.RequestFileOpen
      | SVGReceiveMessage.ScanWorkspace
      | SVGReceiveMessage.ClearRecentIcons
      | SVGReceiveMessage.GetHomeIcons
      | SVGReceiveMessage.GetExtensionTheme
      | SVGReceiveMessage.ReloadExtensionTheme
      | SVGReceiveMessage.ClearFavoriteIcons
  ): void
  (
    type:
      | SVGReceiveMessage.GetViewAssets
      | SVGReceiveMessage.RefreshSVGComponents
      | SVGReceiveMessage.RemoveAssets,
    data: SVGFile[]
  ): void
  (type: SVGReceiveMessage.OpenFile, data: OpenFile): void
  (type: SVGReceiveMessage.CreateTempFiles, data: FileTemporary[]): void
  (type: SVGReceiveMessage.PlaygroundSVGComponents, data: SVGPlayground): void
  (
    type: SVGReceiveMessage.SearchSVGComponents | SVGReceiveMessage.ViewRenderPath,
    data: string
  ): void
  (
    type:
      | SVGReceiveMessage.AddRecentIcon
      | SVGReceiveMessage.RemoveRecentIcon
      | SVGReceiveMessage.AddFavoriteIcon
      | SVGReceiveMessage.RemoveFavoriteIcon,
    data: SVGIcon
  ): void
  (
    type: SVGReceiveMessage.ToggleExpandIcon | SVGReceiveMessage.ToggleOpenDevTools,
    data: boolean
  ): void
}
