import { Box, Button, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { dropZoneClasses } from './DropZone.classes'
import { BoxDropZone } from './DropZone.style'

import { BackdropZone } from '@/core/components/Backdrop/BackdropZone'
import { useLoadFiles } from '@/core/hooks/useLoadFiles'
import { setRenderPath } from '@/store/features/GlobalSlice'

const DropZone = () => {
  const { t } = useTranslation(undefined, { keyPrefix: 'DropZone' })

  const { files, handleOpenDialog, onDrop } = useLoadFiles()
  const dispatch = useDispatch()

  useEffect(() => {
    if (files.length > 0) {
      dispatch(setRenderPath({ path: '/upload', options: { state: { files } } }))
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
            variant='contained'
            onClick={handleOpenDialog}
            className={dropZoneClasses.button}
          >
            {t('Select files')}
          </Button>
          <Typography textAlign='center' className={dropZoneClasses.text}>
            {t('or drop the files here')}
          </Typography>
        </Box>
      </Box>
      <BackdropZone onFiles={onDrop} />
    </BoxDropZone>
  )
}

export default DropZone
