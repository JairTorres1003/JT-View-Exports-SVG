import { Box, listItemIconClasses, styled } from '@mui/material'

export const BoxContainerComponents = styled(Box, { name: 'ContainerComponents-Box' })(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflowY: 'auto',
    '& .BoxContainerComponents__error': {
      padding: '8px 16px',
      minHeight: '38px',
      display: 'flex',
      gap: '4px',
      [`& .${listItemIconClasses.root}`]: {
        height: theme.typography.fontSize + 2,
        minWidth: 24,
      },
    },
  })
)
