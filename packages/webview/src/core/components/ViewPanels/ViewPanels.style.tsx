import { Box, styled } from '@mui/material'

import { viewPanelsClasses } from './ViewPanels.classes'

export const BoxViewPanels = styled(Box, {
  name: viewPanelsClasses.root,
  target: viewPanelsClasses.root,
})(() => ({
  display: 'flex',
  height: '100%',
  [`& .${viewPanelsClasses.separator}`]: {
    transition: 'background-color 0.1s ease-out',
    width: 'var(--JT-SVG-vscode-sash-size)',
    marginLeft: 'calc(var(--JT-SVG-vscode-sash-size) * -1)',
    outline: 'none',
    zIndex: 1,
    '&:hover': {
      backgroundColor: 'var(--JT-SVG-vscode-sash-hoverBorder)',
    },
  },
  [`& .${viewPanelsClasses.mainPanel}`]: {
    paddingBottom: '16px',
  },
}))
