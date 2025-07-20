import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { devToolsClasses } from './DevTools.classes'
import { BoxDevTools } from './DevTools.style'
import { Playground } from './Playground'

import { IconClose } from '@/assets/icons/functionalities'
import { AccordionMenuItem } from '@/core/components/Accordion'

const DevTools: FC<{ id: string; onClose?: VoidFunction }> = ({
  id,
  onClose = () => null,
}): React.ReactNode => {
  const { t } = useTranslation()

  return (
    <BoxDevTools id={id}>
      <Box component='header' className={devToolsClasses.header}>
        <Tooltip title={t('DevTools.title')}>
          <Typography variant='h2' className={devToolsClasses.title}>
            {t('DevTools.title')}
          </Typography>
        </Tooltip>
        <Box className={devToolsClasses.buttonClose}>
          <Tooltip title={t('labels.Close')}>
            <IconButton
              onClick={() => {
                onClose()
              }}
            >
              <IconClose size={16} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box className={devToolsClasses.content}>
        <AccordionMenuItem
          defaultExpanded
          enableEmptyActions
          hideActionsWhenCollapsed
          label={t('DevTools.playground.title')}
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
