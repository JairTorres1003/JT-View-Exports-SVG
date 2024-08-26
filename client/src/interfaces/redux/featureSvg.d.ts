import { type CaseReducer, type PayloadAction } from '@reduxjs/toolkit'

export interface SVGState {}

export interface SVGReducers {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: CaseReducer<SVGState, PayloadAction<any>>
}
