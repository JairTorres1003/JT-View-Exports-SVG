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
  Box,
  LinearProgress,
  type LinearProgressProps,
} from '@mui/material'
import cn from 'classnames'
import { forwardRef, useId, useState } from 'react'

import { accordionMenuItemClasses } from './AccordionMenuItem.classes'
import { BoxAccordionMenuItem } from './AccordionMenuItem.style'

export interface AccordionMenuItemProps extends AccordionProps {
  label: string
  actions?: React.ReactNode
  /**
   * @default false
   */
  enableEmptyActions?: boolean
  /**
   * Hide actions when the accordion is collapsed
   * @default false
   */
  hideActionsWhenCollapsed?: boolean
  slotProps?: AccordionProps['slotProps'] & {
    actions?: Partial<Omit<AccordionActionsProps, 'children' | 'component'>>
    details?: Partial<Omit<AccordionDetailsProps, 'children'>>
    tooltip?: Partial<Omit<TooltipProps, 'title'>>
    summary?: Partial<Omit<AccordionSummaryProps, 'children' | 'component'>>
    loading?: Partial<LinearProgressProps>
  }
  loading?: boolean
  loadingComponent?: React.ReactNode
}

const AccordionMenuItem = forwardRef<HTMLDivElement, AccordionMenuItemProps>(
  function AccordionMenuItem(
    {
      children,
      actions,
      label,
      slotProps = {},
      enableEmptyActions = false,
      hideActionsWhenCollapsed = false,
      loading = false,
      loadingComponent,
      ...props
    },
    ref
  ) {
    const id = useId()
    const [expanded, setExpanded] = useState(props.defaultExpanded ?? false)

    return (
      <Accordion
        expanded={expanded}
        {...props}
        ref={ref}
        onChange={(_, isExpanded) => {
          setExpanded(isExpanded)
          props.onChange?.(_, isExpanded)
        }}
        slotProps={{
          heading: slotProps.heading,
          transition: slotProps.transition,
        }}
        className={cn(accordionMenuItemClasses.root, props.className)}
      >
        <BoxAccordionMenuItem
          className={cn({
            [accordionMenuItemClasses.withActions]:
              !expanded && hideActionsWhenCollapsed ? false : (actions ?? enableEmptyActions),
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
              style={{
                ...slotProps.actions?.style,
                display:
                  !expanded && hideActionsWhenCollapsed
                    ? 'none'
                    : slotProps.actions?.style?.display,
              }}
              className={cn(accordionMenuItemClasses.actions, slotProps.actions?.className)}
            >
              {actions}
            </Grid>
          )}

          {loading && (
            <Box className={accordionMenuItemClasses.loading}>
              {loadingComponent ?? <LinearProgress {...slotProps.loading} />}
            </Box>
          )}
        </BoxAccordionMenuItem>
        <AccordionDetails
          {...(slotProps.details ?? {})}
          id={`${id}content`}
          className={cn(accordionMenuItemClasses.details, slotProps.details?.className)}
        >
          {children}
        </AccordionDetails>
      </Accordion>
    )
  }
)

export default AccordionMenuItem
