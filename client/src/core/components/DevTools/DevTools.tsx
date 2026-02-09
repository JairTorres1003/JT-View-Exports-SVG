import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import cn from 'classnames'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Panel, Group, Separator } from 'react-resizable-panels'

import IconClose from '@/assets/icons/functionalities/close'
import { AccordionMenuItem } from '@/core/components/Accordion'
import { useDevTools } from '@/core/hooks/DevTools/useDevTools'

import { devToolsClasses } from './DevTools.classes'
import { BoxDevTools } from './DevTools.style'
import InfoComponent from './InfoComponent/InfoComponent'
import { Playground } from './Playground'

const DevTools: FC<{ id: string; onClose?: VoidFunction }> = ({
  id,
  onClose = () => null,
}): React.ReactNode => {
  const { t } = useTranslation()
  const { expanded, handleExpanded, ref, watchExpanded } = useDevTools()

  const playgroundPanel = watchExpanded('playground-panel')
  const infoPanel = watchExpanded('info-panel')

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
            <IconButton onClick={onClose}>
              <IconClose size={16} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <Box
        className={cn(devToolsClasses.content, {
          [devToolsClasses.separatorDisabled]: expanded.length !== 2,
        })}
      >
        <Group orientation='vertical' disableCursor={expanded.length !== 2}>
          <Panel
            minSize={playgroundPanel ? 200 : 22}
            maxSize={playgroundPanel ? undefined : 22}
            id='playground-panel'
            className={devToolsClasses.panel}
            panelRef={ref.playground}
          >
            <AccordionMenuItem
              defaultExpanded
              enableEmptyActions
              hideActionsWhenCollapsed
              label={t('DevTools.playground.title')}
              className={devToolsClasses.accordion}
              expanded={playgroundPanel}
              onChange={handleExpanded('playground-panel')}
              slotProps={{
                tooltip: { placement: 'bottom-start', arrow: false },
                actions: { id: `${id}-playground-actions` },
              }}
            >
              <Playground actionsId={`${id}-playground-actions`} />
            </AccordionMenuItem>
          </Panel>

          {expanded.length === 2 && <Separator className={devToolsClasses.separator} />}

          <Panel
            minSize={infoPanel ? 200 : 22}
            maxSize={infoPanel ? undefined : 22}
            id='info-panel'
            className={devToolsClasses.panel}
            panelRef={ref.info}
            style={{ backgroundColor: 'blue' }}
          >
            <AccordionMenuItem
              enableEmptyActions
              hideActionsWhenCollapsed
              label={t('DevTools.info.title')}
              expanded={infoPanel}
              onChange={handleExpanded('info-panel')}
              className={devToolsClasses.accordion}
              slotProps={{
                tooltip: { placement: 'bottom-start', arrow: false },
              }}
            >
              <InfoComponent />
            </AccordionMenuItem>
          </Panel>

          <div
            style={{
              height: expanded.length === 0 ? 'calc(100% - 44px)' : 0,
            }}
          />
        </Group>
      </Box>
    </BoxDevTools>
  )
}

export default DevTools
