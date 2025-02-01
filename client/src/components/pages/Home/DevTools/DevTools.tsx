import { AccordionMenuItem, type AccordionMenuItemProps } from '@custom/components/Accordion'
import { Box, Tooltip, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { BoxDevTools } from './DevTools.style'
import { Playground } from './Playground'

const SLOT_PROPS: AccordionMenuItemProps['slotProps'] = {
  tooltip: { placement: 'bottom-start', arrow: false },
}

export const DevTools = (): React.ReactNode => {
  const { t } = useTranslation(undefined, { keyPrefix: 'DevTools' })

  return (
    <BoxDevTools id='BoxDevTools'>
      <Box className='BoxDevTools__header'>
        <Tooltip title={t('title')}>
          <Typography variant='h2'>{t('title')}</Typography>
        </Tooltip>
        <Box id='BoxDevTools-buttonClose' />
      </Box>
      <Box className='BoxDevTools__content'>
        <AccordionMenuItem
          defaultExpanded
          label='playground'
          className='BoxDevTools__content__accordion'
          slotProps={SLOT_PROPS}
        >
          <Playground />
        </AccordionMenuItem>
      </Box>
    </BoxDevTools>
  )
}
