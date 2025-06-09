import type { SVGComponent } from '@api/types/ViewExportsSVG'
import { Box, type BoxProps, Card, IconButton, Tooltip, Typography } from '@mui/material'
import cn from 'classnames'
import type { FC } from 'react'

import { cardSvgClasses } from './CardSvg.classes'
import { BoxCardSvg } from './CardSvg.style'

import { IconStarFilled, IconStarOutlined } from '@/assets/icons/indicators'
import { useCardSvg } from '@/core/hooks/useCardSvg'

interface CardSvgProps extends Omit<BoxProps, 'component'> {
  children: React.ReactNode
  component: SVGComponent
  disableFavorite?: boolean
  /**
   * @default true
   */
  executeFavoriteDispatch?: boolean
}

const CardSvg: FC<Readonly<CardSvgProps>> = ({
  children,
  component,
  onClick = () => null,
  disableFavorite = false,
  executeFavoriteDispatch = true,
  ...props
}) => {
  const { handleClick, addRecentComponent, toggleFavorite } = useCardSvg()

  return (
    <BoxCardSvg
      {...props}
      onClick={(...args) => {
        onClick(...args)
        addRecentComponent(component)
        handleClick({ name: component.name, location: component.location })
      }}
    >
      <Card className={cardSvgClasses.card}>
        {!disableFavorite && (
          <IconButton
            size='small'
            className={cn(cardSvgClasses.favorite, {
              [cardSvgClasses.favoriteActive]: component.isFavorite,
            })}
            onClick={() => {
              toggleFavorite(component, executeFavoriteDispatch)
            }}
          >
            {component.isFavorite ? <IconStarFilled size={11} /> : <IconStarOutlined size={11} />}
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
