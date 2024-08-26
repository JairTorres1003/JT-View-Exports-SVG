import { createSlice } from '@reduxjs/toolkit'

import { type VsCodeReducers, type VsCodeState } from '@/interfaces/redux/featureVsCode'

const initialState: VsCodeState = {}

const reducers: VsCodeReducers = {}

/**
 * Redux slice for managing VsCode state.
 */
export const VsCodeSlice = createSlice({
  name: 'vsCode',
  initialState,
  reducers,
})

export const {} = VsCodeSlice.actions

export const VsCodeReducer = VsCodeSlice.reducer
