import type { GlobalState } from './features/GlobalSlice'
import type { PlaygroundState } from './features/PlaygroundSlice'
import type { SVGState } from './features/SvgSlice'
import type { VsCodeState } from './features/VsCodeSlice'

export interface RootStoreState {
  svg: SVGState
  vsCode: VsCodeState
  global: GlobalState
  playground: PlaygroundState
}
