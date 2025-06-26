import { Box, type BoxProps, listItemIconClasses, styled } from '@mui/material'
import type { ComponentType } from 'react'

import { containerComponentsClasses } from './ContainerComponents.classes'

export const BoxContainerComponents = styled<ComponentType<BoxProps>>(
  (props) => <Box component='section' {...props} />,
  {
    name: containerComponentsClasses.root,
    target: containerComponentsClasses.root,
  }
)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflowY: 'auto',
  [`& .${containerComponentsClasses.error}`]: {
    padding: '8px 16px',
    minHeight: '38px',
    display: 'flex',
    gap: '4px',
    [`& .${listItemIconClasses.root}`]: {
      height: theme.typography.fontSize + 2,
      minWidth: 24,
    },
  },
  [`& .${containerComponentsClasses.details}`]: {
    display: 'grid',
    gridAutoRows: 'auto',
    gridAutoColumns: 'max-content',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gap: '12px',
  },
}))
