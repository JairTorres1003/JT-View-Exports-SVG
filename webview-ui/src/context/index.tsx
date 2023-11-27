import { createContext } from 'react'
import { type SvgContextAction, type SvgContextState } from '../interfaces/SvgContext'

export const SvgContext = createContext<
  | {
      state: SvgContextState
      dispatch: React.Dispatch<SvgContextAction>
    }
  | undefined
>(undefined)
