import * as fs from 'fs'
import { glob } from 'fs/promises'
import * as path from 'path'
import type { Plugin } from 'vite'

const filesToRemove = ['dev', 'index.html', 'assets/*.svg']

function removeFiles(): Plugin {
  let outDir = 'dist'
  let rootDir = process.cwd()

  return {
    name: 'remove-files',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
      rootDir = config.root
    },
    async closeBundle() {
      for (const pattern of filesToRemove) {
        const fullPath = path.resolve(rootDir, outDir, pattern)
        for await (const file of glob(fullPath, { withFileTypes: false })) {
          fs.rmSync(file, { recursive: true, force: true })
        }
      }
    },
  }
}

export default removeFiles
