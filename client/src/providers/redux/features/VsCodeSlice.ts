import { createSlice } from '@reduxjs/toolkit'

import { type VsCodeReducers, type VsCodeState } from '@/interfaces/redux/featureVsCode'

const initialState: VsCodeState = {
  styles: {},
}

const reducers: VsCodeReducers = {
  setVsCodeStyles: (state, { payload }) => {
    state.styles = payload
  },
}

/**
 * Redux slice for managing VsCode state.
 */
export const VsCodeSlice = createSlice({
  name: 'vsCode',
  initialState,
  reducers,
})

export const { setVsCodeStyles } = VsCodeSlice.actions

export const VsCodeReducer = VsCodeSlice.reducer
