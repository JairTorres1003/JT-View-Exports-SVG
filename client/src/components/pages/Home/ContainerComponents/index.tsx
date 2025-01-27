import { useContainerComponents } from '@home/hooks/components/useContainerComponents'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material'
import MiddleEllipsis from 'react-middle-ellipsis'

import { CardSvg } from '../Cards'
import RenderSvg from '../SVG/RenderSvg'

import { BoxContainerComponents } from './index.style'

import { IconWarning } from '@/assets/icons/indicators'
import { useSelector } from '@/providers/redux/store'

export const ContainerComponents = (): React.ReactNode => {
  const { isExpanded, toggleExpanded } = useContainerComponents()
  const { components, errors } = useSelector((state) => state.svg)

  if (errors !== undefined) {
    return (
      <BoxContainerComponents>
        <ListItem component='div' className='BoxContainerComponents__error'>
          <ListItemIcon>
            <IconWarning size='100%' />
          </ListItemIcon>
          <ListItemText primary={errors.message} />
        </ListItem>
      </BoxContainerComponents>
    )
  }

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
            {item.components.map(({ name, location, ...component }) => (
              <CardSvg key={name} icon={{ name, location }}>
                <RenderSvg {...component} name={name} location={location} />
              </CardSvg>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </BoxContainerComponents>
  )
}
