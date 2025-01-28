import { Box, styled, typographyClasses } from '@mui/material'

export const BoxDevTools = styled(Box, { name: 'DevTools-Box' })(() => ({
  width: '100%',
  minWidth: 170,
  maxWidth: '100%',
  height: '100%',
  backgroundColor: 'var(--JT-SVG-vscode-sideBarTitle-background)',
  display: 'flex',
  flexDirection: 'column',
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
}))
