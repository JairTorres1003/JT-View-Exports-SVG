import { createSlice } from '@reduxjs/toolkit'

import type { VsCodeReducers, VsCodeState } from '@/types/store/features/VsCodeSlice'

const initialState: VsCodeState = {
  styles: {},
  editorConfig: {},
  extensionTheme: undefined,
  themeKind: 'dark',
}

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
  setThemeKind: (state, { payload }) => {
    state.themeKind = payload
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
  actions: { setVsCodeStyles, setEditorConfig, setExtensionTheme, setThemeKind },
} = VsCodeSlice

export const { reducer: VsCodeReducer } = VsCodeSlice
