import { type SVGFile, type SVGIcon, type SVGPlayground } from '../ViewExportsSVG'

import { type OpenFile } from './content'

import { type SVGReceiveMessage } from '@/enum/ViewExportsSVG'

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
  | { type: SVGReceiveMessage.GetVsCodeStyles }
  | { type: SVGReceiveMessage.AddRecentIcon; data: SVGIcon }
  | { type: SVGReceiveMessage.RemoveRecentIcon; data: SVGIcon }
  | { type: SVGReceiveMessage.GetRecentIcons }
  | { type: SVGReceiveMessage.ClearRecentIcons }
  | { type: SVGReceiveMessage.AddFavoriteIcon; data: SVGIcon }
  | { type: SVGReceiveMessage.RemoveFavoriteIcon; data: SVGIcon }
  | { type: SVGReceiveMessage.ClearFavoriteIcons }
  | { type: SVGReceiveMessage.GetFavoriteIcons }
  | { type: SVGReceiveMessage.InitDefaultExpandedIcons }
  | { type: SVGReceiveMessage.ToggleExpandIcon; data: boolean }

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
  /**
   * Adds the recent icon to the list.
   */
  [SVGReceiveMessage.AddRecentIcon]: (icon: SVGIcon) => void
  /**
   * Removes the recent icon from the list.
   */
  [SVGReceiveMessage.RemoveRecentIcon]: (icon: SVGIcon) => void
  /**
   * Gets the recent icons.
   */
  [SVGReceiveMessage.GetRecentIcons]: () => void
  /**
   * Clears the recent icons.
   */
  [SVGReceiveMessage.ClearRecentIcons]: () => void
  /**
   * Adds the favorite icon to the list.
   */
  [SVGReceiveMessage.AddFavoriteIcon]: (icon: SVGIcon) => void
  /**
   * Removes the favorite icon from the list.
   */
  [SVGReceiveMessage.RemoveFavoriteIcon]: (icon: SVGIcon) => void
  /**
   * Clears the favorite icons.
   */
  [SVGReceiveMessage.ClearFavoriteIcons]: () => void
  /**
   * Gets the favorite icons.
   */
  [SVGReceiveMessage.GetFavoriteIcons]: () => void
  /**
   * Initializes the default expanded icons.
   */
  [SVGReceiveMessage.InitDefaultExpandedIcons]: () => void
  /**
   * Toggles the expand icon.
   * @param isExpanded - A boolean indicating whether the icons should be expanded.
   */
  [SVGReceiveMessage.ToggleExpandIcon]: (isExpanded: boolean) => void
}
