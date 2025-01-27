import { AccordionDetails, styled } from '@mui/material'

export const BoxAccordionDetails = styled(AccordionDetails, { name: 'AccordionDetails-Box' })(
  () => ({
    display: 'grid',
    gridAutoRows: 'auto',
    gridAutoColumns: 'max-content',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gap: '12px',
  })
)
