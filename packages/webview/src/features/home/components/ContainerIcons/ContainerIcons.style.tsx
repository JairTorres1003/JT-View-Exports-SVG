import { Box, type BoxProps, styled } from '@mui/material'
import type { ComponentType } from 'react'

import { containerIconsClasses } from './ContainerIcons.classes'

export const BoxContainerIcons = styled<ComponentType<BoxProps>>(
  (props) => <Box component='section' {...props} />,
  {
    name: containerIconsClasses.root,
    target: containerIconsClasses.root,
  }
)(() => ({
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
  [`& .${containerIconsClasses.actions}`]: {
    display: 'none',
  },
  [`.${containerIconsClasses.accordion}:hover .${containerIconsClasses.actions}`]: {
    display: 'flex',
  },
}))
