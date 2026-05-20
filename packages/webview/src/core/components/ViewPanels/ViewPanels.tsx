import { lazy, Suspense } from 'react'
import { Group, Panel, Separator } from 'react-resizable-panels'

import { useViewPanels } from '@/core/hooks/useViewPanels'

import { viewPanelsClasses } from './ViewPanels.classes'
import { BoxViewPanels } from './ViewPanels.style'

const devToolsPanelId = 'devTools-panel'

const DevTools = lazy(async () => await import('../DevTools/DevTools'))

type ViewPanelsProps = React.PropsWithChildren<{ className?: string }>

const ViewPanels: React.FC<Readonly<ViewPanelsProps>> = ({ children, className }) => {
  const { sidePanelRef, toggleSidePanel, onResize, isShowSidePanel } = useViewPanels()

  return (
    <BoxViewPanels className={className}>
      <Group>
        <Panel
          id='contentPanel'
          minSize={250}
          defaultSize='100%'
          className={viewPanelsClasses.mainPanel}
        >
          {children}
        </Panel>
        {isShowSidePanel && (
          <>
            <Separator className={viewPanelsClasses.separator} />
            <Panel
              collapsible
              defaultSize={0}
              id='sidePanel'
              minSize={200}
              panelRef={sidePanelRef}
              className={viewPanelsClasses.sidePanel}
              onResize={onResize}
            >
              <Suspense fallback={null}>
                <DevTools id={devToolsPanelId} onClose={toggleSidePanel} />
              </Suspense>
            </Panel>
          </>
        )}
      </Group>
    </BoxViewPanels>
  )
}

export default ViewPanels
