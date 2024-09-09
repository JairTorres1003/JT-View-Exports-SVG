import { Box, styled } from '@mui/material'

export const BoxContainerComponents = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  '& .BoxContainerComponents__accordion-details': {
    display: 'grid',
    gridAutoRows: 'auto',
    gridAutoColumns: 'max-content',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gap: '12px',
  },
}))
