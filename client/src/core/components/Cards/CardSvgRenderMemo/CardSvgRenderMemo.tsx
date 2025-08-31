import React, { useRef, useState } from 'react'

import { RenderSvg } from '../../SVG/RenderSvg'
import CardSvg, { type CardSvgProps } from '../CardSvg/CardSvg'

import { ContextMenu } from './ContextMenu'

const CardSvgRenderMemo = React.memo(({ component, ...props }: Omit<CardSvgProps, 'children'>) => {
  const [contextMenu, setContextMenu] = useState<{ mouseX: number; mouseY: number } | null>(null)
  const svgRef = useRef<SVGElement | null>(null)

  const handleContextMenu = (event: React.MouseEvent) => {
    event.stopPropagation()
    event.preventDefault()

    setContextMenu(
      contextMenu === null ? { mouseX: event.clientX + 2, mouseY: event.clientY - 6 } : null
    )
  }

  const handleClose = () => {
    setContextMenu(null)
  }

  return (
    <>
      <CardSvg component={component} {...props} onContextMenu={handleContextMenu}>
        <RenderSvg {...component} ref={svgRef} showErrors={false} />
      </CardSvg>
      <ContextMenu
        svgRef={svgRef}
        component={component}
        onClose={handleClose}
        contextMenu={contextMenu}
      />
    </>
  )
})

CardSvgRenderMemo.displayName = 'CardSvgRenderMemo'

export default CardSvgRenderMemo
