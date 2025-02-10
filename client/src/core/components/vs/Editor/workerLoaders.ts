export type WorkerLoader = () => Promise<Worker>

/**
 * Asynchronously loads a web worker from the specified file output.
 *
 * @param fileOutput - The path to the worker file relative to the current module.
 * @returns A promise that resolves to a new Worker instance.
 */
async function loadWorker(fileOutput: string): Promise<Worker> {
  const result = await fetch(new URL(fileOutput, import.meta.url))
  const blob = await result.blob()
  const blobUrl = URL.createObjectURL(blob)
  return new Worker(blobUrl)
}

const workerLoaders: Partial<Record<string, WorkerLoader>> = {
  TextEditorWorker: async () => {
    if (!window.ViewExportsSVG) {
      return new Worker(new URL('monaco-editor/esm/vs/editor/editor.worker', import.meta.url), {
        type: 'module',
      })
    }

    return await loadWorker('./editor.worker.js')
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
