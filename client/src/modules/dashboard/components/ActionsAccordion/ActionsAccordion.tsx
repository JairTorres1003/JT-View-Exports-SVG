import type { ViewExportSVG } from '@api/types/ViewExportsSVG'
import { IconButton, Stack, Tooltip } from '@mui/material'
import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { IconGoToFile, IconGoToManyFiles } from '@/assets/icons/functionalities'
import { IconInfo } from '@/assets/icons/indicators'
import { openFileInPosition } from '@/core/utils/file'

const ActionsAccordion: FC<{ data: ViewExportSVG }> = ({ data }) => {
  const { t } = useTranslation()

  return (
    <Stack direction='row' spacing={0.5} alignItems='center'>
      <Tooltip
        title={t(`labels.${data.files.length > 1 ? 'OpenManyFiles' : 'OpenFile'}`)}
        placement='top'
        onClick={() => {
          openFileInPosition(data.files[0])
        }}
      >
        <IconButton
          aria-label={t(`labels.${data.files.length > 1 ? 'OpenManyFiles' : 'OpenFile'}`)}
        >
          {data.files.length > 1 ? <IconGoToManyFiles size={16} /> : <IconGoToFile size={16} />}
        </IconButton>
      </Tooltip>
      <Tooltip title={t('labels.Info')} placement='top'>
        <IconButton aria-label={t('labels.Info')}>
          <IconInfo size={16} />
        </IconButton>
      </Tooltip>
    </Stack>
  )
}

ActionsAccordion.displayName = 'ActionsAccordion'

export default memo(ActionsAccordion)
