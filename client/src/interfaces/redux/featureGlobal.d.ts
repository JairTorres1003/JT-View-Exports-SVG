import { AlertProps, SnackbarOrigin } from '@mui/material'
import { type CaseReducer, type PayloadAction } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

export interface GlobalState {
  snackbarAlert: {
    open: boolean
    /**
     * The content of the alert.
     */
    content: ReactNode
    /**
     * The action to display. It renders after the message, at the end of the alert.
     */
    action?: ReactNode
    /**
     * The icon to display. It renders before the message.
     */
    icon?: ReactNode
    /**
     * The duration in milliseconds after which the alert will be automatically dismissed.
     * @default 3000
     */
    duration?: number
    /**
     * The severity of the alert.
     * @default 'info'
     */
    severity?: AlertProps['severity']
    /**
     * The position of the alert.
     * @default { vertical: 'bottom', horizontal: 'center' }
     */
    position?: SnackbarOrigin
  }
}

export interface GlobalReducers {
  /**
   * Set the content of the alert.
   */
  setAlert: CaseReducer<GlobalState, PayloadAction<GlobalState['snackbarAlert']>>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: CaseReducer<GlobalState, PayloadAction<any>>
}
