import { Box, Button, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { dropZoneClasses } from './DropZone.classes'
import { BoxDropZone } from './DropZone.style'

// import { BackdropZone } from '@/core/components/Backdrop/BackdropZone'
import { useLoadFiles } from '@/core/hooks/useLoadFiles'

const DropZone = () => {
  const { t } = useTranslation(undefined, { keyPrefix: 'DropZone' })

  const { files, handleOpenDialog } = useLoadFiles()
  const navigate = useNavigate()

  useEffect(() => {
    if (files.length > 0) {
      void navigate('/upload', { state: { files } })
    }
  }, [files])

  return (
    <BoxDropZone>
      <Box className={dropZoneClasses.border}>
        <Box className={dropZoneClasses.content}>
          <Typography variant='h1' className={dropZoneClasses.title} textAlign='center'>
            {t('title')}
          </Typography>
          <Button
            fullWidth
            size='large'
            onClick={handleOpenDialog}
            className={dropZoneClasses.button}
          >
            {t('Select files')}
          </Button>
          <Typography className={dropZoneClasses.text}>{t('or drop the files here')}</Typography>
        </Box>
      </Box>
      {/* <BackdropZone /> */}
    </BoxDropZone>
  )
}

export default DropZone
