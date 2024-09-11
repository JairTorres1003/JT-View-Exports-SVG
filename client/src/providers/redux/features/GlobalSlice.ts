import { createSlice } from '@reduxjs/toolkit'

import { type GlobalReducers, type GlobalState } from '@/interfaces/redux/featureGlobal'

const initialState: GlobalState = {
  snackbarAlert: {
    open: false,
    content: '',
    duration: 3000,
    severity: 'info',
    position: { vertical: 'bottom', horizontal: 'center' },
  },
}

const reducers: GlobalReducers = {
  setAlert: (state, { payload }) => {
    const defaultAlert: Partial<GlobalState['snackbarAlert']> = {
      duration: 3000,
      severity: 'info',
      position: { vertical: 'bottom', horizontal: 'center' },
    }

    state.snackbarAlert = { ...defaultAlert, ...payload }
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

export const { setAlert } = GlobalSlice.actions

export const GlobalReducer = GlobalSlice.reducer
