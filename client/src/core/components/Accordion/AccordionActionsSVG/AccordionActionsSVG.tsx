import type { ViewExportSVG } from '@api/types/ViewExportsSVG'
import { IconButton, Stack, Tooltip } from '@mui/material'
import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { FilesAction } from './actions/FilesAction'
import { RefreshAction } from './actions/RefreshAction'

import { IconInfo } from '@/assets/icons/indicators'

const AccordionActionsSVG: FC<{ data: ViewExportSVG; hideRefresh?: boolean }> = ({
  data,
  hideRefresh = false,
}) => {
  const { t } = useTranslation()

  return (
    <Stack direction='row' spacing={0.5} alignItems='center'>
      {!hideRefresh && <RefreshAction files={data.files} groupKind={data.groupKind} />}

      <FilesAction files={data.files} groupKind={data.groupKind} />

      <Tooltip title={t('labels.Info')} placement='top'>
        <IconButton aria-label={t('labels.Info')}>
          <IconInfo size={16} />
        </IconButton>
      </Tooltip>
    </Stack>
  )
}

AccordionActionsSVG.displayName = 'AccordionActionsSVG'

export default memo(AccordionActionsSVG)
