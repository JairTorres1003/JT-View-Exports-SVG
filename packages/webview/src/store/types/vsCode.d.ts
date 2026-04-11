import type { EditorStyles, ExtensionManage } from '@jt-view-exports-svg/core'
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit'

export interface VsCodeState {
  styles: Partial<EditorStyles>
  editorConfig: Record<string, unknown>
  extensionTheme?: ExtensionManage
}

export interface VsCodeReducers {
  setVsCodeStyles: CaseReducer<VsCodeState, PayloadAction<EditorStyles>>
  setEditorConfig: CaseReducer<VsCodeState, PayloadAction<Record<string, unknown>>>
  setExtensionTheme: CaseReducer<VsCodeState, PayloadAction<ExtensionManage | undefined>>
  [key: string]: CaseReducer<VsCodeState, PayloadAction<any>>
}
