import RenderSvg from '@home/components/SVG/RenderSvg'
import { Box, Card, Divider } from '@mui/material'
import React from 'react'

import { SelectPickerColor } from '../SelectPickerColor'

import { BoxPlayground, BoxPlaygroundCardSvg } from './Playground.style'

import { useSelector } from '@/providers/redux/store'

export const Playground = (): React.ReactNode => {
  const [backgroundColor, setBackgroundColor] = React.useState('#fff')

  const recentlySelected = useSelector((state) => state.global.recentlySelected)

  if (recentlySelected === undefined) return null

  return (
    <BoxPlayground>
      <Card className='BoxPlayground__card' variant='outlined'>
        <BoxPlaygroundCardSvg bgcolor={backgroundColor}>
          <RenderSvg {...recentlySelected} />
        </BoxPlaygroundCardSvg>
        <Divider />
        <Box className='BoxPlayground__card__tools'>
          <SelectPickerColor onChange={setBackgroundColor} />
        </Box>
      </Card>
    </BoxPlayground>
  )
}
