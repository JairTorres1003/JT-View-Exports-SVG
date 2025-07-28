import { useSelector } from 'react-redux'

import { containerIconsClasses } from './ContainerIcons.classes'
import { BoxContainerIcons } from './ContainerIcons.style'

import { AccordionActionsSVG, AccordionMenuItem } from '@/core/components/Accordion'
import CardSvgRenderMemo from '@/core/components/Cards/CardSvgRenderMemo/CardSvgRenderMemo'
import { useExpandedComponents } from '@/core/hooks/useExpandedComponents'

const ContainerIcons = (): React.ReactNode => {
  const { isExpanded, toggleExpanded } = useExpandedComponents()
  const { components } = useSelector((state) => state.svg)

  return (
    <BoxContainerIcons>
      {components.map((item) => (
        <AccordionMenuItem
          key={item.groupKind.id}
          label={item.groupKind.label}
          onChange={toggleExpanded(item.groupKind.id)}
          expanded={isExpanded.includes(item.groupKind.id)}
          className={containerIconsClasses.accordion}
          actions={<AccordionActionsSVG data={item} hideRefresh key={item.groupKind.id} />}
          slotProps={{
            details: { className: containerIconsClasses.details },
            actions: { className: containerIconsClasses.actions },
          }}
        >
          {item.components.map((c) => (
            <CardSvgRenderMemo key={c.name} component={c} />
          ))}
        </AccordionMenuItem>
      ))}
    </BoxContainerIcons>
  )
}

export default ContainerIcons
