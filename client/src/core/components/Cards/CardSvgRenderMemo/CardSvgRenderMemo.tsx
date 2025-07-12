import React from 'react'

import { RenderSvg } from '../../SVG/RenderSvg'
import CardSvg, { type CardSvgProps } from '../CardSvg/CardSvg'

const CardSvgRenderMemo = React.memo(({ component, ...props }: Omit<CardSvgProps, 'children'>) => (
  <CardSvg component={component} {...props}>
    <RenderSvg {...component} />
  </CardSvg>
))

CardSvgRenderMemo.displayName = 'CardSvgRenderMemo'

export default CardSvgRenderMemo
