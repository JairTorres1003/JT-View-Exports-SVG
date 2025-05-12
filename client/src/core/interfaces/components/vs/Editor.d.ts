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
  resetValue: () => void
  reload: () => void
}

export type TypeEditorRef = (HTMLElement & { editor?: IStandaloneCodeEditor }) | null

interface EditorHook {
  rootRef: React.RefCallback<Exclude<TypeEditorRef, 'null'>> | null
}

interface EditorHookProps extends Omit<EditorProps, 'className'> {
  forwardedRef: React.ForwardedRef<TypeEditorRef>
}
