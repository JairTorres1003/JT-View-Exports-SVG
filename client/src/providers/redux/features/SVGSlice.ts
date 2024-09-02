import { createSlice } from '@reduxjs/toolkit'

import { type SVGReducers, type SVGState } from '@/interfaces/redux/featureSvg'

const initialState: SVGState = {
  components: [],
  search: '',
}

const reducers: SVGReducers = {
  setComponents: (state, { payload }) => {
    state.components = payload
  },
  setSearch: (state, { payload }) => {
    state.search = payload
  },
}

/**
 * Redux slice for managing SVG state.
 */
export const SVGSlice = createSlice({
  name: 'svg',
  initialState,
  reducers,
})

export const { setComponents, setSearch } = SVGSlice.actions

export const SVGReducer = SVGSlice.reducer
