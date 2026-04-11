import { createSlice } from '@reduxjs/toolkit'

import type { SVGReducers } from '@/store/types/svg'

import initialState from './state'

const reducers: SVGReducers = {
  setComponents: (state, { payload }) => {
    state.components = payload
  },
  setFiles: (state, { payload }) => {
    state.files = payload
  },
  setSearch: (state, { payload }) => {
    state.search = payload
  },
  setErrors: (state, { payload }) => {
    state.errors = payload
  },
  setRefreshComponents: (state, { payload }) => {
    state.components = state.components.map((component) => {
      const nextComponent = payload.find((item) => item.groupKind.id === component.groupKind.id)

      if (!nextComponent) {
        return component
      }

      state.componentsPendingRefresh = state.componentsPendingRefresh.filter(
        (id) => id !== nextComponent.groupKind.id
      )

      return nextComponent
    })
  },
  addPendingRefresh: (state, { payload }) => {
    if (!state.componentsPendingRefresh.includes(payload.id)) {
      state.componentsPendingRefresh.push(payload.id)
    }
  },
}

export const svgSlice = createSlice({
  name: 'svg',
  initialState,
  reducers,
})

export const {
  setComponents,
  setFiles,
  setSearch,
  setErrors,
  setRefreshComponents,
  addPendingRefresh,
} = svgSlice.actions

const svgReducer = svgSlice.reducer
export default svgReducer
