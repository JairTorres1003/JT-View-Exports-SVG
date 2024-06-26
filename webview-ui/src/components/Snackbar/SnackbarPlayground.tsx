import { Alert, Snackbar as MuiSnackbar, Typography } from '@mui/material'
import { type FC } from 'react'

import { useSvg } from '../../provider/SvgProvider'

export const Snackbar: FC = () => {
  const {
    state: { snackbarPlayground: snackbar },
    dispatch,
  } = useSvg()

  const onClose = (): void => {
    dispatch({ type: 'SNACKBAR_PLAYGROUND', payload: { open: false, text: null } })
  }

  return (
    <MuiSnackbar
      key={`${snackbar.text}-${new Date().getTime()}`}
      open={snackbar.open}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert severity={'error'} onClose={onClose}>
        <Typography fontSize={12}>{snackbar.text}</Typography>
      </Alert>
    </MuiSnackbar>
  )
}
