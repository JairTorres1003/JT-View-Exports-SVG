import { useContainerComponents } from '@home/hooks/components/useContainerComponents'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'

import { Accordion } from '../SVG/Accordion'

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
          component={item}
          key={item.groupKind.id}
          onChange={toggleExpanded(item.groupKind.id)}
          expanded={isExpanded.includes(item.groupKind.id)}
        />
      ))}
    </BoxContainerComponents>
  )
}
