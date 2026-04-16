import { lazy, Suspense } from 'react'

import { AccordionMenuItem } from '@/core/components/Accordion'
import CardSvgRenderMemo from '@/core/components/Cards/CardSvgRenderMemo/CardSvgRenderMemo'
import { useExpandedComponents } from '@/core/hooks/useExpandedComponents'
import { useAppSelector } from '@/store/hooks'

import { containerIconsClasses } from './ContainerIcons.classes'
import { BoxContainerIcons } from './ContainerIcons.style'

const AccordionActionsSVG = lazy(
  () => import('@/core/components/Accordion/AccordionActionsSVG/AccordionActionsSVG')
)

const ContainerIcons = (): React.ReactNode => {
  const { isExpanded, handleToggle } = useExpandedComponents()
  const { components } = useAppSelector((state) => state.svg)

  return (
    <BoxContainerIcons>
      {components.map((item) => (
        <AccordionMenuItem
          key={item.groupKind.id}
          label={item.groupKind.label}
          onChange={handleToggle(item.groupKind.id)}
          expanded={isExpanded.includes(item.groupKind.id)}
          className={containerIconsClasses.accordion}
          actions={
            <Suspense>
              <AccordionActionsSVG data={item} hideRefresh key={item.groupKind.id} isGrouped />
            </Suspense>
          }
          slotProps={{
            details: { className: containerIconsClasses.details },
            actions: { className: containerIconsClasses.actions },
          }}
        >
          {item.components.map((c) => (
            <CardSvgRenderMemo key={`${item.groupKind.id}-${c.name}`} component={c} />
          ))}
        </AccordionMenuItem>
      ))}
    </BoxContainerIcons>
  )
}

export default ContainerIcons
