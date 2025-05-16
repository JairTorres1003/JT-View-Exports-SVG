import { GlobalState } from './features/GlobalSlice'
import { PlaygroundState } from './features/PlaygroundSlice'
import { SVGState } from './features/SvgSlice'
import { VsCodeState } from './features/VsCodeSlice'

export interface RootStoreState {
  svg: SVGState
  vsCode: VsCodeState
  global: GlobalState
  playground: PlaygroundState
}
