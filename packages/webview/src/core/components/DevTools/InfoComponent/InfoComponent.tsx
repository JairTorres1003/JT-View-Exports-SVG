import {
  Alert,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  type ListItemTextProps,
  listItemClasses,
  listItemTextClasses,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

import IconGoToFile from '@/assets/icons/functionalities/go-to-file'
import { openFileInPosition } from '@/core/utils/file'
import { useAppSelector } from '@/store/hooks'

const commonSlotProps: ListItemTextProps['slotProps'] = {
  primary: { sx: { whiteSpace: 'nowrap', fontWeight: 600 } },
  secondary: { noWrap: true, sx: { opacity: 0.8 } },
}

const InfoComponent = () => {
  const recentlySelected = useAppSelector((state) => state.playground.recentlySelected)

  const { t } = useTranslation(['dev-tools', 'common'])

  if (!recentlySelected) return null

  const infoList: Array<{ primary: string; secondary: string }> = [
    {
      primary: t('info.component-name'),
      secondary: recentlySelected.name,
    },
    {
      primary: t('info.type-declaration'),
      secondary: recentlySelected.declaration,
    },
    {
      primary: t('info.is-exported'),
      secondary: recentlySelected.isExported
        ? t('yes', { ns: 'common' })
        : t('no', { ns: 'common' }),
    },
    {
      primary: t('info.is-animated'),
      secondary: recentlySelected.isAnimated
        ? t('yes', { ns: 'common' })
        : t('no', { ns: 'common' }),
    },
    {
      primary: t('info.is-favorite'),
      secondary: recentlySelected?.isFavorite
        ? t('yes', { ns: 'common' })
        : t('no', { ns: 'common' }),
    },
  ]

  return (
    <Stack spacing={2} sx={{ p: '12px 22px' }}>
      <List
        dense
        disablePadding
        sx={{
          [`& .${listItemClasses.root}`]: { p: 0 },
          [`& .${listItemTextClasses.root}`]: { display: 'flex', gap: 1 },
        }}
      >
        {infoList.map((info) => (
          <ListItem key={info.primary}>
            <ListItemText
              primary={info.primary}
              secondary={info.secondary}
              slots={{ primary: 'b' }}
              slotProps={commonSlotProps}
            />
          </ListItem>
        ))}
      </List>
      {recentlySelected?.hasErrors && (
        <Stack spacing={1}>
          <Divider
            sx={{
              borderColor: 'var(--JT-SVG-vscode-panel-border)',
              borderWidth: '1px',
              m: '0 -22px',
            }}
          />

          <Typography sx={{ fontWeight: 600 }}>{t('errors', { ns: 'common' })}</Typography>

          <Alert
            severity='error'
            action={
              <Tooltip title={t('playground.open-in-editor')} placement='top'>
                <IconButton
                  onClick={() => {
                    openFileInPosition(recentlySelected.location)
                  }}
                >
                  <IconGoToFile size={16} />
                </IconButton>
              </Tooltip>
            }
            sx={{
              position: 'relative',
              wordWrap: 'break-word',
              '& > *': { zIndex: 1 },
              '&:before': {
                content: '""',
                position: 'absolute',
                background: 'rgb(255 0 0 / 2%)',
                inset: 0,
                borderRadius: 'inherit',
                zIndex: 0,
              },
            }}
          >
            {recentlySelected.errors?.message}
          </Alert>
        </Stack>
      )}
    </Stack>
  )
}

const MemoInfoComponent = React.memo(InfoComponent)

MemoInfoComponent.displayName = 'InfoComponent'

export default MemoInfoComponent
