import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useSelector } from 'react-redux'

import { CardSvg } from '../Cards/CardSvg'
import RenderSvg from '../SVG/RenderSvg'

import { BoxContainerComponents } from './ContainerComponents.style'

import { IconWarning } from '@/assets/icons/indicators'
import { AccordionMenuItem } from '@/core/components/Accordion'
import { useContainerComponents } from '@/modules/Home/hooks/useContainerComponents'

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
        <AccordionMenuItem
          key={item.groupKind.id}
          label={item.groupKind.label}
          onChange={toggleExpanded(item.groupKind.id)}
          expanded={isExpanded.includes(item.groupKind.id)}
          slotProps={{ details: { className: 'BoxContainerComponents__details' } }}
        >
          {item.components.map(({ name, ...restComponent }) => (
            <CardSvg key={name} component={{ ...restComponent, name }}>
              <RenderSvg {...restComponent} name={name} />
            </CardSvg>
          ))}
        </AccordionMenuItem>
      ))}
    </BoxContainerComponents>
  )
}
