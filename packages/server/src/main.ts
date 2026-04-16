import 'dotenv/config'

import './polyfill'

import app from './app'
import bootstrapVSCode from './core/vscode-setup'

const PORT = process.env.PORT || 3000

async function start() {
  try {
    app.listen(PORT, async () => {
      console.log('⏳ Initializing VS Code services...')
      await bootstrapVSCode()

      console.log('✅ VS Code Services ready')
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('❌ Fatal error starting server:', error)
    process.exit(1)
  }
}

start()
