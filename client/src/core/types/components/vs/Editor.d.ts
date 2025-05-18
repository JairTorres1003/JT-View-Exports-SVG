import type * as monaco from 'monaco-editor'

export interface EditorProps {
  className?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
}

export interface IStandaloneCodeEditor extends monaco.editor.IStandaloneCodeEditor {
  setDefaultValue: (value: string) => void
  getDefaultValue: () => string
  resetValue: VoidFunction
  updateUserConfiguration: (userConfiguration: Record<string, unknown>) => Promise<void>
  _themeService: {
    getColorThemes: () => Promise<{ settingsId: string }[]>
  }
}

interface EditorLoader {
  start: (duration: number, endAction?: VoidFunction) => VoidFunction
  stop: VoidFunction
}

export type TypeEditorRef =
  | (HTMLElement & {
      editor?: IStandaloneCodeEditor
      editorLoader?: () => EditorLoader
    })
  | null

interface EditorHook {
  rootRef: React.RefCallback<Exclude<TypeEditorRef, 'null'>> | null
  loading: boolean
  progress: number
}

interface EditorHookProps extends Omit<EditorProps, 'className'> {
  forwardedRef: React.ForwardedRef<TypeEditorRef>
}
