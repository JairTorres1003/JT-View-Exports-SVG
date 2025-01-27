import { type ViewExportSVG } from '@api/interfaces/ViewExportsSVG'
import {
  Accordion as AccordionMui,
  AccordionSummary,
  Tooltip,
  Typography,
  type AccordionProps,
} from '@mui/material'
import { type FC } from 'react'
import MiddleEllipsis from 'react-middle-ellipsis'

import { CardSvg } from '../../Cards'
import RenderSvg from '../RenderSvg'

import { BoxAccordionDetails } from './Accordion.style'

export const Accordion: FC<
  Omit<AccordionProps, 'component' | 'children'> & { component: ViewExportSVG }
> = ({ component, ...props }) => {
  return (
    <AccordionMui disableGutters {...props}>
      <AccordionSummary
        id={`${component.groupKind.id}-header`}
        aria-controls={`${component.groupKind.id}-content`}
      >
        <MiddleEllipsis>
          <Tooltip placement='top' title={component.groupKind.label}>
            <Typography component='span' noWrap>
              {component.groupKind.label}
            </Typography>
          </Tooltip>
        </MiddleEllipsis>
      </AccordionSummary>
      <BoxAccordionDetails>
        {component.components.map(({ name, location, ...restComponent }) => (
          <CardSvg key={name} icon={{ name, location }}>
            <RenderSvg {...restComponent} name={name} location={location} />
          </CardSvg>
        ))}
      </BoxAccordionDetails>
    </AccordionMui>
  )
}
