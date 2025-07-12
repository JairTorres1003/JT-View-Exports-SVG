import { Box, styled } from '@mui/material'

import { playgroundClasses } from './Playground.classes'

export const BoxPlayground = styled(Box, {
  name: playgroundClasses.root,
  target: playgroundClasses.root,
})(({ theme: { palette } }) => ({
  padding: '12px 22px',
  [`& .${playgroundClasses.card}`]: {
    display: 'flex',
    flexDirection: 'column',
    borderColor: `var(--JT-SVG-vscode-panel-border, ${palette.divider})`,
    backgroundColor: 'var(--JT-SVG-vscode-editor-background)',
    [`& .${playgroundClasses.tools}`]: {
      padding: '4px 8px',
      alignItems: 'center',
    },
    [`& .${playgroundClasses.divider}`]: {
      borderColor: `var(--JT-SVG-vscode-panel-border, ${palette.divider})`,
    },
  },
}))
