import { createSlice } from '@reduxjs/toolkit'

import type { PlaygroundReducers, PlaygroundState } from '@/interfaces/redux/featurePlayground'

const initialState: PlaygroundState = {
  recentlySelected: undefined,
  isSelecting: false,
}

const reducers: PlaygroundReducers = {
  setRecentlySelected: (state, { payload }) => {
    state.recentlySelected = payload
    state.isSelecting = !!payload
  },
  setIsSelecting: (state, { payload }) => {
    state.isSelecting = payload
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
  actions: { setRecentlySelected, setIsSelecting },
} = PlaygroundSlice

export const { reducer: PlaygroundReducer } = PlaygroundSlice
