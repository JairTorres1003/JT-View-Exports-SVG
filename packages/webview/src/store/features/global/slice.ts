import { createSlice } from '@reduxjs/toolkit'

import type { GlobalReducers, GlobalState } from '@/store/types/global'

import initialState from './state'

const reducers: GlobalReducers = {
  openAlert: (state, { payload }) => {
    const defaultAlert: Partial<GlobalState['snackbarAlert']> = {
      duration: 3000,
      severity: 'info',
      position: { vertical: 'bottom', horizontal: 'center' },
    }

    state.snackbarAlert = { ...defaultAlert, ...payload, open: true }
  },
  closeAlert: (state) => {
    state.snackbarAlert.open = false
  },
  setConfiguration: (state, { payload }) => {
    state.configuration = { ...state.configuration, ...payload }
  },
  setRenderPath: (state, { payload }) => {
    state.configuration.renderPath = payload.path
    state.renderOptions = payload.options
  },
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers,
})

export const { openAlert, closeAlert, setConfiguration, setRenderPath } = globalSlice.actions

const globalReducer = globalSlice.reducer
export default globalReducer
