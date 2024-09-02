import { VsCodeStyles } from '@api/interfaces/vscode'
import { type CaseReducer, type PayloadAction } from '@reduxjs/toolkit'

export interface VsCodeState {
  styles: Partial<VsCodeStyles>
}

export interface VsCodeReducers {
  setVsCodeStyles: CaseReducer<VsCodeState, PayloadAction<VsCodeStyles>>

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: CaseReducer<VsCodeState, PayloadAction<any>>
}
