import { Box, styled } from '@mui/material'

export const BoxCardSvg = styled(Box, { name: 'Box-CardSvg', slot: 'Root' })(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '4px',
  cursor: 'pointer',
  '& .Box-CardSvg__card': {
    padding: '10px',
    display: 'grid',
    placeContent: 'center',
    height: '66px',
    position: 'relative',
    color: 'var(--JT-SVG-vscode-input-background, currentColor)',
    '& > :first-of-type': {
      width: 'calc(100% - 30px) !important',
      height: 'calc(100% - 34px) !important',
      position: 'absolute !important',
      inset: '0 !important',
      margin: 'auto !important',
    },
  },
}))
