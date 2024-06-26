import { Alert, Snackbar as MuiSnackbar, Typography } from '@mui/material'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useSvg } from '../../provider/SvgProvider'
import { isEmpty } from '../../utilities/misc'

export const Snackbar: FC = () => {
  const {
    state: { snackbar },
    dispatch,
  } = useSvg()
  const { t } = useTranslation()

  const onClose = (): void => {
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
          {`${t('Copied')} ${!isEmpty(snackbar.text) && `'${snackbar.text}' `}${t('ToClipboard')}`}
        </Typography>
      </Alert>
    </MuiSnackbar>
  )
}
