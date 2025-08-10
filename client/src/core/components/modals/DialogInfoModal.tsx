import type { ViewExportSVG } from '@api/types/ViewExportsSVG'
import {
  List,
  ListItem,
  ListItemText,
  type ListItemTextProps,
  Tooltip,
  type DialogProps,
  listItemTextClasses,
  listItemClasses,
} from '@mui/material'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

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

export const DialogInfoModal: FC<DialogInfoModalProps> = ({
  data,
  onClose = () => null,
  slotProps,
  isGrouped = false,
  ...dialogProps
}) => {
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
          <Show.When condition={data.files.length === 1 && !isGrouped}>
            <ListItem>
              <ListItemText
                primary={t('modalInfo.FileName')}
                secondary={data.files[0]?.basename}
                slotProps={commonSlotProps}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('modalInfo.Language')}
                secondary={data.files[0]?.language}
                slotProps={commonSlotProps}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('modalInfo.IsTemporaryFile')}
                secondary={data.files[0]?.isTemporary ? t('modalInfo.Yes') : t('modalInfo.No')}
                slotProps={commonSlotProps}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('modalInfo.Path')}
                secondary={
                  <Tooltip title={data.files[0]?.absolutePath} placement='top'>
                    <span>{data.files[0]?.dirname}</span>
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
                secondary={data.files.length}
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
                  data.files.some((file) => file.isTemporary)
                    ? t('modalInfo.Yes')
                    : t('modalInfo.No')
                }
                slotProps={commonSlotProps}
              />
            </ListItem>
          </Show.Else>
        </Show>

        <ListItem>
          <ListItemText
            primary={t('modalInfo.ShowNoExports')}
            secondary={data.isShowNoExports ? t('modalInfo.Yes') : t('modalInfo.No')}
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
