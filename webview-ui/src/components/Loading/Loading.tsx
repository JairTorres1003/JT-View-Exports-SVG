import { Backdrop, Box, CircularProgress, Typography } from '@mui/material'
import { type FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

import { BoxLoad } from './Loading.style'

export const Loading: FunctionComponent = () => {
  const { t } = useTranslation()

  return (
    <Box>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
        <BoxLoad>
          <CircularProgress color='inherit' />
          <Typography>{t('progressTitle')}</Typography>
        </BoxLoad>
      </Backdrop>
    </Box>
  )
}
