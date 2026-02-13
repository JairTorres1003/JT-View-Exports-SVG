import { type Plugin, type ResolvedConfig } from 'vite'
import fs from 'fs'
import path from 'path'

interface ViteManifestEntry {
  file: string
  isEntry?: boolean
}

interface ManifestContent {
  favicon: string
  main: string
  style: string
}

const legacyManifest = (): Plugin => {
  let resolvedConfig: ResolvedConfig

  return {
    name: 'legacy-manifest',
    apply: 'build',
    configResolved(config) {
      resolvedConfig = config
    },
    writeBundle() {
      const outDir = resolvedConfig.build.outDir || 'dist'
      const outPath = path.resolve(resolvedConfig.root, outDir, 'manifest.json')
      if (!fs.existsSync(outPath)) return

      const viteManifest = JSON.parse(fs.readFileSync(outPath, 'utf8')) as Record<
        string,
        ViteManifestEntry
      >

      const getFile = (entryName: string): string => {
        const entry = viteManifest[entryName]
        return entry ? entry.file : ''
      }

      const manifest: ManifestContent = {
        favicon: getFile('favicon.ico'),
        main: getFile('index.html'),
        style: getFile('style.css'),
      }

      if (Object.values(manifest).some((value) => value === '')) {
        console.warn('Legacy manifest is missing some entries:', manifest)
      }

      fs.writeFileSync(outPath, JSON.stringify(manifest))
    },
  }
}

export default legacyManifest
