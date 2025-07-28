import { SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import type { SVGFile, ViewExportSVG } from '@api/types/ViewExportsSVG'
import { IconButton, Tooltip } from '@mui/material'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { IconRefresh } from '@/assets/icons/functionalities'
import { vscode } from '@/services/vscode'
import { addPendingRefresh } from '@/store/features/SVGSlice'

interface RefreshActionProps {
  files: SVGFile[]
  groupKind: ViewExportSVG['groupKind']
}

export const RefreshAction: FC<RefreshActionProps> = ({ files, groupKind }) => {
  const inRefresh = useSelector((state) => state.svg.componentsPendingRefresh)

  const { t } = useTranslation()
  const dispatch = useDispatch()

  if (files.length === 0) return null

  return (
    <Tooltip title={t('labels.Refresh')} placement='top'>
      <IconButton
        aria-label={t('labels.Refresh')}
        disabled={inRefresh.includes(groupKind.id)}
        onClick={() => {
          vscode.postMessage(SVGReceiveMessage.RefreshSVGComponents, files)
          dispatch(addPendingRefresh(groupKind))
        }}
      >
        <IconRefresh size={16} />
      </IconButton>
    </Tooltip>
  )
}
