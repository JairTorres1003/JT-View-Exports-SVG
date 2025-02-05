import { IconButton, styled } from '@mui/material'
import { forwardRef } from 'react'

import bgTransparent from '@/assets/images/bg-transparent.png'
import type { IconButtonPickerProps } from '@/core/interfaces/components/Select/SelectPickerColor'

export const IconButtonPicker = styled(
  forwardRef<HTMLButtonElement, IconButtonPickerProps>(function IconButtonPicker(
    { size: _size, shape: _shape, bgColor = '#fff', ...props },
    ref
  ) {
    return (
      <IconButton
        {...props}
        style={{
          '--JT-SVG-IconButtonPicker-bg': bgColor,
          ...props.style,
        }}
        ref={ref}
      />
    )
  }),
  { name: 'IconButtonPicker', slot: 'Root' }
)(({ size = 20, shape = 'square', theme }) => ({
  backgroundImage: `url('${bgTransparent}')`,
  height: size,
  width: size,
  border: `1px solid ${theme.palette.divider}`,
  backgroundSize: '9px 9px',
  imageRendering: 'pixelated',
  borderRadius: shape === 'circle' ? '50%' : `${theme.shape.borderRadius}px`,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'var(--JT-SVG-IconButtonPicker-bg)',
  },
}))
