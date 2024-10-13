export enum SVGDeclaration {
  Function = 'function',
  Variable = 'variable',
}

export enum SVGPostMessage {
  SendAssetsPath = 'send-assets-path',
  SendLanguage = 'send-language',
  SendLastScanDate = 'send-last-scan-date',
  SendPlaygroundError = 'send-playground-error',
  SendRunExtraction = 'send-run-extraction',
  SendSVGComponents = 'send-svg-components',
  SendSVGError = 'send-svg-error',
  SendSVGFilteredComponents = 'send-svg-filter',
  SendSVGPlayground = 'send-svg-playground',
  SendTheme = 'send-theme',
  SendVsCodeStyles = 'send-vscode-styles',
  SendRecentIcons = 'send-recent-icons',
  SendFavoriteIcons = 'send-favorite-icons',
}

export enum SVGReceiveMessage {
  ExtractSVGComponent = 'extract-svg-component',
  GetAssetsPath = 'get-assets-path',
  GetLanguage = 'get-language',
  GetLastScanDate = 'get-last-scan-date',
  GetSVGComponents = 'get-svg-components',
  GetTheme = 'get-theme',
  GetViewAssets = 'get-view-assets',
  GetVsCodeStyles = 'get-vscode-styles',
  OpenFile = 'open-file',
  PlaygroundSVGComponents = 'playground-svg-components',
  RemoveAssets = 'remove-assets',
  ScanWorkspace = 'scan-workspace',
  SearchSVGComponents = 'search-svg-components',
  AddRecentIcon = 'add-recent-icon',
  RemoveRecentIcon = 'remove-recent-icon',
  GetRecentIcons = 'get-recent-icons',
  ClearRecentIcons = 'clear-recent-icons',
  AddFavoriteIcon = 'add-favorite-icon',
  RemoveFavoriteIcon = 'remove-favorite-icon',
  ClearFavoriteIcons = 'clear-favorite-icons',
  GetFavoriteIcons = 'get-favorite-icons',
}
