import { type FC, type ReactNode, useContext, useReducer } from 'react'

import { SvgContext } from '../context'
import { type SvgContextAction, type SvgContextState } from '../interfaces/SvgContext'

const initialState: SvgContextState = {
  selectedSvg: null,
  selectedSvgPath: null,
  snackbar: { open: false, text: null },
}

const actionHandlers: Record<string, (state: SvgContextState, payload?: any) => SvgContextState> = {
  SELECTED: (state, payload) => ({
    ...state,
    selectedSvg: payload?.item,
    selectedSvgPath: payload?.path,
  }),
  SNACKBAR: (state, payload) => ({ ...state, snackbar: payload }),
}

/**
 * Reducer function for managing the state of an SVG context.
 * @param state - The current state of the SVG context.
 * @param action - An action object that describes the state change.
 * @returns The new state of the SVG context after applying the action.
 */
function svgReducer(state: SvgContextState, action: SvgContextAction): SvgContextState {
  const handler = actionHandlers[action.type]

  if (handler) {
    return handler(state, action.payload)
  }

  return state
}

/**
 * Provides an SVG context for managing SVG-related state and actions.
 * @returns The JSX element representing the SVG provider.
 */
const SvgProvider: FC<{ children: ReactNode }> = (props) => {
  const [state, dispatch] = useReducer(svgReducer, initialState)

  return <SvgContext.Provider value={{ state, dispatch }}>{props.children}</SvgContext.Provider>
}

export default SvgProvider

/**
 * A custom hook for accessing the SVG context and its state and dispatch functions.
 * @returns An object containing the SVG context's state and dispatch functions.
 * @throws Throws an error if used outside of a SvgProvider.
 */
export const useSvg = () => {
  const context = useContext(SvgContext)

  if (context === undefined) {
    throw new Error('useSvg must be used within a SvgProvider')
  }

  return context
}
