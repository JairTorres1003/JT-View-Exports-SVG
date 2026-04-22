import { createSlice } from '@reduxjs/toolkit'

import type { PlaygroundReducers } from '@/store/types/playground'

import initialState from './state'

const reducers: PlaygroundReducers = {
  setRecentlySelected: (state, { payload }) => {
    state.recentlySelected = payload
  },
  setIsOpenDevTools: (state, { payload }) => {
    state.isOpenDevTools = payload
  },
}

export const playgroundSlice = createSlice({
  name: 'playground',
  initialState,
  reducers,
})

export const { setRecentlySelected, setIsOpenDevTools } = playgroundSlice.actions

const playgroundReducer = playgroundSlice.reducer
export default playgroundReducer
