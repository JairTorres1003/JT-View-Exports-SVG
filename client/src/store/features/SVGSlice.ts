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
  toggleFavorite: (state, { payload }) => {
    state.components.forEach((c) => {
      const component = c.components.find(
        ({ name, location }) =>
          name === payload.name && location.file.absolutePath === payload.location.file.absolutePath
      )

      if (component) {
        component.isFavorite = !component.isFavorite
      }
    })
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
  actions: { setComponents, setSearch, setErrors, toggleFavorite },
} = SVGSlice

export const { reducer: SVGReducer } = SVGSlice
