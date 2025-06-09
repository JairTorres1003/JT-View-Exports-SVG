import { useSelector } from 'react-redux'

import { containerIconsClasses } from './ContainerIcons.classes'
import { BoxContainerIcons } from './ContainerIcons.style'

import { AccordionMenuItem } from '@/core/components/Accordion'
import { CardSvg } from '@/core/components/Cards/CardSvg'
import { RenderSvg } from '@/core/components/SVG/RenderSvg'
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
          slotProps={{ details: { className: containerIconsClasses.details } }}
        >
          {item.components.map(({ name, ...restComponent }) => (
            <CardSvg
              key={name}
              executeFavoriteDispatch={false}
              component={{ ...restComponent, name }}
            >
              <RenderSvg {...restComponent} name={name} />
            </CardSvg>
          ))}
        </AccordionMenuItem>
      ))}
    </BoxContainerIcons>
  )
}

export default ContainerIcons
