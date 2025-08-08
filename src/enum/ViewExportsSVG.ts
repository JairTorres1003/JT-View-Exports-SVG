export enum SVGDeclaration {
  Function = 'function',
  Variable = 'variable',
}

export enum SVGPostMessage {
  SendSVGComponents = 'send/svg/components',
  SendSVGError = 'send/svg/error',
  SendRefreshSVGComponents = 'send/svg/refresh-components',
  SendSVGFilteredComponents = 'send/svg/filtered-components',
  SendSVGPlayground = 'send/svg/playground',
  SendPlaygroundError = 'send/svg/playground-error',

  SendAssetsPath = 'send/assets/paths',

  SendRunExtraction = 'send/svg/run-extraction',
  SendTheme = 'send/settings/theme',
  SendEditorConfig = 'send/settings/editor-config',
  SendVsCodeStyles = 'send/settings/vscode-styles',
  SendExpandAllIcons = 'send/settings/expand-all',
  SendToggleOpenDevTools = 'send/settings/toggle-open-dev-tools',
  SendExtensionTheme = 'send/settings/extension-theme',
  SendUpdateConfiguration = 'send/update-configuration',

  SendLastScanDate = 'send/scan/last-date',

  SendHomeIcons = 'send/icons/home',

  SendOpenFiles = 'send/file/open',
}

export enum SVGReceiveMessage {
  ExtractSVGComponentFromFiles = 'svg/extract-components-from-files',
  GetSVGComponents = 'svg/get-components',
  SearchSVGComponents = 'svg/search-components',
  PlaygroundSVGComponents = 'svg/playground-component',
  RefreshSVGComponents = 'svg/refresh-components',

  GetAssetsPath = 'assets/paths',
  RemoveAssets = 'assets/remove',
  GetViewAssets = 'assets/views',

  GetTheme = 'settings/theme',
  GetEditorConfig = 'settings/editor-config',
  GetVsCodeStyles = 'settings/vscode-styles',
  ToggleExpandIcon = 'settings/expand-all/toggle',
  ToggleOpenDevTools = 'settings/toggle-open-dev-tools',
  GetExtensionTheme = 'settings/extension-theme',
  ReloadExtensionTheme = 'settings/reload-extension-theme',

  GetLastScanDate = 'scan/last-date',
  ScanWorkspace = 'scan/workspace',

  OpenFile = 'file/open',
  RequestFileOpen = 'file/request-open',
  CreateTempFiles = 'file/create-temp',

  AddRecentIcon = 'icons/recent/add',
  RemoveRecentIcon = 'icons/recent/remove',
  ClearRecentIcons = 'icons/recent/clear',
  AddFavoriteIcon = 'icons/favorite/add',
  RemoveFavoriteIcon = 'icons/favorite/remove',
  ClearFavoriteIcons = 'icons/favorite/clear',
  GetHomeIcons = 'icons/home/get',

  ViewRenderPath = 'view/render-path/change',
}
