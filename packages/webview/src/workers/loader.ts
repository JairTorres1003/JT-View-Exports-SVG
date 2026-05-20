export type WorkerLoader = () => Worker

const createEditorWorker = () =>
  new Worker(new URL('monaco-editor/esm/vs/editor/editor.worker', import.meta.url), {
    type: 'module',
  })

const workerLoaders: Partial<Record<string, WorkerLoader>> = {
  TextEditorWorker: createEditorWorker,
  editorWorkerService: createEditorWorker,
  TextMateWorker: () =>
    new Worker(
      new URL('@codingame/monaco-vscode-textmate-service-override/worker', import.meta.url),
      { type: 'module' }
    ),
}

if (typeof window === 'undefined') {
  throw new Error('This script can only be run in a browser environment')
}

window.MonacoEnvironment = {
  getWorker: (_workerId, label) => {
    const workerFactory = workerLoaders[label]
    if (workerFactory != null) {
      return workerFactory()
    }

    throw new Error(`Worker ${label} not found`)
  },
}
