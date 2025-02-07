import { createSlice } from '@reduxjs/toolkit'

import type { VsCodeReducers, VsCodeState } from '@/interfaces/redux/featureVsCode'

const initialState: VsCodeState = {
  styles: {},
  editorConfig: {},
}

const reducers: VsCodeReducers = {
  setVsCodeStyles: (state, { payload }) => {
    state.styles = payload
  },
  setEditorConfig: (state, { payload }) => {
    state.editorConfig = payload
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

export const {
  actions: { setVsCodeStyles, setEditorConfig },
} = VsCodeSlice

export const { reducer: VsCodeReducer } = VsCodeSlice
