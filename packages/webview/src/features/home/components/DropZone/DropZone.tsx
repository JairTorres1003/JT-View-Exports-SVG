import { pathnames } from '@jt-view-exports-svg/core'
import { Box, Button, Typography } from '@mui/material'
import { lazy, Suspense, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { useLoadFiles } from '@/core/hooks/useLoadFiles'
import { setRenderPath } from '@/store/features/GlobalSlice'

import { dropZoneClasses } from './DropZone.classes'
import { BoxDropZone } from './DropZone.style'

const BackdropZone = lazy(() => import('@/core/components/Backdrop/BackdropZone'))

const DropZone = () => {
  const { t } = useTranslation(undefined, { keyPrefix: 'DropZone' })

  const { files, handleOpenDialog, onDrop, onUri } = useLoadFiles()
  const dispatch = useDispatch()

  useEffect(() => {
    if (files.length > 0) {
      dispatch(setRenderPath({ path: pathnames.upload, options: { state: { files } } }))
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
      <Suspense fallback={null}>
        <BackdropZone onFiles={onDrop} onUri={onUri} />
      </Suspense>
    </BoxDropZone>
  )
}

export default DropZone
