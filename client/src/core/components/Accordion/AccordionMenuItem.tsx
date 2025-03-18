import {
  Accordion,
  AccordionDetails,
  type AccordionDetailsProps,
  AccordionSummary,
  Tooltip,
  Typography,
  type AccordionProps,
  type TooltipProps,
  type AccordionSummaryProps,
  Grid2,
  AccordionActions,
  type AccordionActionsProps,
} from '@mui/material'
import cn from 'classnames'
import { forwardRef, useId } from 'react'

import { accordionMenuItemClasses } from './accordionMenuItemClasses'

export interface AccordionMenuItemProps extends AccordionProps {
  label: string
  actions?: React.ReactNode
  slotProps?: AccordionProps['slotProps'] & {
    actions?: Partial<Omit<AccordionActionsProps, 'children' | 'component'>>
    details?: Partial<Omit<AccordionDetailsProps, 'children'>>
    tooltip?: Partial<Omit<TooltipProps, 'title'>>
    summary?: Partial<Omit<AccordionSummaryProps, 'children' | 'component'>>
  }
}

export const AccordionMenuItem = forwardRef<HTMLDivElement, AccordionMenuItemProps>(
  function AccordionMenuItem({ children, actions, label, slotProps = {}, ...props }, ref) {
    const id = useId()

    return (
      <Accordion
        {...props}
        ref={ref}
        slotProps={{
          heading: slotProps.heading,
          transition: slotProps.transition,
        }}
        className={cn(accordionMenuItemClasses.root, props.className)}
      >
        <Grid2
          container
          spacing={0.5}
          alignItems='center'
          className={accordionMenuItemClasses.summary}
          sx={{ padding: 'calc(0 * var(--JT-SVG-spacing)) calc(2 * var(--JT-SVG-spacing))' }}
        >
          <Grid2
            size='grow'
            padding={0}
            id={`${id}header`}
            aria-controls={`${id}content`}
            {...(slotProps.summary ?? {})}
            component={AccordionSummary}
          >
            <Tooltip placement='top' {...(slotProps.tooltip ?? {})} title={label}>
              <Typography component='span' noWrap>
                {label}
              </Typography>
            </Tooltip>
          </Grid2>
          {actions && (
            <Grid2
              size='auto'
              padding={0}
              component={AccordionActions}
              {...(slotProps.actions ?? {})}
              className={cn(accordionMenuItemClasses.actions, slotProps.actions?.className)}
            >
              {actions}
            </Grid2>
          )}
        </Grid2>
        <AccordionDetails
          {...(slotProps.details ?? {})}
          className={cn(accordionMenuItemClasses.details, slotProps.details?.className)}
        >
          {children}
        </AccordionDetails>
      </Accordion>
    )
  }
)
