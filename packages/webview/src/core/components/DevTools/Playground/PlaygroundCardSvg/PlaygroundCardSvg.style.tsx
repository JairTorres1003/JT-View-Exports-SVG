import { Box, type BoxProps, styled } from '@mui/material'
import { forwardRef } from 'react'

import bgTransparent from '@/assets/images/bg-transparent.png'

import { playgroundClasses } from '../Playground.classes'

export const BoxPlaygroundCardSvg = styled(
  forwardRef<HTMLButtonElement, BoxProps & { bgColor: string }>(function BoxPlaygroundCardSvg(
    { bgColor, style, ...props },
    ref
  ) {
    return (
      <Box
        {...props}
        ref={ref}
        style={{
          '--JT-SVG-playground-card-svg-bg': bgColor,
          ...style,
        }}
      />
    )
  }),
  {
    name: playgroundClasses.svgCard,
    target: playgroundClasses.svgCard,
  }
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
