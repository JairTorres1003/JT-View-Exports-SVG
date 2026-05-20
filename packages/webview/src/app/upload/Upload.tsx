import { Badge, Button, IconButton, Stack, Tooltip } from '@mui/material'
import { lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'

import IconPlus from '@/assets/icons/functionalities/plus'
import IconSortAsc from '@/assets/icons/functionalities/sort-asc'
import IconSortDesc from '@/assets/icons/functionalities/sort-desc'
import { FileList } from '@/features/upload/components/FileList'
import { useUpload } from '@/features/upload/hooks/useUpload'

const BackdropZone = lazy(() => import('@/core/components/Backdrop/BackdropZone'))

const UploadPage: React.FC = () => {
  const {
    files,
    removeFile,
    handleOpenDialog,
    sorted,
    onSortFiles,
    onExtractComponents,
    onDrop,
    onUri,
  } = useUpload()
  const { t } = useTranslation('upload')

  return (
    <Stack direction='row' sx={{ height: '100%', overflow: 'hidden', gap: 2 }}>
      <Stack sx={{ height: '100%', overflow: 'hidden', width: '100%', gap: 2 }}>
        <FileList files={files} onRemoveFile={removeFile} />

        <Button
          fullWidth
          onClick={onExtractComponents}
          disabled={files.length === 0}
          variant={files.length === 0 ? 'outlined' : 'contained'}
          sx={{ maxWidth: 224, mx: 'auto', mb: 1 }}
        >
          {t('extract-components')}
        </Button>
      </Stack>

      <Stack sx={{ gap: 2, p: '24px 16px 24px 0' }}>
        <Tooltip title={t('add-more-files')} placement='left'>
          <Badge badgeContent={files.length} overlap='circular'>
            <IconButton
              onClick={handleOpenDialog}
              aria-label={t('files-loaded', { count: files.length })}
            >
              <IconPlus size={26} />
            </IconButton>
          </Badge>
        </Tooltip>

        {files.length > 1 && (
          <Tooltip title={t('sort-files-by-name')} placement='left'>
            <IconButton
              onClick={onSortFiles(sorted === 'asc' ? 'desc' : 'asc')}
              aria-label={t(sorted === 'asc' ? 'sort-ascending' : 'sort-descending')}
            >
              {sorted === 'asc' ? <IconSortAsc size={26} /> : <IconSortDesc size={26} />}
            </IconButton>
          </Tooltip>
        )}
      </Stack>

      <Suspense fallback={null}>
        <BackdropZone onFiles={onDrop} onUri={onUri} />
      </Suspense>
    </Stack>
  )
}

export default UploadPage
