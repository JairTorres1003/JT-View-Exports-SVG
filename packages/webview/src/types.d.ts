import 'react'

type CSSPropertiesWithVars = Record<`--${string}`, string | number | undefined>

declare module '*.css'

declare module 'react' {
  interface CSSProperties extends CSSPropertiesWithVars {}
}

declare global {
  const __APP_NAME: string
  const __APP_PUBLISHER: string
  const __APP_VERSION: string

  interface Window {
    ViewExportsSVG: {
      name: string
      initConfiguration: {
        _DEFAULT_EXPAND_ALL: boolean
        _DEFAULT_CLICK_TO_OPEN_DEV_TOOLS: boolean
        _RECENT_ICONS_SHOW: boolean
        _LANGUAGE: string
      }
    }
  }
}
