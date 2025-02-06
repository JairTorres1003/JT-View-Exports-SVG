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
} from '@mui/material'
import { forwardRef, useId } from 'react'

export interface AccordionMenuItemProps extends AccordionProps {
  label: string
  slotProps?: AccordionProps['slotProps'] & {
    details?: Partial<Omit<AccordionDetailsProps, 'children'>>
    tooltip?: Partial<Omit<TooltipProps, 'title'>>
    summary?: Partial<Omit<AccordionSummaryProps, 'children'>>
  }
}

export const AccordionMenuItem = forwardRef<HTMLDivElement, AccordionMenuItemProps>(
  function AccordionMenuItem({ children, label, slotProps = {}, ...props }, ref) {
    const id = useId()

    return (
      <Accordion
        {...props}
        ref={ref}
        slotProps={{
          heading: slotProps.heading,
          transition: slotProps.transition,
        }}
      >
        <AccordionSummary
          id={`${id}header`}
          aria-controls={`${id}content`}
          {...(slotProps.summary ?? {})}
        >
          <Tooltip placement='top' {...(slotProps.tooltip ?? {})} title={label}>
            <Typography component='span' noWrap>
              {label}
            </Typography>
          </Tooltip>
        </AccordionSummary>
        <AccordionDetails {...(slotProps.details ?? {})}>{children}</AccordionDetails>
      </Accordion>
    )
  }
)
