import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useSelector } from 'react-redux'

import { containerComponentsClasses } from './ContainerComponents.classes'
import { BoxContainerComponents } from './ContainerComponents.style'

import { IconWarning } from '@/assets/icons/indicators'
import { AccordionMenuItem } from '@/core/components/Accordion'
import CardSvgRenderMemo from '@/core/components/Cards/CardSvgRenderMemo/CardSvgRenderMemo'
import { useExpandedComponents } from '@/core/hooks/useExpandedComponents'

const ContainerComponents = (): React.ReactNode => {
  const { isExpanded, toggleExpanded } = useExpandedComponents()
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
          {item.components.map((c) => (
            <CardSvgRenderMemo key={c.name} component={c} />
          ))}
        </AccordionMenuItem>
      ))}
    </BoxContainerComponents>
  )
}

export default ContainerComponents
