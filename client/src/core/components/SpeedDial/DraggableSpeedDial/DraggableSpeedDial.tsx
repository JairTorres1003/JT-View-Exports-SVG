import { Backdrop, SpeedDialAction, type SpeedDialProps } from '@mui/material'
import type { FC } from 'react'

import { BoxDraggableSpeedDial, CornerIndicator } from './DraggableSpeedDial.style'

import { useDraggableSpeedDial } from '@/core/hooks/useDraggableSpeedDial'
import type { IconBaseProps } from '@/types/BaseProps'

interface DraggableSpeedDialProps<TAction extends { icon: FC<IconBaseProps>; name: string }>
  extends Omit<SpeedDialProps, 'children'> {
  actions: TAction[]
  hideBackdrop?: boolean
  onSelected?: (event: React.MouseEvent<HTMLDivElement>, action: TAction) => void
}

export default function DraggableSpeedDial<
  TAction extends { icon: FC<IconBaseProps>; name: string },
>({
  actions,
  hideBackdrop = false,
  open = false,
  style,
  onMouseDown = () => null,
  onClose = () => null,
  onSelected = () => null,
  ...props
}: DraggableSpeedDialProps<TAction>) {
  const {
    isDragging,
    speedDialRef,
    handleMouseDown,
    cornerPositions,
    hoveredCorner,
    dragPosition,
    position,
    positions,
  } = useDraggableSpeedDial()

  return (
    <>
      {!hideBackdrop && (
        <Backdrop open={open} sx={(theme) => ({ zIndex: theme.zIndex.speedDial - 1 })} />
      )}
      {cornerPositions.map((corner) => (
        <CornerIndicator
          key={corner}
          position={corner}
          isActive={hoveredCorner === corner}
          isVisible={isDragging}
        />
      ))}

      <BoxDraggableSpeedDial
        direction={positions[position]}
        {...props}
        position={position}
        ref={speedDialRef}
        isDragging={isDragging}
        open={open && !isDragging}
        onClose={onClose}
        onMouseDown={(e) => {
          handleMouseDown(e)
          onMouseDown(e)
        }}
        style={{
          ...style,
          ...(isDragging && {
            position: 'fixed',
            left: dragPosition.x,
            top: dragPosition.y,
            bottom: 'auto',
            right: 'auto',
            cursor: 'grabbing',
            zIndex: 1300,
            transition: 'none',
          }),
        }}
      >
        {actions.map(({ icon: Icon, name, ...actionProps }) => (
          <SpeedDialAction
            key={name}
            icon={<Icon size={20} />}
            onClick={(e) => {
              onClose(e, 'toggle')
              onSelected(e, { icon: Icon, name, ...actionProps } as unknown as TAction)
            }}
            // eslint-disable-next-line @typescript-eslint/no-deprecated -- The recommended `slotProps.tooltip.placement` prop is not working correctly.
            tooltipPlacement={position.endsWith('left') ? 'right' : 'left'}
            slotProps={{
              tooltip: {
                title: name,
                open: true,
              },
            }}
          />
        ))}
      </BoxDraggableSpeedDial>
    </>
  )
}
