import { combineReducers, type Reducer } from '@reduxjs/toolkit'

import type { RootStoreState } from '@/store/types/store'

import globalReducer from './global/slice'
import playgroundReducer from './playground/slice'
import svgReducer from './svg/slice'
import vsCodeReducer from './vsCode/slice'

const rootReducer: Reducer<RootStoreState> = combineReducers({
  global: globalReducer,
  playground: playgroundReducer,
  svg: svgReducer,
  vsCode: vsCodeReducer,
})

export default rootReducer
