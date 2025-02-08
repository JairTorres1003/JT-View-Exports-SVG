import { Box, type BoxProps, styled } from '@mui/material'
import { forwardRef } from 'react'

import bgTransparent from '@/assets/images/bg-transparent.png'

export const BoxPlayground = styled(Box, { name: 'Box-Playground' })(({ theme: { palette } }) => ({
  padding: '12px 22px',
  '& .Box-Playground__card': {
    display: 'flex',
    flexDirection: 'column',
    borderColor: `var(--JT-SVG-vscode-panel-border, ${palette.divider})`,
    backgroundColor: 'var(--JT-SVG-vscode-editor-background)',
    '& .Box-Playground__card__tools': {
      padding: '4px 8px',
      alignItems: 'center',
    },
    '& .Box-Playground__card__divider': {
      borderColor: `var(--JT-SVG-vscode-panel-border, ${palette.divider})`,
    },
  },
}))

export const BoxPlaygroundCardSvg = styled(
  forwardRef<HTMLButtonElement, BoxProps & { bgColor: string }>(function BoxPlaygroundCardSvg(
    { bgColor, ...props },
    ref
  ) {
    return (
      <Box
        {...props}
        style={{
          '--JT-SVG-playground-card-svg-bg': bgColor,
          ...props.style,
        }}
        ref={ref}
      />
    )
  }),
  { name: 'Box-Playground-CardSVG', slot: 'Root' }
)(({ theme: { vars } }) => ({
  padding: '10px',
  display: 'grid',
  placeContent: 'center',
  position: 'relative',
  aspectRatio: '1 / 1',
  color: vars.palette.text.primary,
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
