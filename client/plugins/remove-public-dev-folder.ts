import * as fs from 'fs'
import * as path from 'path'
import type { Plugin } from 'vite'

function removePublicDevFolder(): Plugin {
  let outDir = 'dist'
  let rootDir = process.cwd()

  return {
    name: 'remove-public-dev-folder',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
      rootDir = config.root
    },
    closeBundle() {
      const devPath = path.resolve(rootDir, outDir, 'dev')
      if (fs.existsSync(devPath)) {
        fs.rmSync(devPath, { recursive: true, force: true })
      }
    },
  }
}

export default removePublicDevFolder
