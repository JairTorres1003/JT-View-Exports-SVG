import type { UseSelector as ReduxSelector } from 'react-redux'

import { SVGState } from './featureSvg'
import { VsCodeState } from './featureVsCode'
import { GlobalState } from './featureGlobal'
import { PlaygroundState } from './featurePlayground'

export interface RootStoreState {
  svg: SVGState
  vsCode: VsCodeState
  global: GlobalState
  playground: PlaygroundState
}

export declare module 'react-redux' {
  declare const useSelector: ReduxSelector<RootStoreState>

  interface UseSelector extends ReduxSelector<RootStoreState> {}
}
