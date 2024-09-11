import { createSlice } from '@reduxjs/toolkit'

import { type GlobalReducers, type GlobalState } from '@/interfaces/redux/featureGlobal'

const initialState: GlobalState = {
  copy: {
    content: null,
    show: false,
  },
}

const reducers: GlobalReducers = {
  setCopy: (state, { payload }) => {
    state.copy = payload
  },
}

/**
 * Redux slice for managing Global state.
 */
export const GlobalSlice = createSlice({
  name: 'global',
  initialState,
  reducers,
})

export const { setCopy } = GlobalSlice.actions

export const GlobalReducer = GlobalSlice.reducer
