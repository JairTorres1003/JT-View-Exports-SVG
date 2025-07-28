import { createSlice } from '@reduxjs/toolkit'

import type { SVGReducers, SVGState } from '@/types/store/features/SvgSlice'

const initialState: SVGState = {
  components: [],
  componentsPendingRefresh: [],
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
  setRefreshComponents: (state, { payload }) => {
    state.components = state.components.map((component) => {
      const newComponent = payload.find((item) => item.groupKind.id === component.groupKind.id)

      if (newComponent) {
        state.componentsPendingRefresh = state.componentsPendingRefresh.filter(
          (id) => id !== newComponent.groupKind.id
        )

        return newComponent
      }

      return component
    })
  },
  addPendingRefresh: (state, { payload }) => {
    if (!state.componentsPendingRefresh.includes(payload.id)) {
      state.componentsPendingRefresh.push(payload.id)
    }
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
  actions: { setComponents, setSearch, setErrors, setRefreshComponents, addPendingRefresh },
} = SVGSlice

export const { reducer: SVGReducer } = SVGSlice
