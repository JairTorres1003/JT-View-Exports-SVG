export interface IThemeData {
  themeName: string
  themeData: IStandaloneThemeData
}

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
  /**
   * The current theme data of the VSCode window.
   */
  themeData: IThemeData
}

/**
 * Represents an action that can be dispatched to modify the VSCode context's state.
 */
export type VSCodeContextAction =
  | { type: 'SET_STYLES'; payload: Record<string, any> }
  | { type: 'SET_THEME'; payload: VSCodeContextState['theme'] }
  | { type: 'SET_THEME_DATA'; payload: IThemeData }
