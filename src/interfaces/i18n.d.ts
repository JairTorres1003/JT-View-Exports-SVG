export interface Translations {
  extensionTitle: string
  iconExtractionInProgress: string
  noIconsFound: string
  noFileSelected: string
  searchMinChars: string
  noExistedFile: `${string}{file}${string}`
  errorSettingWebviewMessageListener: string
  invalidSvgTag: `${string}{tag}`
  declarationNotFound: `${string}{name}${string}{file}`
  svgFileNotFound: `${string}{file}${string}`
  svgComponentNotFoundFile: `${string}{name}${string}{file}`
  errorExtractingSVGComponent: `${string}{name}`
  invalidAttribute: `${string}{attr}${string}{expected}${string}{actual}`
  errorScanningWorkspace: string
  errorScanningFiles: string
  errorOpeningFile: `${string}{file}${string}`
  errorSavingCache: string
  errorLoadingCache: string
  'CacheManager has not been initialized': string
}

type ExtractKeys<T extends string> = T extends `${string}{${infer Key}}${infer Rest}`
  ? Key | ExtractKeys<Rest>
  : never

type TranslationOptions<K extends keyof Translations> = {
  [P in ExtractKeys<Translations[K]>]: string
}
