import { createSlice } from '@reduxjs/toolkit'

import type { GlobalReducers, GlobalState } from '@/types/store/features/GlobalSlice'

const config = window.ViewExportsSVG.initConfiguration

const initialState: GlobalState = {
  snackbarAlert: {
    open: false,
    content: '',
    duration: 3000,
    severity: 'info',
    position: { vertical: 'bottom', horizontal: 'center' },
  },
  configuration: {
    defaultExpandAll: config._DEFAULT_EXPAND_ALL,
    defaultClicToOpenDevTools: config._DEFAULT_CLIC_TO_OPEN_DEV_TOOLS,
    renderPath: config._INITIAL_RENDER_PATH,
  },
}

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
}

/**
 * Redux slice for managing Global state.
 */
export const GlobalSlice = createSlice({
  name: 'global',
  initialState,
  reducers,
})

export const {
  actions: { openAlert, closeAlert, setConfiguration },
} = GlobalSlice

export const { reducer: GlobalReducer } = GlobalSlice
