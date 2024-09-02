import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import {
  SVGComponent,
  SVGErrors,
  SVGFile,
  SVGPlayground,
  ViewExportSVG,
} from '@api/interfaces/ViewExportsSVG'
import { AssetPath } from '@api/interfaces/views/ViewExportsSVGPanel'
import { ThemeMode } from '@api/interfaces/vscode'

/**
 * The message to receive from the webview.
 */
export interface MessageHandlersView {
  [SVGPostMessage.SendAssetsPath]?: (data: AssetPath) => void
  [SVGPostMessage.SendLanguage]?: (data: string) => void
  [SVGPostMessage.SendLastScanDate]?: (data: string) => void
  [SVGPostMessage.SendSVGComponents]?: (data: ViewExportSVG[]) => void
  [SVGPostMessage.SendSVGError]?: (data: SVGErrors) => void
  [SVGPostMessage.SendSVGFilteredComponents]?: (data: ViewExportSVG[]) => void
  [SVGPostMessage.SendSVGPlayground]?: (data: SVGComponent) => void
  [SVGPostMessage.SendPlaygroundError]?: (data: SVGErrors) => void
  [SVGPostMessage.SendTheme]?: (data: ThemeMode) => void
}

/**
 * The handler for receiving messages from the webview.
 */
export interface FuncOnMessage {
  (type: SVGPostMessage.SendAssetsPath, handler: (data: AssetPath) => void): void
  (type: SVGPostMessage.SendLanguage, handler: (data: string) => void): void
  (type: SVGPostMessage.SendLastScanDate, handler: (data: string) => void): void
  (type: SVGPostMessage.SendSVGComponents, handler: (data: ViewExportSVG[]) => void): void
  (type: SVGPostMessage.SendSVGError, handler: (data: SVGErrors) => void): void
  (type: SVGPostMessage.SendSVGFilteredComponents, handler: (data: ViewExportSVG[]) => void): void
  (type: SVGPostMessage.SendSVGPlayground, handler: (data: SVGComponent) => void): void
  (type: SVGPostMessage.SendPlaygroundError, handler: (data: SVGErrors) => void): void
  (type: SVGPostMessage.SendTheme, handler: (data: ThemeMode) => void): void
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
  (type: SVGReceiveMessage.OpenFile, data: OpenFile): void
  (type: SVGReceiveMessage.PlaygroundSVGComponents, data: SVGPlayground): void
  (type: SVGReceiveMessage.RemoveAssets, data: SVGFile[]): void
  (type: SVGReceiveMessage.ScanWorkspace): void
  (type: SVGReceiveMessage.SearchSVGComponents, data: string): void
}
