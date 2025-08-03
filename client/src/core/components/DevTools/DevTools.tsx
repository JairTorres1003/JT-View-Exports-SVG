import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'

import { devToolsClasses } from './DevTools.classes'
import { BoxDevTools } from './DevTools.style'
import { Playground } from './Playground'

import { IconClose } from '@/assets/icons/functionalities'
import { AccordionMenuItem } from '@/core/components/Accordion'
import { useDevTools } from '@/core/hooks/DevTools/useDevTools'

const MemoPlayground = memo(Playground)

const DevTools: FC<{ id: string; onClose?: VoidFunction }> = ({
  id,
  onClose = () => null,
}): React.ReactNode => {
  const { t } = useTranslation()
  const { expanded, handleExpanded, ref } = useDevTools()

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
        <PanelGroup direction='vertical'>
          <Panel
            id='playground-panel'
            className={devToolsClasses.panel}
            ref={ref.playground}
            defaultSize={100}
          >
            <AccordionMenuItem
              defaultExpanded
              enableEmptyActions
              hideActionsWhenCollapsed
              label={t('DevTools.playground.title')}
              className={devToolsClasses.accordion}
              expanded={expanded.includes('playground-panel')}
              onChange={handleExpanded('playground-panel')}
              slotProps={{
                tooltip: { placement: 'bottom-start', arrow: false },
                actions: { id: `${id}-playground-actions` },
              }}
            >
              <MemoPlayground actionsId={`${id}-playground-actions`} />
            </AccordionMenuItem>
          </Panel>

          {expanded.length === 2 && <PanelResizeHandle className={devToolsClasses.resizeHandle} />}

          <Panel id='info-panel' className={devToolsClasses.panel} ref={ref.info} defaultSize={0}>
            <AccordionMenuItem
              enableEmptyActions
              hideActionsWhenCollapsed
              label={t('DevTools.info.title')}
              expanded={expanded.includes('info-panel')}
              onChange={handleExpanded('info-panel')}
              className={devToolsClasses.accordion}
              slotProps={{
                tooltip: { placement: 'bottom-start', arrow: false },
              }}
            >
              {' '}
            </AccordionMenuItem>
          </Panel>
        </PanelGroup>
      </Box>
    </BoxDevTools>
  )
}

export default DevTools
