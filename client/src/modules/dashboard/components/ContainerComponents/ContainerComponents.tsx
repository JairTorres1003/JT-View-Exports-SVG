import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useSelector } from 'react-redux'

import { useContainerComponents } from '../../hooks/useContainerComponents'

import { containerComponentsClasses } from './ContainerComponents.classes'
import { BoxContainerComponents } from './ContainerComponents.style'

import { IconWarning } from '@/assets/icons/indicators'
import { AccordionMenuItem } from '@/core/components/Accordion'
import { CardSvg } from '@/core/components/Cards/CardSvg'
import { RenderSvg } from '@/core/components/SVG/RenderSvg'

const ContainerComponents = (): React.ReactNode => {
  const { isExpanded, toggleExpanded } = useContainerComponents()
  const { components, errors } = useSelector((state) => state.svg)

  if (errors) {
    return (
      <BoxContainerComponents>
        <ListItem component='div' className={containerComponentsClasses.error}>
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
          slotProps={{ details: { className: containerComponentsClasses.details } }}
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

export default ContainerComponents
