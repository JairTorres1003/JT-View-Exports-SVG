import 'jsr:@std/dotenv/load'
import '@/polyfill.ts'
import '@/vscode.ts'

import app from '@/app.ts'

const PORT = Deno.env.get('PORT') || 3000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

Deno.env.set('BASE_PATH', Deno.cwd())
