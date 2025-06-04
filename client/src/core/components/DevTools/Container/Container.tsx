import cn from 'classnames'
import React from 'react'

import DevTools from '../DevTools'

import { containerClasses } from './Container.classes'
import { BoxContainer } from './Container.style'

import ResizableBox, { type ResizableBoxProps } from '@/core/components/Resizable/ResizableBox'

const devToolsPanelId = 'devTools-home-panel'

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
      <DevTools id={devToolsPanelId} />
    </BoxContainer>
  )
}

export default Container
