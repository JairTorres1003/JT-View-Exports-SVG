import { Card, IconButton, Tooltip, Typography } from '@mui/material'
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
import type { IconBaseProps } from '@/types/BaseProps'
import type { IMakeupFile } from '@/types/misc'

interface FileListProps {
  files: IMakeupFile[]
  onRemoveFile?: (file: IMakeupFile) => void
}

const fileIconTypes: Record<string, React.FC<IconBaseProps>> = {
  jsx: IconFileReact,
  tsx: IconFileReactTS,
  js: IconFileJS,
  ts: IconFileTS,
}

export const FileList: FC<FileListProps> = ({ files, onRemoveFile = () => null }) => {
  const { t } = useTranslation()

  if (files.length === 0) return null

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
              <Typography variant='body1' noWrap width='100%'>
                {file.name}
              </Typography>
            </Tooltip>
          </Card>
        )
      })}
    </BoxFileList>
  )
}
