import type { AlertProps, SnackbarOrigin } from '@mui/material'
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import type { CSSProperties, ReactNode } from 'react'
import type { NavigateOptions } from 'react-router-dom'

export interface SnackbarAlertState {
  open: boolean
  content: ReactNode
  action?: ReactNode
  icon?: ReactNode
  duration?: number
  severity?: AlertProps['severity']
  position?: SnackbarOrigin
  showCloseButton?: boolean
  maxWidth?: CSSProperties['maxWidth']
}

export interface GlobalConfigurationState {
  defaultExpandAll: boolean
  defaultClicToOpenDevTools: boolean
  renderPath: string
  showRecentIcons: boolean
}

export interface GlobalState {
  snackbarAlert: SnackbarAlertState
  configuration: GlobalConfigurationState
  renderOptions?: NavigateOptions
}

export interface GlobalReducers {
  openAlert: CaseReducer<GlobalState, PayloadAction<Omit<SnackbarAlertState, 'open'>>>
  closeAlert: CaseReducer<GlobalState>
  setConfiguration: CaseReducer<GlobalState, PayloadAction<Partial<GlobalConfigurationState>>>
  setRenderPath: CaseReducer<
    GlobalState,
    PayloadAction<{ path: string; options?: NavigateOptions }>
  >
  [key: string]: CaseReducer<GlobalState, PayloadAction<any>>
}
