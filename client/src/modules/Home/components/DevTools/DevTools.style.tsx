import {
  accordionDetailsClasses,
  accordionSummaryClasses,
  Box,
  styled,
  typographyClasses,
} from '@mui/material'

export const BoxDevTools = styled(Box, { name: 'Box-DevTools' })(() => ({
  width: '100%',
  minWidth: 170,
  maxWidth: '100%',
  height: '100%',
  backgroundColor: 'var(--JT-SVG-vscode-sideBarTitle-background)',
  borderLeft: '1px solid var(--JT-SVG-vscode-panel-border)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  '& .Box-DevTools__header': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 8px',
    height: 35,
    minHeight: 35,
    overflow: 'hidden',
    borderBottom: '1px solid var(--JT-SVG-vscode-panel-border)',
    [`& > .${typographyClasses.h2}`]: {
      paddingLeft: '12px',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      textTransform: 'uppercase',
      userSelect: 'none',
    },
  },
  '& .Box-DevTools__content': {
    display: 'grid',
    height: 'min-content',
    maxHeight: '100%',
    overflow: 'hidden',
    '& .Box-DevTools__content__accordion': {
      display: 'flex',
      flexDirection: 'column',
      '&::before': {
        backgroundColor: 'var(--JT-SVG-vscode-sideBarSectionHeader-border)',
        height: '0.5px',
        opacity: 1,
      },
      [`& .${accordionSummaryClasses.root}`]: {
        minHeight: 22,
        textTransform: 'uppercase',
        backgroundColor: 'var(--JT-SVG-vscode-sideBarSectionHeader-background)',
        padding: 0,
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
