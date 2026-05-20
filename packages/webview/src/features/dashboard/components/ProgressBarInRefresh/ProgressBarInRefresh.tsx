import type { ViewExportSVG } from '@jt-view-exports-svg/core'
import { LinearProgress } from '@mui/material'

import { useAppSelector } from '@/store/hooks'

const ProgressBarInRefresh: React.FC<{ groupKind: ViewExportSVG['groupKind'] }> = ({
  groupKind,
}) => {
  const inRefresh = useAppSelector((state) => state.svg.componentsPendingRefresh)

  if (!inRefresh.includes(groupKind.id)) return null

  return <LinearProgress />
}

export default ProgressBarInRefresh
