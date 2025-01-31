import { Box, type BoxProps, styled } from '@mui/material'
import { type ComponentType } from 'react'

import bgTransparent from '@/assets/images/bg-transparent.png'

export const BoxPlayground = styled(Box, { name: 'Playground-Box' })(({ theme: { palette } }) => ({
  padding: '12px 22px',
  '& .BoxPlayground__card': {
    display: 'flex',
    flexDirection: 'column',
    borderColor: `var(--JT-SVG-vscode-input-border, ${palette.divider})`,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    '& .BoxPlayground__card__tools': {
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
    },
  },
}))

export const BoxPlaygroundCardSvg = styled<ComponentType<BoxProps>>(
  ({ bgcolor, ...props }) => (
    <Box
      {...props}
      style={
        {
          '--JT-SVG-playground-card-svg-bg': bgcolor,
          ...props.style,
        } as unknown as React.CSSProperties
      }
    />
  ),
  {
    name: 'Playground-CardSVG-Box',
  }
)(() => ({
  padding: '10px',
  display: 'grid',
  placeContent: 'center',
  position: 'relative',
  aspectRatio: '1 / 1',
  color: 'var(--JT-SVG-vscode-input-background, currentColor)',
  resize: 'vertical',
  overflow: 'auto',
  backgroundImage: `url('${bgTransparent}')`,
  backgroundSize: '9px 9px',
  imageRendering: 'pixelated',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'var(--JT-SVG-playground-card-svg-bg)',
  },
  '& >:first-of-type': {
    zIndex: 1,
  },
}))
