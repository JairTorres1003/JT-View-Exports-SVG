import { type CaseReducer, type PayloadAction } from '@reduxjs/toolkit'

export interface VsCodeState {}

export interface VsCodeReducers {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: CaseReducer<VsCodeState, PayloadAction<any>>
}
