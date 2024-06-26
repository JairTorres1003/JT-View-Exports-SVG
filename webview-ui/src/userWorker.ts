import * as monaco from 'monaco-editor'
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

self.MonacoEnvironment = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getWorker(_: any, label: string) {
    if (label === 'typescript' || label === 'javascript') return new TsWorker()
    return new EditorWorker()
  },
}

monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true)
