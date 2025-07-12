import { SVGComponent, SVGErrors, ViewExportSVG } from '@api/types/ViewExportsSVG'
import { type CaseReducer, type PayloadAction } from '@reduxjs/toolkit'

export interface SVGState {
  components: ViewExportSVG[]
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

  [key: string]: CaseReducer<SVGState, PayloadAction<any>>
}
