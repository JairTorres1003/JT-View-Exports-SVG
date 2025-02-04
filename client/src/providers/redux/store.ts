import { type Reducer, type Store, combineReducers, configureStore } from '@reduxjs/toolkit'
import { type TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux'

import { GlobalReducer } from './features/GlobalSlice'
import { SVGReducer } from './features/SVGSlice'
import { VsCodeReducer } from './features/VsCodeSlice'

import type { RootStoreState } from '@/interfaces/redux/feature'

/**
 * Root reducer function that combines all the reducers.
 * @remarks
 * This function is used to combine all the reducers into a single root reducer.
 */
const rootReducer: Reducer<RootStoreState> = combineReducers({
  svg: SVGReducer,
  vsCode: VsCodeReducer,
  global: GlobalReducer,
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

/**
 * A typed hook to use the Redux store state.
 * @remarks
 * This hook is used to access the Redux store state in a type-safe manner.
 */
export const useSelector: TypedUseSelectorHook<RootStoreState> = useReduxSelector
