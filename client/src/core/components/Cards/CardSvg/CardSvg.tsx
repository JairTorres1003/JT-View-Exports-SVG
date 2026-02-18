import type { SVGComponent } from '@api/types/ViewExportsSVG'
import { Box, type BoxProps, Card, IconButton, Tooltip, Typography } from '@mui/material'
import cn from 'classnames'
import type { FC } from 'react'

import IconStarFilled from '@/assets/icons/indicators/start-filled'
import IconStarOutlined from '@/assets/icons/indicators/start-outlined'
import { useCardSvg } from '@/core/hooks/useCardSvg'

import { cardSvgClasses } from './CardSvg.classes'
import { BoxCardSvg } from './CardSvg.style'

export interface CardSvgProps extends Omit<BoxProps, 'component'> {
  children: React.ReactNode
  component: SVGComponent
  disableFavorite?: boolean
}

const CardSvg: FC<Readonly<CardSvgProps>> = ({
  children,
  component,
  onClick = () => null,
  disableFavorite = false,
  ...props
}) => {
  const { handleClick, addRecentComponent, toggleFavorite, isFavorite } = useCardSvg({
    favorite: component.isFavorite,
  })

  return (
    <BoxCardSvg
      {...props}
      onClick={(...args) => {
        onClick(...args)
        addRecentComponent({ ...component, isFavorite })
        handleClick({ name: component.name, location: component.location })
      }}
    >
      <Card className={cardSvgClasses.card}>
        {!disableFavorite && (
          <IconButton
            size='small'
            className={cn(cardSvgClasses.favorite, {
              [cardSvgClasses.favoriteActive]: isFavorite,
            })}
            onClick={() => {
              toggleFavorite({ ...component, isFavorite })
            }}
          >
            {isFavorite ? <IconStarFilled size={11} /> : <IconStarOutlined size={11} />}
          </IconButton>
        )}
        <Box className={cardSvgClasses.container}>{children}</Box>
      </Card>
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
