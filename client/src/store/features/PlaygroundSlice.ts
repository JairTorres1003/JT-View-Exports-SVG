import { createSlice } from '@reduxjs/toolkit'

import { setComponents } from './SVGSlice'

import type { PlaygroundReducers, PlaygroundState } from '@/types/store/features/PlaygroundSlice'

const initialState: PlaygroundState = {
  recentlySelected: undefined,
  isOpenDevTools: false,
  isInitialized: {},
}

const reducers: PlaygroundReducers = {
  setRecentlySelected: (state, { payload }) => {
    state.recentlySelected = payload
    state.isOpenDevTools = !!payload
  },

  setIsOpenDevTools: (state, { payload }) => {
    state.isOpenDevTools = payload
  },

  setInitializedEditor: (state, { payload }) => {
    state.isInitialized = { ...state.isInitialized, [payload]: true }
  },
}

/**
 * Redux slice for managing Playground state.
 */
export const PlaygroundSlice = createSlice({
  name: 'Playground',
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder.addCase(setComponents, (state) => {
      state.isOpenDevTools = false
      state.recentlySelected = undefined
    })
  },
})

export const {
  actions: { setRecentlySelected, setIsOpenDevTools, setInitializedEditor },
} = PlaygroundSlice

export const { reducer: PlaygroundReducer } = PlaygroundSlice
