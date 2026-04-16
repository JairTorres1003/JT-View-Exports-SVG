import type { FileIdentifier, ViewExportSVG } from '@jt-view-exports-svg/core'
import {
  ClickAwayListener,
  type DialogProps,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material'
import { type FC, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import IconAnyFile from '@/assets/icons/files/any'
import IconJS from '@/assets/icons/logos/js'
import IconReact from '@/assets/icons/logos/react'
import IconReactTS from '@/assets/icons/logos/react-ts'
import IconTS from '@/assets/icons/logos/ts'
import { useAppSelector } from '@/store/hooks'
import type { IconBaseProps } from '@/types/BaseProps'

import { OpenFileButton } from '../Buttons/OpenFileButton'

import { DialogModal } from './DialogModal'

interface DialogFilesModalProps extends DialogProps {
  files: FileIdentifier[]
  groupKind: ViewExportSVG['groupKind']
}

const iconTypes: Record<string, React.FC<Omit<IconBaseProps, 'color'>>> = {
  jsx: IconReact,
  tsx: IconReactTS,
  js: IconJS,
  ts: IconTS,
}

const DialogFilesModal: FC<DialogFilesModalProps> = ({
  files,
  groupKind,
  onClose = () => null,
  ...dialogProps
}) => {
  const { fileList, selectedIndex, onKeyDown, onCloseAway, onSelected } = useDialogFilesModal({
    files,
  })
  const { t } = useTranslation()

  return (
    <DialogModal
      onClose={onClose}
      {...dialogProps}
      title={t('labels.ListOfAssociatedFilesFor', { name: groupKind.label?.split('/').pop() })}
    >
      <ClickAwayListener onClickAway={onCloseAway}>
        <List onKeyDown={onKeyDown} tabIndex={0}>
          {fileList.map((file, index) => {
            const IconComponent = iconTypes[file.extension] ?? IconAnyFile

            return (
              <ListItem key={file.uri} disablePadding>
                <ListItemButton selected={selectedIndex === index}>
                  <ListItemIcon sx={{ minWidth: 16, mr: 1 }}>
                    <IconComponent size={16} />
                  </ListItemIcon>
                  <Tooltip title={file.absolutePath} enterDelay={500} placement='bottom-start'>
                    <ListItemText
                      primary={file.basename}
                      secondary={file.dirname}
                      onClick={onSelected(index)}
                      sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}
                      slotProps={{
                        primary: { sx: { whiteSpace: 'nowrap', fontSize: '.75rem' } },
                        secondary: { noWrap: true, sx: { opacity: 0.8, fontSize: '.7rem' } },
                      }}
                    />
                  </Tooltip>
                  <ListItemIcon
                    sx={{ minWidth: 16, ml: 0.5 }}
                    className='MuiListItemIcon-jtActions'
                  >
                    <OpenFileButton fileId={file.id} />
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

export default DialogFilesModal

const useDialogFilesModal = ({ files }: { files: FileIdentifier[] }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | false>(false)

  const allFiles = useAppSelector((state) => state.svg.files)

  const fileList = useMemo(() => {
    return files.map((id) => allFiles[id]).filter(Boolean)
  }, [files, allFiles])

  /**
   * Handles keyboard navigation within the dialog.
   */
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      setSelectedIndex((prev) => (prev === false ? 0 : Math.min(prev + 1, fileList.length - 1)))
    } else if (event.key === 'ArrowUp') {
      setSelectedIndex((prev) => (prev === false ? 0 : Math.max(prev - 1, 0)))
    }
  }

  const onCloseAway = () => {
    setSelectedIndex(false)
  }

  const onSelected = (index: number) => () => {
    setSelectedIndex(index)
  }

  return { fileList, selectedIndex, onKeyDown, onCloseAway, onSelected }
}
