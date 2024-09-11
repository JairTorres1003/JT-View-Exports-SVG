import { type PersistConfig } from 'redux-persist'
import { SVGState } from './featureSvg'
import { VsCodeState } from './featureVsCode'
import { GlobalState } from './featureGlobal'

export interface RootStoreState {
  svg: SVGState
  vsCode: VsCodeState
  global: GlobalState
}

export interface ReduxState<T extends boolean = boolean> {}
