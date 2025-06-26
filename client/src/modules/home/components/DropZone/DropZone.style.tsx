import { Box, type BoxProps, styled } from '@mui/material'
import type { ComponentType } from 'react'

import { dropZoneClasses } from './DropZone.classes'

export const BoxDropZone = styled<ComponentType<BoxProps>>(
  (props) => <Box component='section' {...props} />,
  {
    name: dropZoneClasses.root,
    target: dropZoneClasses.root,
  }
)(({ theme: { shadows, vars } }) => ({
  display: 'flex',
  flexDirection: 'column',
  color: vars.palette.text.primary,
  padding: '16px',
  [`& .${dropZoneClasses.border}`]: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '5px',
    padding: '32px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&::before': {
      content: '""',
      position: 'absolute',
      border:
        '3px dashed var(--JT-SVG-vscode-sideBarSectionHeader-border, var(--JT-SVG-palette-text-primary, currentColor))',
      inset: -1,
      borderRadius: '5px',
    },
  },
  [`& .${dropZoneClasses.content}`]: {
    display: 'flex',
    flexDirection: 'column',
    height: 'fit-content',
    gap: '8px',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '440px',
    zIndex: 1,
  },
  [`& .${dropZoneClasses.title}`]: {
    fontSize: 14,
    color: vars.palette.text.primary,
    marginBottom: '12px',
  },
  [`& .${dropZoneClasses.button}`]: {
    textTransform: 'Capitalize',
    maxWidth: '230px',
    fontWeight: 'bold',
    padding: '12px 16px',
    fontSize: 16,
    background: 'var(--JT-SVG-vscode-sideBarSectionHeader-background)',
    border: '1px solid var(--JT-SVG-vscode-sideBarSectionHeader-border, rgb(255 255 255 / 16%))',
    boxShadow: shadows[1],
    '&:before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      background: 'rgb(255 255 255 / 2%)',
      borderRadius: 'inherit',
    },
    '&:hover:before': {
      background: 'rgb(255 255 255 / 6%)',
    },
  },
  [`& .${dropZoneClasses.text}`]: {
    fontSize: 11,
    color: vars.palette.text.primary,
  },
}))
