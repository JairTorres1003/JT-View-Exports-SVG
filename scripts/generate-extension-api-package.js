const fs = require('node:fs')
const path = require('node:path')

const rootDir = path.resolve(__dirname, '..')
const extensionDir = path.join(rootDir, 'packages/extension')
const extensionApiDir = path.join(rootDir, 'packages/extension-api')

const extensionPkgPath = path.join(extensionDir, 'package.json')
const extensionPkg = JSON.parse(fs.readFileSync(extensionPkgPath, 'utf8'))

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
  exports: {
    '.': './dist/extension.js',
    './*': './dist/*.js',
  },
  files: ['dist'],
  keywords: [...(extensionPkg.keywords || []), 'API', 'ESM'],
  scripts: {
    clean: 'rimraf dist',
    build: 'pnpm run clean && tsc',
  },
  dependencies: {
    '@jt-view-exports-svg/core': 'workspace:*',
  },
  devDependencies: {
    typescript: '^5.9.3',
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
