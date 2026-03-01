const fs = require('node:fs')
const path = require('node:path')
const { globSync } = require('glob')

const distPath = 'packages/extension-api/dist'
const files = globSync(`${distPath}/**/*.{js,d.ts}`)

files.forEach((file) => {
  const content = fs.readFileSync(file, 'utf8')

  const relativeDir = path.relative(path.dirname(file), distPath) || '.'
  const prefix =
    relativeDir === '.' ? './' : relativeDir.endsWith('/') ? relativeDir : `${relativeDir}/`

  const newContent = content.replace(
    /((?:import|export|from|require)\s+['"])@\/([^'"]+)(['"])/g,
    (_match, p1, p2, p3) => {
      return `${p1}${prefix}${p2}${p3}`
    }
  )

  if (content !== newContent) {
    fs.writeFileSync(file, newContent)
    console.log(`✅ Fixed ESM Alias: ${path.relative(distPath, file)}`)
  }
})
