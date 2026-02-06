import { type PluginOption } from 'vite'
import fs from 'fs'
import path from 'path'

const wasmPath =
  'node_modules/@codingame/monaco-vscode-textmate-service-override/external/vscode-oniguruma/release/onig.wasm'

const codingameOnigWasmWebFix = (): PluginOption => {
  return {
    name: 'codingame-onig-wasm-web-fix',
    apply: 'serve', // 🔒 Only for development web
    configureServer(server) {
      const onigPath = path.resolve(wasmPath)

      server.middlewares.use((req, res, next) => {
        if (req.url?.endsWith('/external/vscode-oniguruma/release/onig.wasm')) {
          res.setHeader('Content-Type', 'application/wasm')
          res.end(fs.readFileSync(onigPath))
          return
        }
        next()
      })
    },
  }
}

export default codingameOnigWasmWebFix
