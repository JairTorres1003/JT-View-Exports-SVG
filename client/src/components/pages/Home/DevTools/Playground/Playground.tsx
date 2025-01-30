import RenderSvg from '@home/components/SVG/RenderSvg'
import { Box, Card, Divider } from '@mui/material'

import { BoxPlayground } from './Playground.style'

import { useSelector } from '@/providers/redux/store'

export const Playground = (): React.ReactNode => {
  const recentlySelected = useSelector((state) => state.global.recentlySelected)

  if (recentlySelected === undefined) return null

  return (
    <BoxPlayground>
      <Card className='BoxPlayground__card' variant='outlined'>
        <Box className='BoxPlayground__card__svg'>
          <RenderSvg {...recentlySelected} />
        </Box>
        <Divider />
        <Box className='BoxPlayground__card__tools'>Tools</Box>
      </Card>
    </BoxPlayground>
  )
}
