import * as fs from 'node:fs'
import path from 'node:path'
import importMetaUrlPlugin from '@codingame/esbuild-import-meta-url-plugin'
import babel from '@rolldown/plugin-babel'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import codingameOnigWasmWebFix from './plugins/codingame-onig-wasm-web-fix'
import legacyManifest from './plugins/legacy-manifest'
import removeFiles from './plugins/remove-files'

const pkg = JSON.parse(
  fs.readFileSync(new URL('../extension/package.json', import.meta.url).pathname).toString()
)

const localDependencies = Object.entries(pkg.dependencies as Record<string, string>)
  .filter(([name]) => name.startsWith('@codingame/'))
  .map(([name]) => name)

const optimizeDepsExclude = new Set([
  '@codingame/monaco-vscode-theme-defaults-default-extension',
  '@codingame/monaco-vscode-javascript-default-extension',
  '@codingame/monaco-vscode-typescript-basics-default-extension',
])

const optimizeDepsInclude = localDependencies.filter((name) => !optimizeDepsExclude.has(name))

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    codingameOnigWasmWebFix(),
    legacyManifest(),
    removeFiles(),
  ],
  optimizeDeps: {
    rolldownOptions: {
      plugins: [importMetaUrlPlugin],
    },
    exclude: Array.from(optimizeDepsExclude),
    include: optimizeDepsInclude,
  },
  define: {
    rootDirectory: JSON.stringify(__dirname),
    __APP_NAME: JSON.stringify(pkg.name),
    __APP_PUBLISHER: JSON.stringify(pkg.publisher),
    __APP_VERSION: JSON.stringify(pkg.version),
  },
  resolve: {
    tsconfigPaths: true,
    dedupe: ['vscode', 'monaco-editor', ...localDependencies],
    alias: {
      // @vscode/diff only touches node:fs/promises behind a `process.versions?.node`
      // guard that never runs in the webview; stub it to silence the externalization warning
      'node:fs/promises': path.join(__dirname, 'stubs/node-fs-promises.ts'),
    },
  },
  build: {
    target: 'es2022',
    emptyOutDir: true,
    outDir: path.join(__dirname, '../extension/dist/webview'),
    reportCompressedSize: false,
    cssCodeSplit: false,
    assetsInlineLimit: 0,
    manifest: 'manifest.json',
    // The monaco-vscode-api workbench bundle (~6.9 MB) is vendor code loaded lazily only
    // when the playground editor opens; the webview loads from local disk, so the 500 kB
    // web-oriented default doesn't apply. App chunks stay far below this limit.
    chunkSizeWarningLimit: 7000,
    rolldownOptions: {
      output: {
        chunkFileNames: 'chunks/[hash].js',
        assetFileNames: 'assets/[hash].[ext]',
      },
    },
  },
  worker: {
    format: 'es',
    rolldownOptions: {
      output: {
        entryFileNames: 'chunks/[name]-[hash].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
})
