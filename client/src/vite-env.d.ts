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
    /**
     * The name of the view.
     */
    ViewExportsSVG?: string
  }
}
