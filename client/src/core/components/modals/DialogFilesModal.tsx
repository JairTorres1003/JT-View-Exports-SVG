import type { SVGFile, ViewExportSVG } from '@api/types/ViewExportsSVG'
import {
  ClickAwayListener,
  type DialogProps,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material'
import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { OpenFileButton } from '../Buttons/OpenFileButton'

import { DialogModal } from './DialogModal'

import { IconAnyFile, IconJS, IconReact, IconReactTS, IconTS } from '@/assets/icons/files'
import type { IconBaseProps } from '@/types/BaseProps'

interface DialogFilesModalProps extends DialogProps {
  files: SVGFile[]
  groupKind: ViewExportSVG['groupKind']
}

const iconTypes: Record<string, React.FC<Omit<IconBaseProps, 'color'>>> = {
  jsx: IconReact,
  tsx: IconReactTS,
  js: IconJS,
  ts: IconTS,
}

export const DialogFilesModal: FC<DialogFilesModalProps> = ({
  files,
  groupKind,
  onClose = () => null,
  ...dialogProps
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | false>(false)

  const { t } = useTranslation()

  /**
   * Handles keyboard navigation within the dialog.
   */
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      setSelectedIndex((prev) => (prev === false ? 0 : Math.min(prev + 1, files.length - 1)))
    } else if (event.key === 'ArrowUp') {
      setSelectedIndex((prev) => (prev === false ? 0 : Math.max(prev - 1, 0)))
    }
  }

  return (
    <DialogModal
      onClose={onClose}
      {...dialogProps}
      title={t('labels.ListOfAssociatedFilesFor', { name: groupKind.label?.split('/').pop() })}
    >
      <ClickAwayListener
        onClickAway={() => {
          setSelectedIndex(false)
        }}
      >
        <List onKeyDown={onKeyDown} tabIndex={0}>
          {files.map((file, index) => {
            const IconComponent = iconTypes[file.extension] ?? IconAnyFile

            return (
              <ListItem key={file.absolutePath} disablePadding>
                <ListItemButton role={undefined} selected={selectedIndex === index}>
                  <ListItemIcon sx={{ minWidth: 16, mr: 1 }}>
                    <IconComponent size={16} />
                  </ListItemIcon>
                  <Tooltip title={file.absolutePath} enterDelay={500} placement='bottom-start'>
                    <ListItemText
                      slotProps={{ primary: { noWrap: true } }}
                      onClick={() => {
                        setSelectedIndex(index)
                      }}
                      primary={
                        <>
                          {file.basename}{' '}
                          <Typography component='span' fontSize='.9em' sx={{ opacity: 0.8 }}>
                            {file.absolutePath.replace(`/${file.basename}`, '')}
                          </Typography>
                        </>
                      }
                    />
                  </Tooltip>
                  <ListItemIcon
                    sx={{ minWidth: 16, ml: 0.5 }}
                    className='MuiListItemIcon-jtActions'
                  >
                    <OpenFileButton file={file} />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </ClickAwayListener>
    </DialogModal>
  )
}
