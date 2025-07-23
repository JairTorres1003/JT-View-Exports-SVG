import { accordionSummaryClasses, Grid, type GridProps, styled } from '@mui/material'
import cn from 'classnames'

import { accordionMenuItemClasses } from './AccordionMenuItem.classes'

export const BoxAccordionMenuItem = styled(
  (props: GridProps) => (
    <Grid
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
  '&:hover': {
    backgroundColor: 'var(--JT-SVG-vscode-list-hoverBackground)',
  },
  [`& .${accordionSummaryClasses.root}:hover`]: {
    backgroundColor: 'transparent',
  },
  [`&.${accordionMenuItemClasses.withActions}`]: {
    paddingRight: `calc(2 * ${vars.spacing})`,
    [`& .${accordionSummaryClasses.root}`]: {
      paddingRight: 0,
    },
  },
}))
