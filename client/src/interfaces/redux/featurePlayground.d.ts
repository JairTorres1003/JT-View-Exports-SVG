import { SVGComponent } from '@api/interfaces/ViewExportsSVG'
import { AlertProps, SnackbarOrigin } from '@mui/material'
import { type CaseReducer, type PayloadAction } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

export interface PlaygroundState {
  recentlySelected?: SVGComponent
}

export interface PlaygroundReducers {
  /**
   * Set the recently selected component to the state.
   */
  setRecentlySelected: CaseReducer<PlaygroundState, PayloadAction<SVGComponent | undefined>>

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: CaseReducer<PlaygroundState, PayloadAction<any>>
}
