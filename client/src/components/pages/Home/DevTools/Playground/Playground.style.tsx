import { Box, styled } from '@mui/material'

export const BoxPlayground = styled(Box, { name: 'Playground-Box' })(({ theme: { palette } }) => ({
  padding: '12px 22px',
  '& .BoxPlayground__card': {
    display: 'flex',
    flexDirection: 'column',
    borderColor: `var(--JT-SVG-vscode-input-border, ${palette.divider})`,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    '& .BoxPlayground__card__svg': {
      padding: '10px',
      display: 'grid',
      placeContent: 'center',
      position: 'relative',
      aspectRatio: '1 / 1',
      color: 'var(--JT-SVG-vscode-input-background, currentColor)',
      resize: 'vertical',
      overflow: 'auto',
    },
    '& .BoxPlayground__card__tools': {
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
    },
  },
}))
