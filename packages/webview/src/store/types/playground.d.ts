import type { SVGComponent } from '@jt-view-exports-svg/core'
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit'

export interface PlaygroundState {
  recentlySelected?: SVGComponent
  isOpenDevTools: boolean
}

export interface PlaygroundReducers {
  setRecentlySelected: CaseReducer<PlaygroundState, PayloadAction<SVGComponent | undefined>>
  setIsOpenDevTools: CaseReducer<PlaygroundState, PayloadAction<boolean>>
  [key: string]: CaseReducer<PlaygroundState, PayloadAction<any>>
}
