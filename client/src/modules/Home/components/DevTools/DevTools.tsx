import { Box, Tooltip, Typography } from '@mui/material'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { devToolsClasses } from './DevTools.classes'
import { BoxDevTools } from './DevTools.style'
import { Playground } from './Playground'

import { AccordionMenuItem } from '@/core/components/Accordion'

const DevTools: FC<{ id: string }> = ({ id }): React.ReactNode => {
  const { t } = useTranslation(undefined, { keyPrefix: 'DevTools' })

  return (
    <BoxDevTools id={id}>
      <Box className={devToolsClasses.header}>
        <Tooltip title={t('title')}>
          <Typography variant='h2' className={devToolsClasses.title}>
            {t('title')}
          </Typography>
        </Tooltip>
        <Box id={`${id}-buttonClose`} className={devToolsClasses.buttonClose} />
      </Box>
      <Box className={devToolsClasses.content}>
        <AccordionMenuItem
          defaultExpanded
          enableEmptyActions
          hideActionsWhenCollapsed
          label={t('playground.title')}
          className={devToolsClasses.accordion}
          slotProps={{
            tooltip: { placement: 'bottom-start', arrow: false },
            actions: { id: `${id}-playground-actions` },
          }}
        >
          <Playground actionsId={`${id}-playground-actions`} />
        </AccordionMenuItem>
      </Box>
    </BoxDevTools>
  )
}

export default DevTools
