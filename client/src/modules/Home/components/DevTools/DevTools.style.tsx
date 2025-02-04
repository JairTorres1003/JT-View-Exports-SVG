import {
  accordionDetailsClasses,
  accordionSummaryClasses,
  Box,
  collapseClasses,
  styled,
  typographyClasses,
} from '@mui/material'

export const BoxDevTools = styled(Box, { name: 'Box-DevTools' })(() => ({
  width: '100%',
  minWidth: 170,
  maxWidth: '100%',
  height: '100%',
  backgroundColor: 'var(--JT-SVG-vscode-sideBarTitle-background)',
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
      overflow: 'hidden',
      maxHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      '&::before': {
        display: 'none',
      },
      [`& .${collapseClasses.wrapper}`]: {
        maxHeight: '100%',
        [`& .${collapseClasses.wrapperInner} > div[role='region']`]: {
          overflowY: 'auto',
          maxHeight: '100%',
        },
      },
      [`& .${accordionSummaryClasses.root}`]: {
        minHeight: 22,
        textTransform: 'uppercase',
        backgroundColor: 'var(--JT-SVG-vscode-sideBarSectionHeader-background)',
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
