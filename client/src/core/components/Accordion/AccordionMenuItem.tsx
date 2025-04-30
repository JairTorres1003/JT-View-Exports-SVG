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
  Grid,
  AccordionActions,
  type AccordionActionsProps,
} from '@mui/material'
import cn from 'classnames'
import { forwardRef, useId } from 'react'

import { BoxAccordionMenuItem } from './AccordionMenuItem.style'
import { accordionMenuItemClasses } from './accordionMenuItemClasses'

export interface AccordionMenuItemProps extends AccordionProps {
  label: string
  actions?: React.ReactNode
  /**
   * @default false
   */
  enableEmptyActions?: boolean
  slotProps?: AccordionProps['slotProps'] & {
    actions?: Partial<Omit<AccordionActionsProps, 'children' | 'component'>>
    details?: Partial<Omit<AccordionDetailsProps, 'children'>>
    tooltip?: Partial<Omit<TooltipProps, 'title'>>
    summary?: Partial<Omit<AccordionSummaryProps, 'children' | 'component'>>
  }
}

export const AccordionMenuItem = forwardRef<HTMLDivElement, AccordionMenuItemProps>(
  function AccordionMenuItem(
    { children, actions, label, slotProps = {}, enableEmptyActions = false, ...props },
    ref
  ) {
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
        <BoxAccordionMenuItem
          className={cn({
            [accordionMenuItemClasses.withActions]: actions ?? enableEmptyActions,
          })}
        >
          <Grid
            size='grow'
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
          </Grid>
          {(actions ?? enableEmptyActions) && (
            <Grid
              size='auto'
              padding={0}
              component={AccordionActions}
              {...(slotProps.actions ?? {})}
              className={cn(accordionMenuItemClasses.actions, slotProps.actions?.className)}
            >
              {actions}
            </Grid>
          )}
        </BoxAccordionMenuItem>
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
