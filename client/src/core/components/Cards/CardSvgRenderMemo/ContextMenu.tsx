import type { SVGComponent } from '@api/types/ViewExportsSVG'
import { Divider, Menu, MenuItem, type MenuProps } from '@mui/material'
import type { FC } from 'react'

import { useContextMenuSVG } from '@/core/hooks/useContextMenuSVG'

interface ContextMenuProps
  extends Omit<
    MenuProps,
    'children' | 'anchorReference' | 'anchorPosition' | 'open' | 'contextMenu' | 'component'
  > {
  contextMenu: { mouseX: number; mouseY: number } | null
  component: SVGComponent
  svgRef: React.RefObject<SVGElement | null>
}

export const ContextMenu: FC<ContextMenuProps> = ({
  contextMenu,
  onClose = () => null,
  component,
  svgRef,
  ...props
}) => {
  const actions = useContextMenuSVG({ svgRef })

  /**
   * Handles the closing of the menu component.
   */
  const handleClose: MenuProps['onClose'] = (event, reason) => {
    onClose(event, reason)
    requestAnimationFrame(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }
    })
  }

  return (
    <Menu
      {...props}
      onClose={handleClose}
      open={contextMenu !== null}
      anchorReference='anchorPosition'
      anchorPosition={
        contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined
      }
    >
      {actions.map((action, index) => {
        if ('isDivider' in action) return <Divider key={`divider-${index}`} />

        return (
          <MenuItem
            key={action.label}
            onClick={(e) => {
              action.onClick?.(component)
              handleClose(e, 'backdropClick')
            }}
          >
            {action.label}
          </MenuItem>
        )
      })}
    </Menu>
  )
}
