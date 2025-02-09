export type WorkerLoader = () => Promise<Worker>

const workerLoaders: Partial<Record<string, WorkerLoader>> = {
  TextEditorWorker: async () => {
    const { default: EditorWorker } = await import(
      'monaco-editor/esm/vs/editor/editor.worker?worker'
    )

    return new EditorWorker()
  },
}

if (typeof window === 'undefined') {
  throw new Error('This script can only be run in a browser environment')
}

window.MonacoEnvironment ??= {
  getWorker: async function (_workerId, label) {
    const workerFactory = workerLoaders[label]
    if (workerFactory != null) {
      return await workerFactory()
    }

    throw new Error(`Worker ${label} not found`)
  },
}
