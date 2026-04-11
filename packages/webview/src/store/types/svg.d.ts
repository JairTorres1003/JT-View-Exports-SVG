import type { FileIdentifier, SVGErrors, SVGFile, ViewExportSVG } from '@jt-view-exports-svg/core'
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit'

export interface SVGState {
  components: ViewExportSVG[]
  files: Record<FileIdentifier, SVGFile>
  componentsPendingRefresh: string[]
  errors?: SVGErrors
  search: string
}

export interface SVGReducers {
  setComponents: CaseReducer<SVGState, PayloadAction<ViewExportSVG[]>>
  setFiles: CaseReducer<SVGState, PayloadAction<Record<FileIdentifier, SVGFile>>>
  setSearch: CaseReducer<SVGState, PayloadAction<string>>
  setErrors: CaseReducer<SVGState, PayloadAction<SVGErrors | undefined>>
  setRefreshComponents: CaseReducer<SVGState, PayloadAction<ViewExportSVG[]>>
  addPendingRefresh: CaseReducer<SVGState, PayloadAction<ViewExportSVG['groupKind']>>
  [key: string]: CaseReducer<SVGState, PayloadAction<any>>
}
