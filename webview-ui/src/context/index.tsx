import { createContext } from 'react'
import { SvgContextAction, SvgContextState } from '../interfaces/SvgContext'

export const SvgContext = createContext<
  | {
      state: SvgContextState
      dispatch: React.Dispatch<SvgContextAction>
    }
  | undefined
>(undefined)
