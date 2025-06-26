import {
  accordionDetailsClasses,
  accordionSummaryClasses,
  Box,
  type BoxProps,
  styled,
  typographyClasses,
} from '@mui/material'
import type { ComponentType } from 'react'

import { devToolsClasses } from './DevTools.classes'

import { accordionMenuItemClasses } from '@/core/components/Accordion'

export const BoxDevTools = styled<ComponentType<BoxProps>>(
  (props) => <Box component='aside' {...props} />,
  {
    name: devToolsClasses.root,
    target: devToolsClasses.root,
  }
)(() => ({
  width: '100%',
  minWidth: 170,
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
    height: 'min-content',
    maxHeight: '100%',
    overflow: 'hidden',
    [`& .${devToolsClasses.accordion}`]: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'var(--JT-SVG-vscode-sideBarTitle-background)',
      maxWidth: '100%',
      overflow: 'hidden',
      '&::before': {
        backgroundColor: 'var(--JT-SVG-vscode-sideBarSectionHeader-border)',
        height: '0.5px',
        opacity: 1,
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
}))
