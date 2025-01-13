import 'jsr:@std/dotenv/load'

import app from '@/app.ts'

const PORT = Deno.env.get('PORT') || 3000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
