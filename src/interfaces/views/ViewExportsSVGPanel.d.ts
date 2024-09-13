import { SVGPostMessage, SVGReceiveMessage } from '@/enum/ViewExportsSVG'
import {
  Position,
  SVGComponent,
  SVGErrors,
  SVGFile,
  SVGPlayground,
  ViewExportSVG,
} from '../ViewExportsSVG'
import { ThemeMode, VsCodeStyles } from '../vscode'

export interface OpenFile {
  file: SVGFile
  position?: Position
}

export interface AssetPath {
  workspace: SVGFile[]
  user: SVGFile[]
}

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
  | { type: SVGPostMessage.SendVsCodeStyles; data: VsCodeStyles }

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
   * Sends the Visual Studio Code styles to the webview.
   * @param data - The Visual Studio Code styles.
   */
  (type: SVGPostMessage.SendVsCodeStyles, data: VsCodeStyles): void
}

/**
 * The message to receive from the webview.
 */
export type ReceiveMessage =
  | { type: SVGReceiveMessage.ExtractSVGComponent; data: string[] }
  | { type: SVGReceiveMessage.GetAssetsPath }
  | { type: SVGReceiveMessage.GetLanguage }
  | { type: SVGReceiveMessage.GetLastScanDate }
  | { type: SVGReceiveMessage.GetSVGComponents }
  | { type: SVGReceiveMessage.GetTheme }
  | { type: SVGReceiveMessage.GetViewAssets; data: SVGFile[] }
  | { type: SVGReceiveMessage.OpenFile; data: OpenFile }
  | { type: SVGReceiveMessage.PlaygroundSVGComponents; data: SVGPlayground }
  | { type: SVGReceiveMessage.RemoveAssets; data: SVGFile[] }
  | { type: SVGReceiveMessage.ScanWorkspace }
  | { type: SVGReceiveMessage.SearchSVGComponents; data: string }

/**
 * The handler for receiving messages from the webview.
 */
export interface HandlerReceiveMessage {
  /**
   * Extracts the SVG component from the file.
   * @param files - The SVG file to extract the SVG component from.
   */
  [SVGReceiveMessage.ExtractSVGComponent]: (files: string[]) => void
  /**
   * Gets the assets path for the workspace and user.
   */
  [SVGReceiveMessage.GetAssetsPath]: () => void
  /**
   * Gets the language.
   */
  [SVGReceiveMessage.GetLanguage]: () => void
  /**
   * Gets the last scan date.
   */
  [SVGReceiveMessage.GetLastScanDate]: () => void
  /**
   * Gets the SVG components.
   */
  [SVGReceiveMessage.GetSVGComponents]: () => void
  /**
   * Gets the current theme.
   */
  [SVGReceiveMessage.GetTheme]: () => void
  /**
   * Gets the view assets.
   * @param files - The SVG files to display in the view.
   */
  [SVGReceiveMessage.GetViewAssets]: (files: SVGFile[]) => void
  /**
   * Opens the SVG file.
   * @param file - The SVG file to open.
   */
  [SVGReceiveMessage.OpenFile]: (file: OpenFile) => void
  /**
   * Sends the SVG components to the webview.
   * @param component - The SVG components to send.
   */
  [SVGReceiveMessage.PlaygroundSVGComponents]: (component: SVGPlayground) => void
  /**
   * Removes the assets from the workspace and user.
   * @param files - The SVG files to remove.
   */
  [SVGReceiveMessage.RemoveAssets]: (files: SVGFile[]) => void
  /**
   * Scans the workspace for SVG files.
   */
  [SVGReceiveMessage.ScanWorkspace]: () => void
  /**
   * Searches the SVG components.
   * @param query - The search query.
   */
  [SVGReceiveMessage.SearchSVGComponents]: (query: string) => void
  /**
   * Gets the Visual Studio Code styles.
   */
  [SVGReceiveMessage.GetVsCodeStyles]: () => void
}

export interface GetWebviewAssets {
  icon: string
  index: string
  styles: string
}
