import type { SVGErrors, ViewExportSVG } from '@jt-view-exports-svg/core'
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit'

export interface SVGState {
  components: ViewExportSVG[]
  componentsPendingRefresh: string[]
  errors?: SVGErrors
  search: string
}

export interface SVGReducers {
  /**
   * Set the components to the state.
   */
  setComponents: CaseReducer<SVGState, PayloadAction<ViewExportSVG[]>>
  /**
   * Set the search string to the state.
   */
  setSearch: CaseReducer<SVGState, PayloadAction<string>>
  /**
   * Set the errors to the state.
   */
  setErrors: CaseReducer<SVGState, PayloadAction<SVGErrors | undefined>>
  /**
   * Set the refresh state with the new SVG components.
   */
  setRefreshComponents: CaseReducer<SVGState, PayloadAction<ViewExportSVG[]>>
  /**
   * Add a pending refresh for a specific group kind.
   */
  addPendingRefresh: CaseReducer<SVGState, PayloadAction<ViewExportSVG['groupKind']>>

  [key: string]: CaseReducer<SVGState, PayloadAction<any>>
}
