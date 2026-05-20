import { Card, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import IconAnyFile from '@/assets/icons/files/any'
import IconFileJS from '@/assets/icons/files/js'
import IconFileReact from '@/assets/icons/files/react'
import IconFileReactTS from '@/assets/icons/files/react-ts'
import IconFileTS from '@/assets/icons/files/ts'
import IconClose from '@/assets/icons/functionalities/close'
import IconEmptyBox from '@/assets/icons/indicators/empty-box'
import type { IconBaseProps } from '@/types/BaseProps'
import type { IFile } from '@/types/misc'

import { fileListClasses } from './FileList.classes'
import { BoxFileList } from './FileList.style'

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

export const FileList: React.FC<FileListProps> = ({ files, onRemoveFile = () => null }) => {
  const { t } = useTranslation(['upload', 'home'])

  if (files.length === 0) {
    return (
      <BoxFileList>
        <Stack sx={{ height: '100%', gap: 2 }}>
          <Typography variant='h1' sx={{ textAlign: 'center', fontSize: 14, maxWidth: 440 }}>
            {t('drop-zone.title', { ns: 'home' })}
          </Typography>
          <Stack sx={{ alignItems: 'center', justifyContent: 'center', gap: 2, my: 'auto' }}>
            <IconEmptyBox size={200} sx={{ opacity: 0.5 }} />
            <Typography variant='body1' color='text.secondary' sx={{ textAlign: 'center' }}>
              {t('no-files-selected', { ns: 'upload' })}
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
            <Tooltip title={t('delete-this-file', { ns: 'upload' })} placement='top'>
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
              <Typography variant='body1' noWrap sx={{ width: '100%', zIndex: 1 }}>
                {file.name}
              </Typography>
            </Tooltip>
          </Card>
        )
      })}
    </BoxFileList>
  )
}
