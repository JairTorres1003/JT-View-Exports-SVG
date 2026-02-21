const esbuild = require('esbuild')
const polyfillGlobals = require('@esbuild-plugins/node-globals-polyfill')
const polyfillModules = require('@esbuild-plugins/node-modules-polyfill')

const production = process.argv.includes('--production')
const watch = process.argv.includes('--watch')
const webMode = process.argv.includes('--web-mode')

/** @type {import('esbuild').Plugin} */
const esbuildProblemMatcherPlugin = {
  name: 'esbuild-problem-matcher',

  setup(build) {
    build.onStart(() => {
      console.log('[watch] build started')
    })
    build.onEnd((result) => {
      result.errors.forEach(({ text, location }) => {
        console.error(`✘ [ERROR] ${text}`)
        if (location == null) return
        console.error(`    ${location.file}:${location.line}:${location.column}:`)
      })
      console.log('[watch] build finished')
    })
  },
}

/** @type {import('esbuild').BuildOptions} */
const options = {
  platform: 'node',
  outfile: '../../dist/extension.js',
  plugins: [esbuildProblemMatcherPlugin],
}

/** @type {import('esbuild').BuildOptions} */
const webOptions = {
  platform: 'browser',
  outfile: '../../dist/web/extension.js',
  define: {
    global: 'globalThis',
  },
  plugins: [
    polyfillModules.NodeModulesPolyfillPlugin(),
    polyfillGlobals.NodeGlobalsPolyfillPlugin({
      process: true,
      buffer: true,
    }),
    esbuildProblemMatcherPlugin,
  ],
}

async function main() {
  const ctx = await esbuild.context({
    entryPoints: ['src/extension.ts'],
    bundle: true,
    format: 'cjs',
    minify: production,
    sourcemap: !production,
    sourcesContent: false,
    external: ['vscode'],
    logLevel: 'warning',
    tsconfig: './tsconfig.json',
    ...(webMode ? webOptions : options),
  })

  if (watch) {
    await ctx.watch()
    console.log('[watch] Watching for changes...')
  } else {
    await ctx.rebuild()
    await ctx.dispose()
    console.log('[build] Build complete.')
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
