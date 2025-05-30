import type { SVGComponent } from '@api/interfaces/ViewExportsSVG'
import { type BoxProps, Card, Tooltip, Typography } from '@mui/material'
import type { FC } from 'react'

import { cardSvgClasses } from './CardSvg.classes'
import { BoxCardSvg } from './CardSvg.style'

import { useCardSvg } from '@/modules/dashboard/hooks/useCardSvg'

interface CardSvgProps extends Omit<BoxProps, 'component'> {
  readonly children: React.ReactNode
  readonly component: SVGComponent
}

const CardSvg: FC<CardSvgProps> = ({ children, component, onClick = () => null, ...props }) => {
  const { handleClick, addRecentComponent } = useCardSvg()

  return (
    <BoxCardSvg
      {...props}
      onClick={(...args) => {
        onClick(...args)
        addRecentComponent(component)
        handleClick({ name: component.name, location: component.location })
      }}
    >
      <Card className={cardSvgClasses.card}>{children}</Card>
      <Tooltip placement='top' title={component.name}>
        <Typography
          variant='caption'
          noWrap
          textAlign='center'
          padding='0 4px'
          className={cardSvgClasses.label}
        >
          {component.name}
        </Typography>
      </Tooltip>
    </BoxCardSvg>
  )
}

export default CardSvg
