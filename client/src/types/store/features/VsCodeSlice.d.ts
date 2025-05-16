import { ExtensionManage, VsCodeStyles } from '@api/interfaces/vscode'
import { type CaseReducer, type PayloadAction } from '@reduxjs/toolkit'

export interface VsCodeState {
  styles: Partial<VsCodeStyles>
  editorConfig: Record<string, unknown>
  extensionTheme?: ExtensionManage
}

export interface VsCodeReducers {
  /**
   * Sets the VsCode styles in the state.
   */
  setVsCodeStyles: CaseReducer<VsCodeState, PayloadAction<VsCodeStyles>>
  /**
   * Sets the editor configuration in the state.
   */
  setEditorConfig: CaseReducer<VsCodeState, PayloadAction<Record<string, unknown>>>
  /**
   * Sets the extension theme in the state.
   */
  setExtensionTheme: CaseReducer<VsCodeState, PayloadAction<ExtensionManage | undefined>>

  [key: string]: CaseReducer<VsCodeState, PayloadAction<any>>
}
