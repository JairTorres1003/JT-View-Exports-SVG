import { Box, Tooltip, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { BoxDevTools } from './DevTools.style'

export const DevTools = (): React.ReactNode => {
  const { t } = useTranslation(undefined, { keyPrefix: 'DevTools' })

  return (
    <BoxDevTools id='BoxDevTools'>
      <Box className='BoxDevTools__header'>
        <Tooltip title={t('title')}>
          <Typography variant='h2'>{t('title')}</Typography>
        </Tooltip>
        <Box id='BoxDevTools-buttonClose' />
      </Box>
    </BoxDevTools>
  )
}
