import type { ViewExportSVG } from '@api/types/ViewExportsSVG'
import { LinearProgress } from '@mui/material'
import type { FC } from 'react'
import { useSelector } from 'react-redux'

const ProgressBarInRefresh: FC<{ groupKind: ViewExportSVG['groupKind'] }> = ({ groupKind }) => {
  const inRefresh = useSelector((state) => state.svg.componentsPendingRefresh)

  if (!inRefresh.includes(groupKind.id)) return null

  return <LinearProgress />
}

export default ProgressBarInRefresh
