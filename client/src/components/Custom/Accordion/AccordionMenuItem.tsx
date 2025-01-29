import {
  Accordion,
  AccordionDetails,
  type AccordionDetailsProps,
  AccordionSummary,
  Tooltip,
  Typography,
  type AccordionProps,
} from '@mui/material'
import { useId, type FC } from 'react'
import MiddleEllipsis from 'react-middle-ellipsis'

interface AccordionMenuItemProps extends AccordionProps {
  label: string
  slotProps?: AccordionProps['slotProps'] & {
    details?: AccordionDetailsProps
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
        <MiddleEllipsis>
          <Tooltip placement='top' title={label}>
            <Typography component='span' noWrap>
              {label}
            </Typography>
          </Tooltip>
        </MiddleEllipsis>
      </AccordionSummary>
      <AccordionDetails {...(slotProps.details ?? {})}>{children}</AccordionDetails>
    </Accordion>
  )
}
