import { Badge, Button, IconButton, Stack, Tooltip } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { IconAdd, IconSortAsc, IconSortDesc } from '@/assets/icons/functionalities'
import { BackdropZone } from '@/core/components/Backdrop/BackdropZone'
import { FileList } from '@/modules/upload/components/FileList'
import { useUpload } from '@/modules/upload/hooks/useUpload'

const UploadPage: React.FC = () => {
  const { files, removeFile, handleOpenDialog, sorted, onSortFiles, onExtractComponents, onDrop } =
    useUpload()
  const { t } = useTranslation()

  return (
    <Stack direction='row' height='100%' overflow='hidden' gap={2}>
      <Stack gap={2} height='100%' overflow='hidden' width='100%'>
        <FileList files={files} onRemoveFile={removeFile} />

        <Button
          fullWidth
          onClick={onExtractComponents}
          disabled={files.length === 0}
          variant={files.length === 0 ? 'outlined' : 'contained'}
          sx={{ maxWidth: 224, mx: 'auto', mb: 1 }}
        >
          {t('labels.ExtractComponents')}
        </Button>
      </Stack>

      <Stack p='24px 16px 24px 0' gap={2}>
        <Tooltip title={t('labels.AddMoreFiles')} placement='left'>
          <Badge badgeContent={files.length} overlap='circular'>
            <IconButton
              onClick={handleOpenDialog}
              aria-label={t(`labels.FilesLoaded${files.length > 1 ? '2' : ''}`, {
                count: files.length,
              })}
            >
              <IconAdd size={26} />
            </IconButton>
          </Badge>
        </Tooltip>

        {files.length > 1 && (
          <Tooltip title={t('labels.SortFilesByName')} placement='left'>
            <IconButton onClick={onSortFiles(sorted === 'asc' ? 'desc' : 'asc')}>
              {sorted === 'asc' ? <IconSortAsc size={26} /> : <IconSortDesc size={26} />}
            </IconButton>
          </Tooltip>
        )}
      </Stack>

      <BackdropZone onFiles={onDrop} />
    </Stack>
  )
}

export default UploadPage
