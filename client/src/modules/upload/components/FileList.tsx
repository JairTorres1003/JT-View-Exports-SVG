import { Card, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { fileListClasses } from './FileList.classes'
import { BoxFileList } from './FileList.style'

import {
  IconAnyFile,
  IconFileJS,
  IconFileReact,
  IconFileReactTS,
  IconFileTS,
} from '@/assets/icons/files'
import { IconClose } from '@/assets/icons/functionalities'
import { IconEmptyBox } from '@/assets/icons/indicators'
import type { IconBaseProps } from '@/types/BaseProps'
import type { IFile } from '@/types/misc'

interface FileListProps {
  files: IFile[]
  onRemoveFile?: (file: IFile) => void
}

const fileIconTypes: Record<string, React.FC<IconBaseProps>> = {
  jsx: IconFileReact,
  tsx: IconFileReactTS,
  js: IconFileJS,
  ts: IconFileTS,
}

export const FileList: FC<FileListProps> = ({ files, onRemoveFile = () => null }) => {
  const { t } = useTranslation()

  if (files.length === 0) {
    return (
      <BoxFileList>
        <Stack height='100%' gap={2}>
          <Typography variant='h1' textAlign='center' fontSize={14} maxWidth={440}>
            {t('DropZone.title')}
          </Typography>
          <Stack alignItems='center' justifyContent='center' gap={2} my='auto'>
            <IconEmptyBox size={200} sx={{ opacity: 0.5 }} />
            <Typography variant='body1' textAlign='center' color='text.secondary'>
              {t('labels.NoFilesSelected')}
            </Typography>
          </Stack>
        </Stack>
      </BoxFileList>
    )
  }

  return (
    <BoxFileList>
      {files.map((file) => {
        const IconFileComponent = fileIconTypes[file.extension] ?? IconAnyFile

        return (
          <Card key={file.name} className={fileListClasses.card}>
            <Tooltip title={t('labels.DeleteThisFile')} placement='top'>
              <IconButton
                className={fileListClasses.removeButton}
                size='small'
                onClick={() => {
                  onRemoveFile(file)
                }}
              >
                <IconClose size={16} />
              </IconButton>
            </Tooltip>
            <IconFileComponent size={80} />
            <Tooltip title={file.name} placement='top'>
              <Typography variant='body1' noWrap width='100%' zIndex={1}>
                {file.name}
              </Typography>
            </Tooltip>
          </Card>
        )
      })}
    </BoxFileList>
  )
}
