import {
  accordionDetailsClasses,
  accordionSummaryClasses,
  Box,
  type BoxProps,
  collapseClasses,
  styled,
  typographyClasses,
} from '@mui/material'
import type { ComponentType } from 'react'

import { accordionMenuItemClasses } from '@/core/components/Accordion'

import { devToolsClasses } from './DevTools.classes'

export const BoxDevTools = styled<ComponentType<BoxProps>>((props) => <Box {...props} />, {
  name: devToolsClasses.root,
  target: devToolsClasses.root,
})(() => ({
  width: '100%',
  minWidth: 190,
  maxWidth: '100%',
  height: '100%',
  backgroundColor: 'var(--JT-SVG-vscode-sideBarTitle-background)',
  // borderLeft: '1px solid var(--JT-SVG-vscode-panel-border)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  [`& .${devToolsClasses.header}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 8px',
    height: 35,
    minHeight: 35,
    overflow: 'hidden',
    // borderBottom: '1px solid var(--JT-SVG-vscode-panel-border)',
    color: 'var(--JT-SVG-palette-text-primary)',
    [`& > .${typographyClasses.h2}.${devToolsClasses.title}`]: {
      paddingLeft: '12px',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      textTransform: 'uppercase',
      userSelect: 'none',
    },
  },
  [`& .${devToolsClasses.content}`]: {
    display: 'grid',
    height: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
    [`& .${devToolsClasses.accordion}`]: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'var(--JT-SVG-vscode-sideBarTitle-background)',
      maxWidth: '100%',
      height: '100%',
      overflow: 'hidden',
      '&::before': {
        backgroundColor: 'var(--JT-SVG-vscode-sideBarSectionHeader-border)',
        height: '0.5px',
        opacity: 1,
      },
      [`& .${collapseClasses.root}`]: {
        overflow: 'auto',
      },
      [`& .${accordionMenuItemClasses.summary}`]: {
        padding: 0,
        backgroundColor: 'var(--JT-SVG-vscode-sideBarSectionHeader-background)',
      },
      [`& .${accordionSummaryClasses.root}`]: {
        minHeight: 22,
        padding: 0,
        textTransform: 'uppercase',
        backgroundColor: 'transparent',
        [`& .${accordionSummaryClasses.content} > .${typographyClasses.root}`]: {
          fontWeight: 'bold',
        },
      },
      [`& .${accordionDetailsClasses.root}`]: {
        padding: 0,
      },
    },
  },
  [`& .${devToolsClasses.separator}`]: {
    transition: 'background-color 0.1s ease-out',
    height: 'var(--JT-SVG-vscode-sash-size)',
    marginTop: 'calc(var(--JT-SVG-vscode-sash-size) * -1)',
    zIndex: 1,
    outline: 'none',
    '&:hover': {
      backgroundColor: 'var(--JT-SVG-vscode-sash-hoverBorder)',
    },
  },
  // [`& .${devToolsClasses.separatorDisabled} .${devToolsClasses.panel} *`]: {
  //   cursor: 'default !important',
  //   button: { cursor: 'pointer !important' },
  // },
}))
