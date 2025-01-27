import { Box, styled } from '@mui/material'

export const BoxHomePage = styled(Box, { name: 'HomePage-Box' })(() => ({
  display: 'flex',
  height: '100%',
  '& .BoxHomePage__content': {
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
