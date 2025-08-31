import { Box, type BoxProps, styled } from '@mui/material'
import type { ComponentType } from 'react'

import { fileListClasses } from './FileList.classes'

export const BoxFileList = styled<ComponentType<BoxProps>>(
  (props) => <Box component='section' {...props} />,
  {
    name: fileListClasses.root,
    target: fileListClasses.root,
  }
)(({ theme: { shape } }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '24px',
  height: '100%',
  width: '100%',
  overflowY: 'auto',
  justifyContent: 'center',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  padding: '24px 24px 8px',
  [`& .${fileListClasses.removeButton}`]: {
    position: 'absolute',
    display: 'none',
    padding: 0,
    top: '4px',
    right: '4px',
    backgroundColor: 'rgb(255 255 255 / 0.5)',
    borderRadius: '50%',
    zIndex: 1,
    svg: {
      stroke: 'currentColor',
      strokeWidth: 1,
    },
  },
  [`& .${fileListClasses.card}`]: {
    position: 'relative',
    borderRadius: `${shape.borderRadius}px`,
    border: `1px solid var(--JT-SVG-vscode-sideBarSectionHeader-border)`,
    backgroundColor: `var(--JT-SVG-vscode-sideBarSectionHeader-background)`,
    height: '130px',
    width: '110px',
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    svg: {
      flex: 1,
    },
    '&:hover': {
      [`& .${fileListClasses.removeButton}`]: {
        display: 'flex',
      },
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: 'rgb(255 255 255 / 4%)',
      inset: 0,
      zIndex: 0,
    },
  },
}))
