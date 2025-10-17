/// <reference types="vite/client" />

import type { UseSelector as ReduxSelector } from 'react-redux'
import 'react'

import type { RootStoreState } from './types/store/store'

export declare module 'react-redux' {
  declare const useSelector: ReduxSelector<RootStoreState>

  interface UseSelector extends ReduxSelector<RootStoreState> {}
}

type CSSPropertiesWithVars = Record<`--${string}`, string | number | undefined>

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
        _DEFAULT_CLIC_TO_OPEN_DEV_TOOLS: boolean
        _INITIAL_RENDER_PATH: string
        _RECENT_ICONS_SHOW: boolean
        _LANGUAGE: string
      }
    }
  }
}
