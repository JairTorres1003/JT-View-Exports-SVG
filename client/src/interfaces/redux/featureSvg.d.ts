import { SVGComponent, SVGErrors, ViewExportSVG } from '@api/interfaces/ViewExportsSVG'
import { type CaseReducer, type PayloadAction } from '@reduxjs/toolkit'

export interface SVGState {
  components: ViewExportSVG[]
  errors?: SVGErrors
  search: string
  recentlySelected?: SVGComponent
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
   * Set the recently selected component to the state.
   */
  setRecentlySelected: CaseReducer<SVGState, PayloadAction<SVGComponent | undefined>>

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: CaseReducer<SVGState, PayloadAction<any>>
}
