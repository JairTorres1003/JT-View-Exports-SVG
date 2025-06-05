import cn from 'classnames'
import React, { lazy, Suspense } from 'react'

import { containerClasses } from './Container.classes'
import { BoxContainer } from './Container.style'

import ResizableBox, { type ResizableBoxProps } from '@/core/components/Resizable/ResizableBox'

const devToolsPanelId = 'devTools-panel'

const DevTools = lazy(async () => await import('../DevTools'))

interface ContainerProps {
  children: React.ReactNode
  className?: string
  slotProps?: {
    resizable?: Omit<ResizableBoxProps, 'containerId'>
  }
}

const Container: React.FC<Readonly<ContainerProps>> = ({ children, className, slotProps }) => {
  return (
    <BoxContainer className={className}>
      <ResizableBox
        {...slotProps?.resizable}
        className={cn(containerClasses.content, slotProps?.resizable?.className)}
        containerId={devToolsPanelId}
      >
        {children}
      </ResizableBox>
      <Suspense fallback={null}>
        <DevTools id={devToolsPanelId} />
      </Suspense>
    </BoxContainer>
  )
}

export default Container
