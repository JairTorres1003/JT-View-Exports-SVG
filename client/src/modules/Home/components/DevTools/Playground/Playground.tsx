import { Box, Card, Divider } from '@mui/material'
import React from 'react'

import RenderSvg from '../../SVG/RenderSvg'

import { BoxPlayground, BoxPlaygroundCardSvg } from './Playground.style'

import { SelectPickerColor } from '@/core/components/Select'
import { useSelector } from '@/providers/redux/store'

export const Playground = (): React.ReactNode => {
  const [backgroundColor, setBackgroundColor] = React.useState('#fff')

  const recentlySelected = useSelector((state) => state.global.recentlySelected)

  if (recentlySelected === undefined) return null

  return (
    <BoxPlayground>
      <Card className='Box-Playground__card' variant='outlined'>
        <BoxPlaygroundCardSvg bgColor={backgroundColor}>
          <RenderSvg {...recentlySelected} />
        </BoxPlaygroundCardSvg>
        <Divider />
        <Box className='Box-Playground__card__tools'>
          <SelectPickerColor onChange={setBackgroundColor} />
        </Box>
      </Card>
    </BoxPlayground>
  )
}
