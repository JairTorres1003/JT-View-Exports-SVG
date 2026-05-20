import type { GlobalState } from './global'
import type { PlaygroundState } from './playground'
import type { SVGState } from './svg'
import type { VsCodeState } from './vsCode'

export interface RootStoreState {
  svg: SVGState
  vsCode: VsCodeState
  global: GlobalState
  playground: PlaygroundState
}
