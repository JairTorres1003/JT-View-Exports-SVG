import React, { lazy, Suspense } from 'react'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'

import { viewPanelsClasses } from './ViewPanels.classes'
import { BoxViewPanels } from './ViewPanels.style'

import { useViewPanels } from '@/core/hooks/useViewPanels'

const devToolsPanelId = 'devTools-panel'

const DevTools = lazy(async () => await import('../DevTools/DevTools'))

type ViewPanelsProps = React.PropsWithChildren<{ className?: string }>

const ViewPanels: React.FC<Readonly<ViewPanelsProps>> = ({ children, className }) => {
  const { sidePanelRef, toggleSidePanel, onResize, isShowSidePanel } = useViewPanels()

  return (
    <BoxViewPanels className={className}>
      <PanelGroup direction='horizontal'>
        <Panel
          collapsible
          id='contentPanel'
          maxSize={100}
          minSize={20}
          defaultSize={100}
          className={viewPanelsClasses.contentPanel}
        >
          {children}
        </Panel>
        {isShowSidePanel && (
          <>
            <PanelResizeHandle className={viewPanelsClasses.resizeHandle} />
            <Panel
              collapsible
              defaultSize={0}
              id='sidePanel'
              maxSize={80}
              minSize={20}
              tagName='aside'
              ref={sidePanelRef}
              className={viewPanelsClasses.sidePanel}
              onResize={onResize}
            >
              <Suspense fallback={null}>
                <DevTools id={devToolsPanelId} onClose={toggleSidePanel} />
              </Suspense>
            </Panel>
          </>
        )}
      </PanelGroup>
    </BoxViewPanels>
  )
}

export default ViewPanels
