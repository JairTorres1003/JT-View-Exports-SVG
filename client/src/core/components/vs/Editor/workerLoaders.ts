export type WorkerLoader = () => Worker

const workerLoaders: Partial<Record<string, WorkerLoader>> = {
  TextEditorWorker: () =>
    new Worker(new URL('monaco-editor/esm/vs/editor/editor.worker.js', import.meta.url), {
      type: 'module',
    }),
}

window.MonacoEnvironment = {
  getWorker: function (_workerId, label) {
    const workerFactory = workerLoaders[label]
    if (workerFactory != null) {
      return workerFactory()
    }

    throw new Error(`Worker ${label} not found`)
  },
}
