import { Box, styled } from '@mui/material'

import { containerIconsClasses } from './ContainerIcons.classes'

export const BoxContainerIcons = styled(Box, {
  name: containerIconsClasses.root,
  target: containerIconsClasses.root,
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflowY: 'auto',
  [`& .${containerIconsClasses.details}`]: {
    display: 'grid',
    gridAutoRows: 'auto',
    gridAutoColumns: 'max-content',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gap: '12px',
  },
}))
