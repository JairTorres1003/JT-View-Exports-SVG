const fs = require('node:fs')
const path = require('node:path')

const rootDir = path.resolve(__dirname, '..')
const extensionDir = path.join(rootDir, 'packages/extension')
const extensionApiDir = path.join(rootDir, 'packages/extension-api')

const extensionPkgPath = path.join(extensionDir, 'package.json')
const extensionPkg = JSON.parse(fs.readFileSync(extensionPkgPath, 'utf8'))

const exclude = ['extension.ts', 'test']

// Generate exports field by including all .ts/.tsx files in src except excluded ones
const exportsField = {
  '.': {
    import: './dist/extension.js',
    types: './dist/extension.d.ts',
  },
}

const srcDir = path.join(extensionDir, 'src')

function addExports(relativePath = '') {
  const entries = fs.readdirSync(path.join(srcDir, relativePath), { withFileTypes: true })
  for (const entry of entries) {
    const entryPath = path.join(relativePath, entry.name)
    if (exclude.some((ex) => entryPath.startsWith(ex))) {
      continue
    }
    if (entry.isDirectory()) {
      addExports(entryPath)
    } else if (entry.isFile() && (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx'))) {
      if (entry.name.endsWith('.d.ts')) {
        continue
      }

      let exportKey = `./${entryPath.replace(/\.(ts|tsx)$/, '')}`
      const outputPath = entryPath.replace(/\.(ts|tsx)$/, '.js')

      if (exportKey.endsWith('/index')) {
        exportKey = exportKey.replace(/\/index$/, '')
      }

      exportsField[exportKey] = {
        import: `./dist/${outputPath}`,
        types: `./dist/${outputPath.replace(/\.js$/, '.d.ts')}`,
      }
    }
  }
}

addExports()

const apiPkg = {
  name: '@jt-view-exports-svg/extension-api',
  version: extensionPkg.version,
  description: `API surface of JT View Exports SVG extension (v${extensionPkg.version}). Auto-generated from extension build.`,
  type: 'module',
  private: false,
  license: extensionPkg.license,
  author: extensionPkg.author,
  repository: {
    type: 'git',
    url: extensionPkg.repository.url,
    directory: 'packages/extension-api',
  },
  main: './dist/extension.js',
  types: './dist/extension.d.ts',
  exports: exportsField,
  files: ['dist'],
  keywords: [...(extensionPkg.keywords || []), 'API', 'ESM'],
  scripts: {
    clean: 'rimraf dist',
    build: 'pnpm run clean && tsc -p tsconfig.json',
  },
  dependencies: {
    '@jt-view-exports-svg/core': 'workspace:*',
  },
}

// Ensure output directory exists
fs.mkdirSync(extensionApiDir, { recursive: true })

// Write package.json for the API package
fs.writeFileSync(
  path.join(extensionApiDir, 'package.json'),
  `${JSON.stringify(apiPkg, null, 2)}\n`,
  'utf8'
)

console.log(`Generated extension API package at ${extensionApiDir}`)
