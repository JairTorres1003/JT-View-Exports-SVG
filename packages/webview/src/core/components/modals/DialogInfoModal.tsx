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
import { useSelector } from 'react-redux'
import { Show } from '@/core/helpers'
import { DialogModal } from './DialogModal'

interface DialogInfoModalProps extends DialogProps {
  data: ViewExportSVG
  isGrouped?: boolean
}

const commonSlotProps: ListItemTextProps['slotProps'] = {
  primary: { component: 'b', fontWeight: 600, sx: { whiteSpace: 'nowrap' } },
  secondary: { noWrap: true, sx: { opacity: 0.8 } },
}

export const DialogInfoModal: React.FC<DialogInfoModalProps> = ({
  data,
  onClose = () => null,
  slotProps,
  isGrouped = false,
  ...dialogProps
}) => {
  const filesComponents = useSelector((state) => state.svg.files)

  const fileList = useMemo(() => {
    return data.files.map((fileId) => filesComponents[fileId]).filter((file) => file)
  }, [data.files, filesComponents])

  const { t } = useTranslation()

  return (
    <DialogModal
      fullWidth
      maxWidth='xs'
      onClose={onClose}
      {...dialogProps}
      title={t('modalInfo.title')}
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
                primary={t('modalInfo.FileName')}
                secondary={fileList[0]?.basename}
                slotProps={commonSlotProps}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('modalInfo.Language')}
                secondary={fileList[0]?.language}
                slotProps={commonSlotProps}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('modalInfo.IsTemporaryFile')}
                secondary={fileList[0]?.isTemporary ? t('labels.Yes') : t('labels.No')}
                slotProps={commonSlotProps}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('modalInfo.Path')}
                secondary={
                  <Tooltip title={fileList[0]?.absolutePath} placement='top'>
                    <span>{fileList[0]?.dirname}</span>
                  </Tooltip>
                }
                slotProps={commonSlotProps}
              />
            </ListItem>
          </Show.When>
          <Show.Else>
            <ListItem>
              <ListItemText
                primary={t('modalInfo.FilesCount')}
                secondary={fileList.length}
                slotProps={commonSlotProps}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('modalInfo.GroupKindName')}
                secondary={
                  <Tooltip title={data.groupKind.label} placement='top'>
                    <span>{data.groupKind.label}</span>
                  </Tooltip>
                }
                slotProps={commonSlotProps}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('modalInfo.IncludesTemporaryFiles')}
                secondary={
                  fileList.some((file) => file.isTemporary) ? t('labels.Yes') : t('labels.No')
                }
                slotProps={commonSlotProps}
              />
            </ListItem>
          </Show.Else>
        </Show>

        <ListItem>
          <ListItemText
            primary={t('modalInfo.ShowNoExports')}
            secondary={data.isShowNoExports ? t('labels.Yes') : t('labels.No')}
            slotProps={commonSlotProps}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={t('modalInfo.ComponentsExported')}
            secondary={data.totalExports}
            slotProps={commonSlotProps}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={t('modalInfo.ComponentsNotExported')}
            secondary={data.totalNoExports}
            slotProps={commonSlotProps}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={t('modalInfo.TotalComponents')}
            secondary={data.totalSVG}
            slotProps={commonSlotProps}
          />
        </ListItem>
      </List>
    </DialogModal>
  )
}
