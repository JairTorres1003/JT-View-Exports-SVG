/**
 * Post message types (Extension → Webview)
 * Messages sent from the extension to the webview
 */
export const SVGPostMessage = {
  // root message types
  Navigate: 'send/navigate',

  // UI-related messages
  LoadComponents: 'send/load-components',
  LoadUserComponents: 'send/load-user-components',
  FilterComponents: 'send/filter-components',
  OnErrorComponents: 'send/error-components',
  OnReloadComponent: 'send/reload-component',
  ToggleExpandAllComponents: 'send/toggle-expand-all-components',

  // SVG-related messages
  SendSVGPlayground: 'send/svg/playground',
  SendPlaygroundError: 'send/svg/playground-error',

  // Assets-related messages
  SendAssetsPath: 'send/assets/paths',

  // Settings-related messages
  SendRunLoading: 'send/settings/run-loading',
  SendTheme: 'send/settings/theme',
  SendEditorConfig: 'send/settings/editor-config',
  SendVsCodeStyles: 'send/settings/vscode-styles',
  SendToggleOpenDevTools: 'send/settings/toggle-open-dev-tools',
  SendExtensionTheme: 'send/settings/extension-theme',
  SendUpdateConfiguration: 'send/update-configuration',
  SendReloadWebview: 'send/reload-webview',

  // Scan-related messages
  SendLastScanDate: 'send/scan/last-date',

  // File-related messages
  SendOpenFiles: 'send/file/open',
} as const

/**
 * Type representing possible post message values
 */
export type SVGPostMessage = (typeof SVGPostMessage)[keyof typeof SVGPostMessage]

/**
 * Receive message types (Webview → Extension)
 * Messages sent from the webview to the extension
 */
export const SVGReceiveMessage = {
  // root message types
  Ready: 'ready',
  ChangeViewPath: 'navigate/change-path',

  // UI-related messages
  RequestComponents: 'ui/request-components',
  RequestUserComponents: 'ui/request-user-components',
  SearchComponents: 'ui/search-components',
  ReloadComponent: 'ui/reload-component',
  IsExpandComponents: 'ui/is-expand-components',

  // SVG-related messages
  ExtractSVGComponentFromFiles: 'svg/extract-components-from-files',
  PlaygroundSVGComponents: 'svg/playground-component',

  // Assets-related messages
  GetAssetsPath: 'assets/paths',
  RemoveAssets: 'assets/remove',
  GetViewAssets: 'assets/views',

  // Settings-related messages
  GetTheme: 'settings/theme',
  GetEditorConfig: 'settings/editor-config',
  GetVsCodeStyles: 'settings/vscode-styles',
  ToggleOpenDevTools: 'settings/toggle-open-dev-tools',
  GetExtensionTheme: 'settings/extension-theme',
  ReloadExtensionTheme: 'settings/reload-extension-theme',

  // Scan-related messages
  GetLastScanDate: 'scan/last-date',
  ScanWorkspace: 'scan/workspace',

  // File-related messages
  OpenFile: 'file/open',
  RequestFileOpen: 'file/request-open',
  CreateTempFiles: 'file/create-temp',

  // Icons-related messages
  AddRecentIcon: 'icons/recent/add',
  RemoveRecentIcon: 'icons/recent/remove',
  ClearRecentIcons: 'icons/recent/clear',
  AddFavoriteIcon: 'icons/favorite/add',
  RemoveFavoriteIcon: 'icons/favorite/remove',
  ClearFavoriteIcons: 'icons/favorite/clear',
} as const

/**
 * Type representing possible receive message values
 */
export type SVGReceiveMessage = (typeof SVGReceiveMessage)[keyof typeof SVGReceiveMessage]
