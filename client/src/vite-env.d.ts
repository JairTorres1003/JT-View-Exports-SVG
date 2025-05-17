/// <reference types="vite/client" />

import type { UseSelector as ReduxSelector } from 'react-redux'
import 'react'

import type { RootStoreState } from './types/store/store'

export declare module 'react-redux' {
  declare const useSelector: ReduxSelector<RootStoreState>

  interface UseSelector extends ReduxSelector<RootStoreState> {}
}

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined
  }
}

declare global {
  interface Window {
    ViewExportsSVG: {
      name: string
      initConfiguration: {
        _DEFAULT_EXPAND_ALL: boolean
        _DEFAULT_CLIC_TO_OPEN_DEV_TOOLS: boolean
      }
    }
  }
}
