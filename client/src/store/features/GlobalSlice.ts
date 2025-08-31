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
    showRecentIcons: config._RECENT_ICONS_SHOW,
  },
  loading: true,
  isMounted: false,
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
    window.ViewExportsSVG.initConfiguration._INITIAL_RENDER_PATH =
      payload.renderPath || state.configuration.renderPath
  },
  setRenderPath: (state, { payload }) => {
    state.configuration.renderPath = payload.path
    window.ViewExportsSVG.initConfiguration._INITIAL_RENDER_PATH = payload.path
    state.renderOptions = payload.options
  },
  setInitLoading: (state, { payload }) => {
    state.loading = true
    if (payload) {
      state.configuration.renderPath = payload
      window.ViewExportsSVG.initConfiguration._INITIAL_RENDER_PATH = payload
    }
  },
  unsetInitLoading: (state) => {
    state.loading = false
  },
  setIsMounted: (state) => {
    state.isMounted = true
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
  actions: {
    openAlert,
    closeAlert,
    setConfiguration,
    setRenderPath,
    setInitLoading,
    unsetInitLoading,
    setIsMounted,
  },
} = GlobalSlice

export const { reducer: GlobalReducer } = GlobalSlice
