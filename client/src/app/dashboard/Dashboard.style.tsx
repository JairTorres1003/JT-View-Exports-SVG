import { Box, styled } from '@mui/material'

import { dashboardPageClasses } from './Dashboard.classes'

export const BoxDashboardPage = styled(Box, {
  name: dashboardPageClasses.root,
  target: dashboardPageClasses.root,
})(() => ({
  display: 'flex',
  height: '100%',
  [`& .${dashboardPageClasses.content}`]: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingBottom: '16px',
    '& > div:not([class]) > div': {
      transition: 'background-color 0.1s ease-out',
      width: 'var(--JT-SVG-vscode-sash-size) !important',
      right: '0 !important',
      '&:hover': {
        backgroundColor: 'var(--JT-SVG-vscode-sash-hoverBorder)',
        width: 'var(--JT-SVG-vscode-sash-hover-size) !important',
        right: '0 !important',
      },
    },
  },
}))
