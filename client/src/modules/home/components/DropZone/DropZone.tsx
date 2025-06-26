import { Box, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { dropZoneClasses } from './DropZone.classes'
import { BoxDropZone } from './DropZone.style'

import { BackdropZone } from '@/core/components/Backdrop/BackdropZone'

const DropZone = () => {
  const { t } = useTranslation(undefined, { keyPrefix: 'DropZone' })

  return (
    <BoxDropZone>
      <Box className={dropZoneClasses.border}>
        <Box className={dropZoneClasses.content}>
          <Typography variant='h1' className={dropZoneClasses.title} textAlign='center'>
            {t('title')}
          </Typography>
          <Button fullWidth size='large' variant='outlined' className={dropZoneClasses.button}>
            {t('Select files')}
          </Button>
          <Typography className={dropZoneClasses.text}>{t('or drop the files here')}</Typography>
        </Box>
      </Box>
      <BackdropZone />
    </BoxDropZone>
  )
}

export default DropZone
