import { Box, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { dropZoneClasses } from './DropZone.classes'
import { BoxDropZone } from './DropZone.style'

import { BackdropZone } from '@/core/components/Backdrop/BackdropZone'
import { useLoadFiles } from '@/core/hooks/useLoadFiles'

const DropZone = () => {
  const { t } = useTranslation(undefined, { keyPrefix: 'DropZone' })

  const { loadFiles, handleSelectFiles } = useLoadFiles()
  const navigate = useNavigate()

  const onDropZone = (eventType: string) => (files: File[]) => {
    onNavigate(loadFiles(files), eventType)
  }

  const onNavigate = (files: File[], eventType: string) => {
    if (files.length > 0) void navigate('/upload', { state: { files, eventType } })
  }

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
            component='label'
            variant='outlined'
            className={dropZoneClasses.button}
            htmlFor='file-input'
          >
            {t('Select files')}
            <input
              hidden
              multiple
              id='file-input'
              type='file'
              style={{ display: 'none' }}
              accept='.js,.ts,.jsx,.tsx'
              onChange={(e) => {
                onNavigate(handleSelectFiles(e), 'onInput')
              }}
            />
          </Button>
          <Typography className={dropZoneClasses.text}>{t('or drop the files here')}</Typography>
        </Box>
      </Box>
      <BackdropZone onFiles={onDropZone('onFiles')} />
    </BoxDropZone>
  )
}

export default DropZone
