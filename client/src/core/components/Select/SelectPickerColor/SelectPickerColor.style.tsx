import { IconButton, styled } from '@mui/material'
import { forwardRef } from 'react'

import bgTransparent from '@/assets/images/bg-transparent.png'
import type { IconButtonPickerProps } from '@/core/types/components/Select/SelectPickerColor'

export const IconButtonPicker = styled(
  forwardRef<HTMLButtonElement, IconButtonPickerProps>(function IconButtonPicker(
    { size: _size, shape: _shape, bgColor = '#fff', style, ...props },
    ref
  ) {
    return (
      <IconButton
        {...props}
        ref={ref}
        style={{
          '--JT-SVG-IconButtonPicker-bg': bgColor,
          ...style,
        }}
      />
    )
  }),
  { name: 'IconButtonPicker-root', target: 'IconButtonPicker-root' }
)(({ size = 20, shape = 'square', theme }) => ({
  backgroundImage: `url('${bgTransparent}')`,
  height: size,
  width: size,
  border: `1px solid var(--JT-SVG-vscode-panel-border, ${theme.palette.divider})`,
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
