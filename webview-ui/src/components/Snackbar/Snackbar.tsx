import { type FunctionComponent } from 'react'
import { Alert, Snackbar as MuiSnackbar, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { useSvg } from '../../provider/SvgProvider'

export const Snackbar: FunctionComponent = () => {
  const {
    state: { snackbar },
    dispatch,
  } = useSvg()
  const { t } = useTranslation()

  const onClose = () => {
    dispatch({ type: 'SNACKBAR', payload: { open: false, text: null } })
  }

  return (
    <MuiSnackbar
      key={snackbar.text}
      open={snackbar.open}
      autoHideDuration={2000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert severity='success'>
        <Typography fontSize={12}>
          {`${t('Copied')} ${snackbar.text && `'${snackbar.text}' `}${t('ToClipboard')}`}
        </Typography>
      </Alert>
    </MuiSnackbar>
  )
}
