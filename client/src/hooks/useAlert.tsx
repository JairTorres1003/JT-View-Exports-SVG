import { type SlideProps, type SnackbarOrigin } from '@mui/material'
import { type ReactNode } from 'react'
import { useDispatch } from 'react-redux'

import { type GlobalState } from '@/interfaces/redux/featureGlobal'
import { setAlert } from '@/providers/redux/features/GlobalSlice'

interface AlertHook {
  onOpen: (
    content: ReactNode,
    options?: Omit<GlobalState['snackbarAlert'], 'open' | 'content'>
  ) => void
  onClose: () => void
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
    dispatch(setAlert({ ...options, open: true, content }))
  }

  /**
   * Closes the alert.
   */
  const onClose: AlertHook['onClose'] = (): void => {
    dispatch(setAlert({ open: false, content: '' }))
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
