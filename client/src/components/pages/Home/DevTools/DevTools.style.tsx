import {
  accordionDetailsClasses,
  accordionSummaryClasses,
  Box,
  styled,
  typographyClasses,
} from '@mui/material'

export const BoxDevTools = styled(Box, { name: 'DevTools-Box' })(() => ({
  width: '100%',
  minWidth: 170,
  maxWidth: '100%',
  height: '100%',
  backgroundColor: 'var(--JT-SVG-vscode-sideBarTitle-background)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  '& .BoxDevTools__header': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 8px',
    height: 35,
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
  '& .BoxDevTools__content': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    '& .BoxDevTools__content__accordion': {
      '&::before': {
        display: 'none',
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
