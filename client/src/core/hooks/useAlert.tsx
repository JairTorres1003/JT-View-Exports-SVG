import type { SnackbarCloseReason, SlideProps, SnackbarOrigin } from '@mui/material'
import type { SyntheticEvent, ReactNode } from 'react'
import { useDispatch } from 'react-redux'

import type { GlobalState } from '@/interfaces/redux/featureGlobal'
import { closeAlert, openAlert } from '@/providers/redux/features/GlobalSlice'

interface AlertHook {
  onOpen: (
    content: ReactNode,
    options?: Omit<GlobalState['snackbarAlert'], 'open' | 'content'>
  ) => void
  onClose: (event: SyntheticEvent | Event, reason: SnackbarCloseReason) => void
  getTransitionDirection: (position?: SnackbarOrigin) => SlideProps['direction']
}

/**
 * Hook for managing alerts.
 *
 * @returns An object with functions to open and close alerts.
 */
export const useAlert = (): AlertHook => {
  const dispatch = useDispatch()

  /**
   * Opens an alert with the specified content and options.
   *
   * @param content - The content of the alert.
   * @param options - The options for the alert.
   */
  const onOpen: AlertHook['onOpen'] = (content, options): void => {
    dispatch(openAlert({ ...options, content }))
  }

  /**
   * Closes the alert.
   */
  const onClose: AlertHook['onClose'] = (_, reason): void => {
    if (reason === 'clickaway') {
      return
    }

    dispatch(closeAlert())
  }

  /**
   * Retrieves the transition direction based on the position of the Snackbar.
   * @param position - The position of the Snackbar.
   * @returns The direction of the transition.
   */
  const getTransitionDirection = (position?: SnackbarOrigin): SlideProps['direction'] => {
    if (position?.horizontal === 'center') {
      return position.vertical === 'top' ? 'down' : 'up'
    }

    return position?.horizontal === 'left' ? 'right' : 'left'
  }

  return {
    onOpen,
    onClose,
    getTransitionDirection,
  }
}
