import { Box, styled } from '@mui/material'

import { recentFavoriteContainerClasses } from './RecentFavoriteContainer.classes'

export const BoxRecentFavoriteContainer = styled(Box, {
  name: recentFavoriteContainerClasses.root,
  target: recentFavoriteContainerClasses.root,
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflowY: 'auto',
  [`& .${recentFavoriteContainerClasses.details}`]: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  [`& .${recentFavoriteContainerClasses.detailsTitle}`]: {
    width: '100%',
    padding: '10px',
    background: 'var(--JT-SVG-vscode-sideBarSectionHeader-background)',
    borderBottom: '1px solid var(--JT-SVG-vscode-panel-border)',
  },
  [`& .${recentFavoriteContainerClasses.detailsContent}`]: {
    display: 'grid',
    gridAutoRows: 'auto',
    gridAutoColumns: 'max-content',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gap: '12px',
  },
}))
