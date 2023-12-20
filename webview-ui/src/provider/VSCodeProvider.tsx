import { type FC, type ReactNode, useContext, useReducer, type Reducer } from 'react'

import { VSCodeContext } from '../context'
import { type VSCodeContextAction, type VSCodeContextState } from '../interfaces/VSCodeContext'

const initialState: VSCodeContextState = {
  styles: {},
  theme: 'light',
}

/**
 * The reducer function for managing the VSCode context's state.
 * @param prevState The previous state of the VSCode context.
 * @param action The action to perform on the VSCode context.
 * @returns The new state of the VSCode context.
 */
const vscodeReducer: Reducer<VSCodeContextState, VSCodeContextAction> = (prevState, action) => {
  switch (action.type) {
    case 'SET_STYLES':
      return { ...prevState, styles: action.payload }
    case 'SET_THEME':
      return { ...prevState, theme: action.payload }
    default:
      return prevState
  }
}

const VSCodeProvider: FC<{ children: ReactNode }> = (props) => {
  const [state, dispatch] = useReducer(vscodeReducer, initialState)

  return (
    <VSCodeContext.Provider value={{ state, dispatch }}>{props.children}</VSCodeContext.Provider>
  )
}

export default VSCodeProvider

export const useVSCode = () => {
  const context = useContext(VSCodeContext)

  if (!context) {
    throw new Error('useVSCode must be used within a VSCodeProvider')
  }

  return context
}
