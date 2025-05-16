import { Box, type BoxProps, styled } from '@mui/material'
import { forwardRef } from 'react'

import { playgroundClasses } from './Playground.classes'

import bgTransparent from '@/assets/images/bg-transparent.png'

export const BoxPlayground = styled(Box, {
  name: playgroundClasses.root,
  target: playgroundClasses.root,
})(({ theme: { palette } }) => ({
  padding: '12px 22px',
  [`& .${playgroundClasses.card}`]: {
    display: 'flex',
    flexDirection: 'column',
    borderColor: `var(--JT-SVG-vscode-panel-border, ${palette.divider})`,
    backgroundColor: 'var(--JT-SVG-vscode-editor-background)',
    [`& .${playgroundClasses.tools}`]: {
      padding: '4px 8px',
      alignItems: 'center',
    },
    [`& .${playgroundClasses.divider}`]: {
      borderColor: `var(--JT-SVG-vscode-panel-border, ${palette.divider})`,
    },
  },
}))

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
