import type { EditorStyles, ExtensionManage, ThemeMode } from '@jt-view-exports-svg/core'
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit'

export interface VsCodeState {
  styles: Partial<EditorStyles>
  editorConfig: Record<string, unknown>
  extensionTheme?: ExtensionManage
  themeKind: ThemeMode
}

export interface VsCodeReducers {
  /**
   * Sets the VsCode styles in the state.
   */
  setVsCodeStyles: CaseReducer<VsCodeState, PayloadAction<EditorStyles>>
  /**
   * Sets the editor configuration in the state.
   */
  setEditorConfig: CaseReducer<VsCodeState, PayloadAction<Record<string, unknown>>>
  /**
   * Sets the extension theme in the state.
   */
  setExtensionTheme: CaseReducer<VsCodeState, PayloadAction<ExtensionManage | undefined>>
  /**
   * Sets the theme kind in the state.
   */
  setThemeKind: CaseReducer<VsCodeState, PayloadAction<ThemeMode>>

  // biome-ignore lint/suspicious/noExplicitAny: This is a catch-all for any additional reducers that may be added in the future.
  [key: string]: CaseReducer<VsCodeState, PayloadAction<any>>
}
