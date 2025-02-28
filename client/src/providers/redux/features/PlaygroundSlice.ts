import { createSlice } from '@reduxjs/toolkit'

import type { PlaygroundReducers, PlaygroundState } from '@/interfaces/redux/featurePlayground'

const initialState: PlaygroundState = {}

const reducers: PlaygroundReducers = {
  setRecentlySelected: (state, { payload }) => {
    state.recentlySelected = payload
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
  actions: { setRecentlySelected },
} = PlaygroundSlice

export const { reducer: PlaygroundReducer } = PlaygroundSlice
