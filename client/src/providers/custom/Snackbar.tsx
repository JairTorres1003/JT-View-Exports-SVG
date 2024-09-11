import { Alert, Slide, Snackbar } from '@mui/material'
import { Fragment, type FC } from 'react'

import { useAlert } from '@/hooks/useAlert'
import { type ProviderProps } from '@/interfaces/misc'
import { useSelector } from '@/providers/redux/store'

export const SnackbarProvider: FC<ProviderProps> = ({ children }): React.ReactNode => {
  const { content, duration, open, action, icon, position, severity } = useSelector(
    (state) => state.global.snackbarAlert
  )

  const { onClose, getTransitionDirection } = useAlert()

  return (
    <Fragment>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={duration}
        anchorOrigin={position}
        onClose={onClose}
        TransitionComponent={(props) => (
          <Slide {...props} direction={getTransitionDirection(position)} />
        )}
      >
        <Alert severity={severity} action={action} icon={icon}>
          {content}
        </Alert>
      </Snackbar>
    </Fragment>
  )
}
