import { Card, Collapse, Divider, Grid2, IconButton, Portal, Tooltip } from '@mui/material'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import RenderSvg from '../../SVG/RenderSvg'

import { BoxPlayground, BoxPlaygroundCardSvg } from './Playground.style'

import { IconCodeTag, IconCopy, IconRefresh } from '@/assets/icons/functionalities'
import { IconKebabHorizontal } from '@/assets/icons/navigation'
import { SelectPickerColor } from '@/core/components/Select'
import { Editor } from '@/core/components/vs/Editor'
import { Show } from '@/core/helpers'
import { usePlayground } from '@/modules/Home/hooks/usePlayground'

interface PlaygroundProps {
  containerId?: string
}

export const Playground: FC<PlaygroundProps> = ({ containerId = 'playground-actions' }) => {
  const recentlySelected = useSelector((state) => state.playground.recentlySelected)

  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  const {
    backgroundColor,
    defaultValue,
    editorRef,
    expandedCode,
    handleCopyCode,
    handleExpand,
    handleResetCode,
    initialColor,
    onChangeColor,
  } = usePlayground()

  return (
    <BoxPlayground>
      <Card className='Box-Playground__card' variant='outlined'>
        <BoxPlaygroundCardSvg bgColor={backgroundColor}>
          {recentlySelected && <RenderSvg {...recentlySelected} />}
        </BoxPlaygroundCardSvg>

        <Divider className='Box-Playground__card__divider' />

        <Grid2 container spacing={1} className='Box-Playground__card__tools'>
          <Grid2 flex={1}>
            <SelectPickerColor onChange={onChangeColor} initialColor={initialColor} />
          </Grid2>
          <Show>
            <Show.When isTrue={!!recentlySelected}>
              <Grid2>
                <Tooltip title={expandedCode ? t('Hide code') : t('Show code')}>
                  <IconButton onClick={handleExpand}>
                    <IconCodeTag size={16} />
                  </IconButton>
                </Tooltip>
              </Grid2>
              <Grid2>
                <Tooltip title={t('Copy code')}>
                  <IconButton onClick={handleCopyCode}>
                    <IconCopy size={16} />
                  </IconButton>
                </Tooltip>
              </Grid2>
              <Grid2>
                <Tooltip title={t('Reset code')}>
                  <IconButton onClick={handleResetCode}>
                    <IconRefresh size={16} sx={{ transform: 'rotate(90deg)' }} />
                  </IconButton>
                </Tooltip>
              </Grid2>
            </Show.When>
          </Show>
        </Grid2>

        {recentlySelected && (
          <Collapse in={expandedCode}>
            <Divider className='Box-Playground__card__divider' />
            <Editor defaultValue={defaultValue} ref={editorRef} />
          </Collapse>
        )}
      </Card>
      <Portal container={document.getElementById(containerId)}>
        <IconButton sx={{ marginRight: '4px' }}>
          <IconKebabHorizontal size={16} />
        </IconButton>
      </Portal>
    </BoxPlayground>
  )
}
