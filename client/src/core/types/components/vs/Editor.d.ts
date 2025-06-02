import type { ExtensionManage } from '@api/types/vscode'
import type * as monaco from 'monaco-editor'

export interface EditorProps {
  className?: string
  defaultValue?: string
  onChange?: (value: string) => void
}

export interface IStandaloneCodeEditor extends monaco.editor.IStandaloneCodeEditor {
  setDefaultValue: (value: string) => void
  getDefaultValue: () => string
  resetValue: VoidFunction
  api: {
    updateUserConfiguration: (userConfiguration: Record<string, unknown>) => Promise<void>
    registerCompletionItemProvider: (
      name: string,
      provider: monaco.languages.CompletionItemProvider
    ) => monaco.IDisposable | undefined
  }
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

export interface EditorHook {
  rootRef: React.RefCallback<Exclude<TypeEditorRef, 'null'>> | null
  loading: boolean
  progress: number
}

export interface EditorHookProps extends Omit<EditorProps, 'className'> {
  forwardedRef: React.ForwardedRef<TypeEditorRef>
}

export interface EditorConfigurations {
  onChange: (value: string) => void
  userConfiguration: Record<string, unknown>
  extensionTheme: ExtensionManage
  language: 'javascript' | 'javascriptreact' | 'typescript' | 'typescriptreact'
}
