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
