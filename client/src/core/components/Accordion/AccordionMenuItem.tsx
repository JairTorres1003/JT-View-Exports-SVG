import {
  Accordion,
  AccordionDetails,
  type AccordionDetailsProps,
  AccordionSummary,
  Tooltip,
  Typography,
  type AccordionProps,
  type TooltipProps,
} from '@mui/material'
import { useId, type FC } from 'react'

export interface AccordionMenuItemProps extends AccordionProps {
  label: string
  slotProps?: AccordionProps['slotProps'] & {
    details?: Partial<Omit<AccordionDetailsProps, 'children'>>
    tooltip?: Partial<Omit<TooltipProps, 'title'>>
  }
}

export const AccordionMenuItem: FC<AccordionMenuItemProps> = ({
  children,
  label,
  slotProps = {},
  ...props
}) => {
  const id = useId()

  return (
    <Accordion
      {...props}
      slotProps={{
        heading: slotProps.heading,
        transition: slotProps.transition,
      }}
    >
      <AccordionSummary id={`${id}header`} aria-controls={`${id}content`}>
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
