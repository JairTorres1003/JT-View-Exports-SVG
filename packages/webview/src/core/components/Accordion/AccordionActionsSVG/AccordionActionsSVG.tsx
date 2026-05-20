import type { ViewExportSVG } from '@jt-view-exports-svg/core'
import Stack from '@mui/material/Stack'
import { type FC, memo } from 'react'

import { FilesAction } from './actions/FilesAction'
import { InfoAction } from './actions/InfoAction'
import { RefreshAction } from './actions/RefreshAction'

const AccordionActionsSVG: FC<
  React.PropsWithChildren<{
    data: ViewExportSVG
    hideRefresh?: boolean
    isGrouped?: boolean
  }>
> = ({ data, hideRefresh = false, isGrouped = false, children }) => {
  return (
    <Stack direction='row' spacing={0.5} sx={{ alignItems: 'center' }}>
      {!hideRefresh && <RefreshAction files={data.files} groupKind={data.groupKind} />}

      <FilesAction files={data.files} groupKind={data.groupKind} />

      <InfoAction data={data} isGrouped={isGrouped} />

      {children}
    </Stack>
  )
}

AccordionActionsSVG.displayName = 'AccordionActionsSVG'

export default memo(AccordionActionsSVG)
