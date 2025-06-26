import { Box, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { dropZoneClasses } from './DropZone.classes'
import { BoxDropZone } from './DropZone.style'

import { BackdropZone } from '@/core/components/Backdrop/BackdropZone'

const DropZone = () => {
  const { t } = useTranslation(undefined, { keyPrefix: 'DropZone' })

  const navigate = useNavigate()

  const onNavigate = (eventType: string) => (files: File[] | string) => {
    void navigate('/upload', { state: { files, eventType } })
  }

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
      <BackdropZone
        onFiles={onNavigate('onFiles')}
        onText={onNavigate('onText')}
        onUri={onNavigate('onUri')}
      />
    </BoxDropZone>
  )
}

export default DropZone
