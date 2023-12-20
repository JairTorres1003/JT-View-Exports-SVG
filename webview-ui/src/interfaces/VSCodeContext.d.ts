/**
 * The context of the VSCode window.
 */
export interface VSCodeContextState {
  /**
   * The current styles of the VSCode window.
   */
  styles: Record<string, any>
  /**
   * The current theme of the VSCode window.
   */
  theme: 'light' | 'dark'
}

/**
 * Represents an action that can be dispatched to modify the VSCode context's state.
 */
export type VSCodeContextAction =
  | { type: 'SET_STYLES'; payload: Record<string, any> }
  | { type: 'SET_THEME'; payload: VSCodeContextState['theme'] }
