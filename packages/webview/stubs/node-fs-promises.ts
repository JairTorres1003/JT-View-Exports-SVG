/**
 * Browser stub for `node:fs/promises`.
 *
 * `@vscode/diff` (transitive dependency of `@codingame/monaco-vscode-api`) dynamically
 * imports `node:fs/promises` inside a branch guarded by `process.versions?.node`, which
 * never runs in the webview. Aliasing the module to this stub prevents Vite from logging
 * the "Module has been externalized for browser compatibility" warning during build.
 */
export const readFile = async (): Promise<never> => {
  throw new Error('node:fs/promises is not available in the browser')
}

export default { readFile }
