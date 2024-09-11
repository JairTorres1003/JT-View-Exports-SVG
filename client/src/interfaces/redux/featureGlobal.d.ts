import { type CaseReducer, type PayloadAction } from '@reduxjs/toolkit'

export interface GlobalState {
  copy: {
    content: React.ReactNode
    show: boolean
  }
}

export interface GlobalReducers {
  /**
   * Set the copy to be displayed in the Copy component.
   */
  setCopy: CaseReducer<GlobalState, PayloadAction<GlobalState['copy']>>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: CaseReducer<GlobalState, PayloadAction<any>>
}
