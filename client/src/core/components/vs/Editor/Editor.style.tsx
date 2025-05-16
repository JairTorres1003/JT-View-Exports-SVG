import { Box, type BoxProps, linearProgressClasses, styled } from '@mui/material'
import { forwardRef } from 'react'

import { editorClasses } from './Editor.classes'

import { linearProgressBarLoad } from '@/styles/keyframes'

export const BoxEditor = styled(
  forwardRef<HTMLDivElement, BoxProps>(function BoxEditor(props, ref) {
    return <Box ref={ref} {...props} />
  }),
  { name: editorClasses.root, target: editorClasses.root }
)(({ theme: { vars } }) => ({
  minHeight: 150,
  width: '100%',
  position: 'relative',
  '--JT-SVG-monaco-margin': '10px',
  [`& .${editorClasses.editor}`]: {
    minHeight: 'inherit',
    height: '100%',
    width: '100%',
    resize: 'vertical',
    overflow: 'auto',
  },
  [`& .${editorClasses.loader}`]: {
    minHeight: 'inherit',
    height: '100%',
    maxWidth: '200px',
    width: '100%',
    display: 'flex',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '25px',
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    [`& .${linearProgressClasses.root}`]: {
      width: '100%',
      height: '20px',
      borderRadius: '10px',
      backgroundColor: `var(--JT-SVG-vscode-sideBarSectionHeader-background, ${vars.palette.LinearProgress.primaryBg})`,
      border: `1px solid ${vars.palette.divider}`,
      '&:before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'rgb(255 255 255 / 5%)',
        inset: 0,
        zIndex: 0,
      },
      [`& .${linearProgressClasses.bar}`]: {
        backgroundImage:
          'linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)',
        backgroundSize: '1rem 1rem',
        borderRadius: '10px',
        backgroundColor: 'var(--JT-SVG-vscode-sideBarTitle-background)',
        animation: `${linearProgressBarLoad} 4s linear infinite`,
        willChange: 'background-position',
        border: `1px solid ${vars.palette.divider}`,
        borderBottom: 'none',
        borderTop: 'none',
      },
    },
  },
}))
