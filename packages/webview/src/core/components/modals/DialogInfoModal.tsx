import type { ViewExportSVG } from '@jt-view-exports-svg/core'
import {
  type DialogProps,
  List,
  ListItem,
  ListItemText,
  type ListItemTextProps,
  listItemClasses,
  listItemTextClasses,
  Tooltip,
} from '@mui/material'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { Show } from '@/core/helpers'
import { useAppSelector } from '@/store/hooks'
import { DialogModal } from './DialogModal'

interface DialogInfoModalProps extends DialogProps {
  data: ViewExportSVG
  isGrouped?: boolean
}

const commonSlotProps: ListItemTextProps['slotProps'] = {
  primary: { sx: { whiteSpace: 'nowrap', fontWeight: 600 } },
  secondary: { noWrap: true, sx: { opacity: 0.8 } },
}

const DialogInfoModal: React.FC<DialogInfoModalProps> = ({
  data,
  onClose = () => null,
  slotProps,
  isGrouped = false,
  ...dialogProps
}) => {
  const allFiles = useAppSelector((state) => state.svg.files)

  const fileList = useMemo(() => {
    return data.files.map((id) => allFiles[id]).filter(Boolean)
  }, [data.files, allFiles])

  const { t } = useTranslation()

  return (
    <DialogModal
      fullWidth
      maxWidth='xs'
      onClose={onClose}
      {...dialogProps}
      title={t('modal-info.title')}
      slotProps={{
        ...slotProps,
        dialogContent: { sx: { p: '16px' } },
      }}
    >
      <List
        dense
        disablePadding
        sx={{
          [`& .${listItemClasses.root}`]: { p: 0 },
          [`& .${listItemTextClasses.root}`]: { display: 'flex', gap: 1 },
        }}
      >
        <Show>
          <Show.When condition={fileList.length === 1 && !isGrouped}>
            <ListItem>
              <ListItemText
                primary={t('modal-info.file-name')}
                secondary={fileList[0]?.basename}
                slots={{ primary: 'b' }}
                slotProps={commonSlotProps}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('modal-info.language')}
                secondary={fileList[0]?.language}
                slots={{ primary: 'b' }}
                slotProps={commonSlotProps}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('modal-info.is-temporary-file')}
                secondary={fileList[0]?.isTemporary ? t('yes') : t('no')}
                slots={{ primary: 'b' }}
                slotProps={commonSlotProps}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('modal-info.path')}
                secondary={
                  <Tooltip title={fileList[0]?.absolutePath} placement='top'>
                    <span>{fileList[0]?.dirname}</span>
                  </Tooltip>
                }
                slots={{ primary: 'b' }}
                slotProps={commonSlotProps}
              />
            </ListItem>
          </Show.When>
          <Show.Else>
            <ListItem>
              <ListItemText
                primary={t('modal-info.files-count')}
                secondary={fileList.length}
                slots={{ primary: 'b' }}
                slotProps={commonSlotProps}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('modal-info.group-kind-name')}
                secondary={
                  <Tooltip title={data.groupKind.label} placement='top'>
                    <span>{data.groupKind.label}</span>
                  </Tooltip>
                }
                slots={{ primary: 'b' }}
                slotProps={commonSlotProps}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('modal-info.includes-temporary-files')}
                secondary={fileList.some((file) => file.isTemporary) ? t('yes') : t('no')}
                slots={{ primary: 'b' }}
                slotProps={commonSlotProps}
              />
            </ListItem>
          </Show.Else>
        </Show>

        <ListItem>
          <ListItemText
            primary={t('modal-info.show-no-exports')}
            secondary={data.isShowNoExports ? t('yes') : t('no')}
            slots={{ primary: 'b' }}
            slotProps={commonSlotProps}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={t('modal-info.components-exported')}
            secondary={data.totalExports}
            slots={{ primary: 'b' }}
            slotProps={commonSlotProps}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={t('modal-info.components-not-exported')}
            secondary={data.totalNoExports}
            slots={{ primary: 'b' }}
            slotProps={commonSlotProps}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={t('modal-info.total-components')}
            secondary={data.totalSVG}
            slots={{ primary: 'b' }}
            slotProps={commonSlotProps}
          />
        </ListItem>
      </List>
    </DialogModal>
  )
}

export default DialogInfoModal
