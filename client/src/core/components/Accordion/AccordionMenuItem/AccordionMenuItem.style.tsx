import {
  accordionSummaryClasses,
  Grid,
  type GridProps,
  linearProgressClasses,
  styled,
} from '@mui/material'
import cn from 'classnames'

import { accordionMenuItemClasses } from './AccordionMenuItem.classes'

import { progress } from '@/styles/keyframes'

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
)(({ theme: { vars, palette } }) => ({
  padding: 0,
  position: 'relative',
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
  [`& .${accordionMenuItemClasses.loading}`]: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 1,
    height: 2,
    [`& .${linearProgressClasses.root}`]: {
      height: 2,
      backgroundColor: 'transparent',
    },
    [`& .${linearProgressClasses.bar}`]: {
      width: '2%',
      backgroundColor: `var(--JT-SVG-vscode-progressBar-background, ${palette.primary.main})`,
      animation: `${progress} 4s infinite`,
      animationTimingFunction: 'steps(100)',
    },
  },
}))
