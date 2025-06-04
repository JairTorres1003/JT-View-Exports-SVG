import { Card, Collapse, Divider, Grid, IconButton, Tooltip } from '@mui/material'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { RenderSvg } from '../../SVG/RenderSvg'
import CodeEditor from '../CodeEditor/CodeEditor'
import { MenuTools } from '../Menu'

import { playgroundClasses } from './Playground.classes'
import { BoxPlayground, BoxPlaygroundCardSvg } from './Playground.style'

import { IconCodeTag, IconCopy, IconRefresh } from '@/assets/icons/functionalities'
import { SelectPickerColor } from '@/core/components/Select'
import { usePlayground } from '@/core/hooks/DevTools/usePlayground'

interface PlaygroundProps {
  actionsId?: string
}

const Playground: FC<PlaygroundProps> = ({ actionsId = 'playground-actions' }) => {
  const recentlySelected = useSelector((state) => state.playground.recentlySelected)

  const { t } = useTranslation(undefined, { keyPrefix: 'DevTools' })

  const {
    backgroundColor,
    editorRef,
    expandedCode,
    handleCopyCode,
    handleExpand,
    handleResetCode,
    initialColor,
    onChangeColor,
    onChangeCompleteColor,
    valueColor,
    resetPlaygroundColor,
  } = usePlayground()

  return (
    <BoxPlayground>
      <Card variant='outlined' className={playgroundClasses.card}>
        <BoxPlaygroundCardSvg bgColor={backgroundColor}>
          {recentlySelected && <RenderSvg {...recentlySelected} />}
        </BoxPlaygroundCardSvg>

        <Divider className={playgroundClasses.divider} />

        <Grid container spacing={0.5} className={playgroundClasses.tools}>
          <Grid size='grow'>
            <SelectPickerColor
              value={valueColor}
              onChange={onChangeColor}
              initialColor={initialColor}
              onChangeComplete={onChangeCompleteColor}
            />
          </Grid>
          <Grid size='auto'>
            <Tooltip title={expandedCode ? t('playground.HideCode') : t('playground.ShowCode')}>
              <IconButton onClick={handleExpand}>
                <IconCodeTag size={16} />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid size='auto'>
            <Tooltip title={t('playground.CopyCode')}>
              <IconButton onClick={handleCopyCode}>
                <IconCopy size={16} />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid size='auto'>
            <Tooltip title={t('playground.ResetCode')}>
              <IconButton onClick={handleResetCode}>
                <IconRefresh size={16} sx={{ transform: 'rotate(90deg)' }} />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>

        <Collapse in={expandedCode}>
          <Divider className={playgroundClasses.divider} />
          <CodeEditor editorRef={editorRef} />
        </Collapse>
      </Card>

      <MenuTools
        containerId={actionsId}
        editorRef={editorRef}
        resetPlaygroundColor={resetPlaygroundColor}
      />
    </BoxPlayground>
  )
}

export default Playground
