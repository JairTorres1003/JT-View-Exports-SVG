import { createContext } from 'react'

import { type SvgContextAction, type SvgContextState } from '../interfaces/SvgContext'
import { type VSCodeContextAction, type VSCodeContextState } from '../interfaces/VSCodeContext'

export const SvgContext = createContext<
  | {
      state: SvgContextState
      dispatch: React.Dispatch<SvgContextAction>
    }
  | undefined
>(undefined)

export const VSCodeContext = createContext<
  | {
      state: VSCodeContextState
      dispatch: React.Dispatch<VSCodeContextAction>
    }
  | undefined
>(undefined)
