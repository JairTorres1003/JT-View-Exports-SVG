import { Badge, Button, IconButton, Stack, Tooltip } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

// import { BackdropZone } from '@/core/components/Backdrop/BackdropZone'
import { IconAdd, IconSortAsc, IconSortDesc } from '@/assets/icons/functionalities'
import { FileList } from '@/modules/upload/components/FileList'
import { useUpload } from '@/modules/upload/hooks/useUpload'

const UploadPage: React.FC = () => {
  const { files, removeFile, handleOpenDialog, sorted, onSortFiles } = useUpload()
  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  return (
    <Stack height='100%' overflow='hidden' gap={2}>
      <Stack direction='row' gap={2} height='100%' overflow='hidden'>
        <FileList files={files} onRemoveFile={removeFile} />
        <Stack p='24px 8px 24px 0' gap={2}>
          <Tooltip title={t('AddMoreFiles')} placement='left'>
            <Badge badgeContent={files.length} overlap='circular'>
              <IconButton onClick={handleOpenDialog}>
                <IconAdd size={26} />
              </IconButton>
            </Badge>
          </Tooltip>
          {files.length > 1 && (
            <Tooltip title={t('SortFilesByName')} placement='left'>
              <IconButton onClick={onSortFiles(sorted === 'asc' ? 'desc' : 'asc')}>
                {sorted === 'asc' ? <IconSortAsc size={26} /> : <IconSortDesc size={26} />}
              </IconButton>
            </Tooltip>
          )}
        </Stack>
      </Stack>
      <Button
        fullWidth
        size='large'
        disabled={files.length === 0}
        sx={{ maxWidth: 224, mx: 'auto' }}
      >
        {t('ExtractComponents')}
      </Button>
      {/* <BackdropZone /> */}
    </Stack>
  )
}

export default UploadPage
