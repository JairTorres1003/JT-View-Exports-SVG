import { Box, Card, Collapse, Divider, Grid2, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

import RenderSvg from '../../SVG/RenderSvg'

import { BoxPlayground, BoxPlaygroundCardSvg } from './Playground.style'

import { IconCodeTag, IconCopy, IconRefresh } from '@/assets/icons/functionalities'
import { SelectPickerColor } from '@/core/components/Select'
import { useSelector } from '@/providers/redux/store'

export const Playground = (): React.ReactNode => {
  const [backgroundColor, setBackgroundColor] = React.useState('#fff')
  const [expanded, setExpanded] = React.useState(true)

  const recentlySelected = useSelector((state) => state.global.recentlySelected)

  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  const handleExpand = () => {
    setExpanded((prevExpanded) => !prevExpanded)
  }

  if (recentlySelected === undefined) return null

  return (
    <BoxPlayground>
      <Card className='Box-Playground__card' variant='outlined'>
        <BoxPlaygroundCardSvg bgColor={backgroundColor}>
          <RenderSvg {...recentlySelected} />
        </BoxPlaygroundCardSvg>

        <Divider className='Box-Playground__card__divider' />

        <Grid2 container spacing={1} className='Box-Playground__card__tools'>
          <Grid2 flex={1}>
            <SelectPickerColor onChange={setBackgroundColor} />
          </Grid2>
          <Grid2>
            <Tooltip title={expanded ? t('Hide code') : t('Show code')}>
              <IconButton onClick={handleExpand}>
                <IconCodeTag size={16} />
              </IconButton>
            </Tooltip>
          </Grid2>
          <Grid2>
            <Tooltip title={t('Copy code')}>
              <IconButton>
                <IconCopy size={16} />
              </IconButton>
            </Tooltip>
          </Grid2>
          <Grid2>
            <Tooltip title={t('Reset code')}>
              <IconButton>
                <IconRefresh size={16} sx={{ transform: 'rotate(90deg)' }} />
              </IconButton>
            </Tooltip>
          </Grid2>
        </Grid2>

        <Collapse in={expanded}>
          <Divider className='Box-Playground__card__divider' />
          <Box className='Box-Playground__card__code'>
            <pre>{`<${recentlySelected.name} />`}</pre>
          </Box>
        </Collapse>
      </Card>
    </BoxPlayground>
  )
}
