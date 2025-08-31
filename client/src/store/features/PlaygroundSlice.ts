import { createSlice } from '@reduxjs/toolkit'

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
})

export const {
  actions: { setRecentlySelected, setIsOpenDevTools, setInitializedEditor },
} = PlaygroundSlice

export const { reducer: PlaygroundReducer } = PlaygroundSlice
