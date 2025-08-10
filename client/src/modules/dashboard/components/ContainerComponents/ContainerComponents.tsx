import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useSelector } from 'react-redux'

import { IconWarning } from '@/assets/icons/indicators'
import { AccordionActionsSVG, AccordionMenuItem } from '@/core/components/Accordion'
import CardSvgRenderMemo from '@/core/components/Cards/CardSvgRenderMemo/CardSvgRenderMemo'
import { useExpandedComponents } from '@/core/hooks/useExpandedComponents'

import ProgressBarInRefresh from '../ProgressBarInRefresh/ProgressBarInRefresh'

import { containerComponentsClasses } from './ContainerComponents.classes'
import { BoxContainerComponents } from './ContainerComponents.style'

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
          loading={isExpanded.includes(item.groupKind.id)}
          className={containerComponentsClasses.accordion}
          actions={
            <AccordionActionsSVG
              data={item}
              key={item.groupKind.id}
              isGrouped={item.files.length > 1}
            />
          }
          loadingComonent={
            <ProgressBarInRefresh groupKind={item.groupKind} key={item.groupKind.id} />
          }
          slotProps={{
            details: { className: containerComponentsClasses.details },
            actions: { className: containerComponentsClasses.actions },
          }}
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
