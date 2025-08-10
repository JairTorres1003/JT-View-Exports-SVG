import { type Reducer, type Store, combineReducers, configureStore } from '@reduxjs/toolkit'

import type { RootStoreState } from '@/types/store/store'

import { GlobalReducer } from './features/GlobalSlice'
import { PlaygroundReducer } from './features/PlaygroundSlice'
import { SVGReducer } from './features/SVGSlice'
import { VsCodeReducer } from './features/VsCodeSlice'

/**
 * Root reducer function that combines all the reducers.
 * @remarks
 * This function is used to combine all the reducers into a single root reducer.
 */
const rootReducer: Reducer<RootStoreState> = combineReducers({
  global: GlobalReducer,
  playground: PlaygroundReducer,
  svg: SVGReducer,
  vsCode: VsCodeReducer,
})

/**
 * The Redux store configuration.
 * @remarks
 * This store is created using the `configureStore` function from the Redux Toolkit.
 * It includes the reducers and middleware with the `serializableCheck` option disabled.
 */
export const store: Store<RootStoreState> = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: import.meta.env.DEV,
})
