import {
  Alert,
  Divider,
  IconButton,
  List,
  ListItem,
  listItemClasses,
  ListItemText,
  listItemTextClasses,
  Stack,
  Tooltip,
  Typography,
  type ListItemTextProps,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { IconGoToFile } from '@/assets/icons/functionalities'
import { openFileInPosition } from '@/core/utils/file'

const commonSlotProps: ListItemTextProps['slotProps'] = {
  primary: { component: 'b', fontWeight: 600, sx: { whiteSpace: 'nowrap' } },
  secondary: { noWrap: true, sx: { opacity: 0.8 } },
}

export const InfoComponent = () => {
  const recentlySelected = useSelector((state) => state.playground.recentlySelected)

  const { t } = useTranslation()

  if (!recentlySelected) return null

  const infoList: Array<{ primary: string; secondary: string }> = [
    {
      primary: t('DevTools.info.componentName'),
      secondary: recentlySelected.name,
    },
    {
      primary: t('DevTools.info.typeDeclaration'),
      secondary: recentlySelected.declaration,
    },
    {
      primary: t('DevTools.info.isExported'),
      secondary: recentlySelected.isExported ? t('labels.Yes') : t('labels.No'),
    },
    {
      primary: t('DevTools.info.isAnimated'),
      secondary: recentlySelected.isAnimated ? t('labels.Yes') : t('labels.No'),
    },
    {
      primary: t('DevTools.info.isFavorite'),
      secondary: recentlySelected?.isFavorite ? t('labels.Yes') : t('labels.No'),
    },
  ]

  return (
    <Stack p='12px 22px' spacing={2}>
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

          <Typography fontWeight={600}>{t('labels.Errors')}</Typography>

          <Alert
            severity='error'
            action={
              <Tooltip title={t('DevTools.playground.OpenInEditor')} placement='top'>
                <IconButton
                  onClick={() => {
                    openFileInPosition(
                      recentlySelected.location.file,
                      recentlySelected.location.start
                    )
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
