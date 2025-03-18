import { Box, Tooltip, Typography } from '@mui/material'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { BoxDevTools } from './DevTools.style'
import { Playground } from './Playground'

import { AccordionMenuItem } from '@/core/components/Accordion'

export const DevTools: FC<{ id: string }> = ({ id }): React.ReactNode => {
  const { t } = useTranslation(undefined, { keyPrefix: 'DevTools' })

  return (
    <BoxDevTools id={id}>
      <Box className='Box-DevTools__header'>
        <Tooltip title={t('title')}>
          <Typography variant='h2'>{t('title')}</Typography>
        </Tooltip>
        <Box id={`${id}-buttonClose`} />
      </Box>
      <Box className='Box-DevTools__content'>
        <AccordionMenuItem
          defaultExpanded
          enableEmptyActions
          label='playground'
          className='Box-DevTools__content__accordion'
          slotProps={{
            tooltip: { placement: 'bottom-start', arrow: false },
            actions: { id: `${id}-playground-actions` },
          }}
        >
          <Playground containerId={`${id}-playground-actions`} />
        </AccordionMenuItem>
      </Box>
    </BoxDevTools>
  )
}
