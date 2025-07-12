import { createSlice } from '@reduxjs/toolkit'

import type { SVGReducers, SVGState } from '@/types/store/features/SvgSlice'

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
  setErrors: (state, { payload }) => {
    state.errors = payload
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

export const {
  actions: { setComponents, setSearch, setErrors },
} = SVGSlice

export const { reducer: SVGReducer } = SVGSlice
