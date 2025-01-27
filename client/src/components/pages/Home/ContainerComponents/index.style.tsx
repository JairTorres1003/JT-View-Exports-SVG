import { Box, listItemIconClasses, styled } from '@mui/material'

export const BoxContainerComponents = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflowY: 'auto',
  '& .BoxContainerComponents__accordion-details': {
    display: 'grid',
    gridAutoRows: 'auto',
    gridAutoColumns: 'max-content',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gap: '12px',
  },
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
}))
