import { type FC, type ReactNode, useContext, useReducer, type Reducer } from 'react'

import { SvgContext } from '../context'
import { type SvgContextAction, type SvgContextState } from '../interfaces/SvgContext'

const initialState: SvgContextState = {
  selectedSvg: null,
  selectedSvgName: '',
  selectedSvgPath: null,
  selectedSvgLanguage: '',
  snackbar: { open: false, text: null },
  snackbarPlayground: { open: false, text: null, severity: 'success' },
  isScanning: false,
}

/**
 * The reducer function for managing the SVG context's state.
 * @param prevState The previous state of the SVG context.
 * @param action The action to perform on the SVG context.
 * @returns The new state of the SVG context.
 */
const svgReducer: Reducer<SvgContextState, SvgContextAction> = (prevState, action) => {
  switch (action.type) {
    case 'CLEAR_SELECTED':
      return {
        ...prevState,
        selectedSvg: null,
        selectedSvgName: '',
        selectedSvgPath: null,
        selectedSvgLanguage: '',
      }
    case 'SELECTED':
      if (action.payload === null) {
        return { ...prevState }
      }

      return {
        ...prevState,
        selectedSvg: action.payload.item,
        selectedSvgName: action.payload.name,
        selectedSvgPath: action.payload.path,
        selectedSvgLanguage: action.payload.language,
      }
    case 'SNACKBAR':
      return { ...prevState, snackbar: action.payload ?? { open: false, text: null } }
    case 'SNACKBAR_PLAYGROUND':
      return {
        ...prevState,
        snackbarPlayground: {
          ...action.payload,
          severity: action.payload.severity ?? 'success',
        },
      }
    case 'UPDATE_PLAYGROUND':
      return { ...prevState, selectedSvg: action.payload }
    case 'IS_SCANNING': {
      return { ...prevState, isScanning: action.payload }
    }
    default:
      return prevState
  }
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
export const useSvg = (): {
  state: SvgContextState
  dispatch: React.Dispatch<SvgContextAction>
} => {
  const context = useContext(SvgContext)

  if (context === undefined) {
    throw new Error('useSvg must be used within a SvgProvider')
  }

  return context
}
