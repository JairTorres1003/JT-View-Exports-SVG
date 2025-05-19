import { createSlice } from '@reduxjs/toolkit'

import type { PlaygroundReducers, PlaygroundState } from '@/types/store/features/PlaygroundSlice'

const initialState: PlaygroundState = {
  recentlySelected: undefined,
  isSelecting: false,
}

const reducers: PlaygroundReducers = {
  setRecentlySelected: (state, { payload }) => {
    state.recentlySelected = payload
    state.recentlySelectedName = payload?.name
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
