import type { SVGFile, ViewExportSVG } from '@api/types/ViewExportsSVG'
import {
  ClickAwayListener,
  Dialog,
  DialogContent,
  type DialogProps,
  DialogTitle,
  Divider,
  IconButton,
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

import { OpenFileButton } from '../../Buttons/OpenFileButton'

import { IconAnyFile, IconJS, IconReact, IconReactTS, IconTS } from '@/assets/icons/files'
import { IconClose } from '@/assets/icons/functionalities'
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
    <Dialog onClose={onClose} {...dialogProps}>
      <Tooltip title={t('labels.Close')} placement='top'>
        <IconButton
          aria-label={t('labels.Close')}
          sx={{ position: 'absolute', right: 4, top: 4 }}
          onClick={(e) => {
            onClose(e, 'backdropClick')
          }}
        >
          <IconClose size={16} />
        </IconButton>
      </Tooltip>

      <DialogTitle textAlign='center'>
        {t('labels.ListOfAssociatedFilesFor', { name: groupKind.label })}
      </DialogTitle>

      <Divider sx={{ borderColor: 'var(--JT-SVG-vscode-panel-border)', borderWidth: '1px' }} />

      <DialogContent sx={{ p: '8px 0' }}>
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
      </DialogContent>
    </Dialog>
  )
}
