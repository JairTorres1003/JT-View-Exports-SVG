import { Box, styled } from '@mui/material'

import { recentContainerClasses } from './RecentContainer.classes'

export const BoxRecentContainer = styled(Box, {
  name: recentContainerClasses.root,
  target: recentContainerClasses.root,
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflowY: 'auto',
  [`& .${recentContainerClasses.details}`]: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  [`& .${recentContainerClasses.detailsTitle}`]: {
    width: '100%',
    padding: '10px',
    background: 'var(--JT-SVG-vscode-sideBarSectionHeader-background)',
    borderBottom: '1px solid var(--JT-SVG-vscode-panel-border)',
  },
  [`& .${recentContainerClasses.detailsContent}`]: {
    display: 'grid',
    gridAutoRows: 'auto',
    gridAutoColumns: 'max-content',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gap: '12px',
  },
}))
