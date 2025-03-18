import { accordionSummaryClasses, Grid2, type Grid2Props, styled } from '@mui/material'
import cn from 'classnames'

import { accordionMenuItemClasses } from './accordionMenuItemClasses'

export const BoxAccordionMenuItem = styled(
  (props: Grid2Props) => (
    <Grid2
      container
      spacing={0.5}
      alignItems='center'
      {...props}
      className={cn(accordionMenuItemClasses.summary, props.className)}
    />
  ),
  {
    name: 'Box-AccordionMenuItem',
    slot: 'Root',
  }
)(({ theme: { vars } }) => ({
  padding: 0,
  [`&.${accordionMenuItemClasses.withActions}`]: {
    paddingRight: `calc(2 * ${vars.spacing})`,
    [`& .${accordionSummaryClasses.root}`]: {
      paddingRight: 0,
    },
  },
}))
