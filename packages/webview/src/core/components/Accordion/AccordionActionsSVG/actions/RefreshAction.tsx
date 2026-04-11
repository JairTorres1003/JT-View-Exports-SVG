import {
  type FileIdentifier,
  SVGReceiveMessage,
  type ViewExportSVG,
} from '@jt-view-exports-svg/core'
import { IconButton, Tooltip } from '@mui/material'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import IconRefresh from '@/assets/icons/functionalities/refresh'
import { vscode } from '@/services/vscode'
import { addPendingRefresh } from '@/store/features/svg/slice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

interface RefreshActionProps {
  files: FileIdentifier[]
  groupKind: ViewExportSVG['groupKind']
}

export const RefreshAction: FC<RefreshActionProps> = ({ files, groupKind }) => {
  const inRefresh = useAppSelector((state) => state.svg.componentsPendingRefresh)

  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  if (files.length === 0) return null

  return (
    <Tooltip title={t('labels.Refresh')} placement='top'>
      <IconButton
        aria-label={t('labels.Refresh')}
        disabled={inRefresh.includes(groupKind.id)}
        onClick={() => {
          vscode.postMessage(SVGReceiveMessage.ReloadComponent, files)
          dispatch(addPendingRefresh(groupKind))
        }}
      >
        <IconRefresh size={16} />
      </IconButton>
    </Tooltip>
  )
}
