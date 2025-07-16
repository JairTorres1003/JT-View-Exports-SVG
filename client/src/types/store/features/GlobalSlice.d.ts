import type { SVGComponent } from '@api/types/ViewExportsSVG'
import type { AlertProps, SnackbarOrigin } from '@mui/material'
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import type { CSSProperties, ReactNode } from 'react'
import type { NavigateOptions } from 'react-router-dom'

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
    /**
     * Whether to show the close button on the alert.
     * @default false
     */
    showCloseButton?: boolean
    maxWidth?: CSSProperties['maxWidth']
  }
  configuration: {
    /**
     * The default expand all setting.
     * @default false
     */
    defaultExpandAll: boolean
    /**
     * The default click to open dev tools setting.
     * @default true
     */
    defaultClicToOpenDevTools: boolean
    /**
     * The initial render path for the SVG component.
     * @default '/'
     */
    renderPath: string
    /**
     * Whether to show recent icons.
     * @default true
     */
    showRecentIcons: boolean
  }
  renderOptions?: NavigateOptions
}

export interface GlobalReducers {
  /**
   * Open the alert with the specified content and options.
   */
  openAlert: CaseReducer<GlobalState, PayloadAction<Omit<GlobalState['snackbarAlert'], 'open'>>>
  /**
   * Close the alert.
   */
  closeAlert: CaseReducer<GlobalState>
  /**
   * Set the configuration property.
   */
  setConfiguration: CaseReducer<GlobalState, PayloadAction<Partial<GlobalState['configuration']>>>

  /**
   * Set render path for the SVG component.
   */
  setRenderPath: CaseReducer<
    GlobalState,
    PayloadAction<{ path: string; options?: NavigateOptions }>
  >

  [key: string]: CaseReducer<GlobalState, PayloadAction<any>>
}
