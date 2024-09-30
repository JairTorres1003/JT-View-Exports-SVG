import { Accordion, AccordionDetails, AccordionSummary, Tooltip, Typography } from '@mui/material'
import MiddleEllipsis from 'react-middle-ellipsis'

import { CardSvg } from '../Cards'
import RenderSvg from '../SVG/RenderSvg'

import { BoxContainerComponents } from './index.style'

import { useContainerComponents } from '@/hooks/components/useContainerComponents'
import { useSelector } from '@/providers/redux/store'

export const ContainerComponents = (): React.ReactNode => {
  const { isExpanded, toggleExpanded } = useContainerComponents()
  const { components } = useSelector((state) => state.svg)

  return (
    <BoxContainerComponents>
      {components.map((item) => (
        <Accordion
          disableGutters
          key={item.groupKind.id}
          onChange={toggleExpanded(item.groupKind.id)}
          expanded={isExpanded.includes(item.groupKind.id)}
        >
          <AccordionSummary
            id={`${item.groupKind.id}-header`}
            aria-controls={`${item.groupKind.id}-content`}
          >
            <MiddleEllipsis>
              <Tooltip placement='top' title={item.groupKind.label}>
                <Typography component='span' noWrap>
                  {item.groupKind.label}
                </Typography>
              </Tooltip>
            </MiddleEllipsis>
          </AccordionSummary>
          <AccordionDetails className='BoxContainerComponents__accordion-details'>
            {item.components.map((component) => (
              <CardSvg key={component.name} title={component.name}>
                <RenderSvg {...component} />
              </CardSvg>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </BoxContainerComponents>
  )
}
