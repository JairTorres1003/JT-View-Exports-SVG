import { Card, Collapse, Divider, Grid2, IconButton, Tooltip } from '@mui/material'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import RenderSvg from '../../SVG/RenderSvg'

import { EditorPlayground } from './EditorPlayground'
import { BoxPlayground, BoxPlaygroundCardSvg } from './Playground.style'

import { IconCodeTag, IconCopy, IconRefresh } from '@/assets/icons/functionalities'
import { SelectPickerColor } from '@/core/components/Select'
import { usePlayground } from '@/modules/Home/hooks/usePlayground'

export const Playground: FC = () => {
  const recentlySelected = useSelector((state) => state.playground.recentlySelected)

  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  const { backgroundColor, expandedCode, handleExpand, onChangeColor, initialColor } =
    usePlayground()

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
            <SelectPickerColor onChange={onChangeColor} initialColor={initialColor} />
          </Grid2>
          <Grid2>
            <Tooltip title={expandedCode ? t('Hide code') : t('Show code')}>
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

        <Collapse in={expandedCode}>
          <Divider className='Box-Playground__card__divider' />
          <EditorPlayground />
        </Collapse>
      </Card>
    </BoxPlayground>
  )
}
