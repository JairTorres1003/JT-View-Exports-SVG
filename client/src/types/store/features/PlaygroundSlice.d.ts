import { SVGComponent } from '@api/types/ViewExportsSVG'
import { AlertProps, SnackbarOrigin } from '@mui/material'
import { type CaseReducer, type PayloadAction } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

export interface PlaygroundState {
  recentlySelected?: SVGComponent
  isOpenDevTools: boolean
  isInitialized: Record<string, boolean>
}

export interface PlaygroundReducers {
  /**
   * Set the recently selected component to the state.
   */
  setRecentlySelected: CaseReducer<PlaygroundState, PayloadAction<SVGComponent | undefined>>
  /**
   * Toggles the visibility of the developer tools panel.
   */
  setIsOpenDevTools: CaseReducer<PlaygroundState, PayloadAction<boolean>>

  /**
   * Sets the identifier of the initialized editor.
   */
  setInitializedEditor: CaseReducer<PlaygroundState, PayloadAction<string>>

  [key: string]: CaseReducer<PlaygroundState, PayloadAction<any>>
}
