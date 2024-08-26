import { type PersistConfig } from 'redux-persist'
import { SVGState } from './featureSvg'
import { VsCodeState } from './featureVsCode'

export interface RootStoreState {
  svg: SVGState
  vsCode: VsCodeState
}

export interface ReduxState<T extends boolean = boolean> {}
