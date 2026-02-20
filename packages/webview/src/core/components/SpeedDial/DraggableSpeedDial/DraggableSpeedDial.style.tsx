import {
  SpeedDial,
  SpeedDialIcon,
  type SpeedDialProps,
  speedDialActionClasses,
  speedDialClasses,
  styled,
} from '@mui/material'
import { forwardRef } from 'react'

import type { CornerPosition } from '@/core/hooks/useDraggableSpeedDial'

interface DraggableSpeedDialProps extends SpeedDialProps {
  isDragging?: boolean
  position?: CornerPosition
}

export const BoxDraggableSpeedDial = styled(
  forwardRef<HTMLElement, DraggableSpeedDialProps>(function BoxDraggableSpeedDial(
    { icon, openIcon, isDragging: _isDragging, position: _position, ...props },
    ref
  ) {
    return (
      <SpeedDial
        {...props}
        ref={ref}
        icon={<SpeedDialIcon style={{ width: 32, height: 32 }} icon={icon} openIcon={openIcon} />}
      />
    )
  })
)(({ isDragging }) => ({
  position: 'absolute',
  bottom: 16,
  right: 16,
  [`& .${speedDialClasses.fab}`]: {
    backgroundColor: 'var(--JT-SVG-vscode-editorWidget-background)',
    color: 'var(--JT-SVG-vscode-editorWidget-foreground)',
    border: `1px solid var(--JT-SVG-vscode-sideBarSectionHeader-border)`,
    '&:hover': {
      backgroundColor: 'var(--JT-SVG-vscode-editorHoverWidget-background)',
      color: 'var(--JT-SVG-vscode-editorHoverWidget-foreground)',
    },
    userSelect: isDragging ? 'none' : undefined,
    cursor: isDragging ? 'grabbing' : 'pointer',
    boxShadow: isDragging ? '0 8px 25px rgba(0,0,0,0.3)' : undefined,
    transform: isDragging ? 'scale(1.25) !important' : undefined,
  },
  [`& .${speedDialActionClasses.fab}`]: {
    backgroundColor: 'var(--JT-SVG-vscode-button-background)',
    color: 'var(--JT-SVG-vscode-button-foreground)',
    '&:hover': { backgroundColor: 'var(--JT-SVG-vscode-button-hoverBackground)' },
  },
  [`& .${speedDialActionClasses.staticTooltipLabel}`]: {
    backgroundColor: 'var(--JT-SVG-vscode-editorHoverWidget-background)',
    border: '1px solid var(--JT-SVG-vscode-editorHoverWidget-border)',
    color: 'var(--JT-SVG-vscode-editorHoverWidget-foreground, #ffffff)',
    boxShadow: '0 2px 8px var(--JT-SVG-vscode-widget-shadow)',
    padding: '4px 8px',
  },
  variants: [
    {
      props: { position: 'top-left' },
      style: { top: 16, left: 16, right: 'auto', bottom: 'auto' },
    },
    {
      props: { position: 'top-right' },
      style: { top: 16, right: 16, bottom: 'auto', left: 'auto' },
    },
    {
      props: { position: 'bottom-left' },
      style: { bottom: 16, left: 16, right: 'auto', top: 'auto' },
    },
    {
      props: { position: 'bottom-right' },
      style: { bottom: 16, right: 16, top: 'auto', left: 'auto' },
    },
  ],
}))

interface CornerIndicatorProps {
  position: CornerPosition
  isActive: boolean
  isVisible: boolean
  className?: string
}

export const CornerIndicator = styled(
  ({ position = 'bottom-right', className }: CornerIndicatorProps) => (
    <div className={className} data-position={position}>
      <div className='indicator-dot' />
    </div>
  )
)(({ isActive, isVisible }) => ({
  position: 'fixed',
  width: 60,
  height: 60,
  borderRadius: '50%',
  border: `3px dashed ${isActive ? 'var(--JT-SVG-vscode-activityBarBadge-background)' : 'var(--JT-SVG-vscode-activityBarBadge-foreground)'}`,
  backgroundColor: isActive ? 'rgba(25, 118, 210, 0.1)' : 'rgba(0, 0, 0, 0.05)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
  opacity: isVisible ? 1 : 0,
  transform: `scale(${isActive ? 1.1 : 1})`,
  zIndex: 1250,
  pointerEvents: 'none',
  '& .indicator-dot': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: isActive
      ? 'var(--JT-SVG-vscode-activityBarBadge-background)'
      : 'var(--JT-SVG-vscode-activityBarBadge-foreground)',
    transition: 'all 0.2s ease',
  },

  variants: [
    {
      props: { position: 'top-left' },
      style: { top: 16, left: 16, right: 'auto', bottom: 'auto' },
    },
    {
      props: { position: 'top-right' },
      style: { top: 16, right: 16, bottom: 'auto', left: 'auto' },
    },
    {
      props: { position: 'bottom-left' },
      style: { bottom: 16, left: 16, right: 'auto', top: 'auto' },
    },
    {
      props: { position: 'bottom-right' },
      style: { bottom: 16, right: 16, top: 'auto', left: 'auto' },
    },
  ],
}))
