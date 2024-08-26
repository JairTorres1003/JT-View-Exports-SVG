import { createSlice } from '@reduxjs/toolkit'

import { type SVGReducers, type SVGState } from '@/interfaces/redux/featureSvg'

const initialState: SVGState = {}

const reducers: SVGReducers = {}

/**
 * Redux slice for managing SVG state.
 */
export const SVGSlice = createSlice({
  name: 'svg',
  initialState,
  reducers,
})

export const {} = SVGSlice.actions

export const SVGReducer = SVGSlice.reducer
