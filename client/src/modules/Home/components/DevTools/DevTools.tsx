import { Box, Tooltip, Typography } from '@mui/material'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { BoxDevTools } from './DevTools.style'
import { Playground } from './Playground'

import { AccordionMenuItem, type AccordionMenuItemProps } from '@/core/components/Accordion'

const SLOT_PROPS: AccordionMenuItemProps['slotProps'] = {
  tooltip: { placement: 'bottom-start', arrow: false },
}

export const DevTools: FC<{ id: string }> = ({ id }): React.ReactNode => {
  const { t } = useTranslation(undefined, { keyPrefix: 'DevTools' })

  return (
    <BoxDevTools id={id}>
      <Box className='Box-DevTools__header'>
        <Tooltip title={t('title')}>
          <Typography variant='h2'>{t('title')}</Typography>
        </Tooltip>
        <Box id='BoxDevTools-buttonClose' />
      </Box>
      <Box className='Box-DevTools__content'>
        <AccordionMenuItem
          defaultExpanded
          label='playground'
          className='Box-DevTools__content__accordion'
          slotProps={SLOT_PROPS}
        >
          <Playground />
        </AccordionMenuItem>
      </Box>
    </BoxDevTools>
  )
}
