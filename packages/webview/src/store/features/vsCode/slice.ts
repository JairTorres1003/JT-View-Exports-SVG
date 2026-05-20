import { createSlice } from '@reduxjs/toolkit'

import type { VsCodeReducers } from '@/store/types/vsCode'

import initialState from './state'

const reducers: VsCodeReducers = {
  setVsCodeStyles: (state, { payload }) => {
    state.styles = payload
  },
  setEditorConfig: (state, { payload }) => {
    state.editorConfig = payload
  },
  setExtensionTheme: (state, { payload }) => {
    state.extensionTheme = payload
  },
}

export const vsCodeSlice = createSlice({
  name: 'vsCode',
  initialState,
  reducers,
})

export const { setVsCodeStyles, setEditorConfig, setExtensionTheme } = vsCodeSlice.actions

const vsCodeReducer = vsCodeSlice.reducer
export default vsCodeReducer
