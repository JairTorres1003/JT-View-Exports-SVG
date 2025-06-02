import { SVGComponent } from '@api/types/ViewExportsSVG'
import { AlertProps, SnackbarOrigin } from '@mui/material'
import { type CaseReducer, type PayloadAction } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

export interface PlaygroundState {
  recentlySelected?: SVGComponent
  isSelecting: boolean
}

export interface PlaygroundReducers {
  /**
   * Set the recently selected component to the state.
   */
  setRecentlySelected: CaseReducer<PlaygroundState, PayloadAction<SVGComponent | undefined>>
  /**
   * Set the state to indicate if the user is selecting a component.
   */
  setIsSelecting: CaseReducer<PlaygroundState, PayloadAction<boolean>>

  [key: string]: CaseReducer<PlaygroundState, PayloadAction<any>>
}
