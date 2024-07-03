import { Backdrop, Box, CircularProgress, Typography } from '@mui/material'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useSvg } from '../../provider/SvgProvider'

import { BoxLoad } from './Loading.style'

export const Loading: FC = () => {
  const {
    state: { isScanning },
  } = useSvg()
  const { t } = useTranslation()

  return (
    <Box>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
        <BoxLoad>
          <CircularProgress color='inherit' />
          {!isScanning ? (
            <Typography>{t('progressTitle')}</Typography>
          ) : (
            <>
              <Typography>{t('processingScanWorkspace')}</Typography>
              <Typography>{t('processingScanWorkspaceDescription')}</Typography>
            </>
          )}
        </BoxLoad>
      </Backdrop>
    </Box>
  )
}
