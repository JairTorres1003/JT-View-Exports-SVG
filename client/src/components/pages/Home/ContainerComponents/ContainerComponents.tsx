import { AccordionMenuItem } from '@custom/components/Accordion'
import { useContainerComponents } from '@home/hooks/components/useContainerComponents'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'

import { CardSvg } from '../Cards'
import RenderSvg from '../SVG/RenderSvg'

import { BoxContainerComponents } from './ContainerComponents.style'

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
        <AccordionMenuItem
          key={item.groupKind.id}
          label={item.groupKind.label}
          onChange={toggleExpanded(item.groupKind.id)}
          expanded={isExpanded.includes(item.groupKind.id)}
          slotProps={{ details: { className: 'BoxContainerComponents__details' } }}
        >
          {item.components.map(({ name, location, ...restComponent }) => (
            <CardSvg key={name} icon={{ name, location }}>
              <RenderSvg {...restComponent} name={name} location={location} />
            </CardSvg>
          ))}
        </AccordionMenuItem>
      ))}
    </BoxContainerComponents>
  )
}
