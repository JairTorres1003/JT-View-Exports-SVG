import 'jsr:@std/dotenv/load'
// @ts-types="npm:@types/express@4.17.15"
import express from 'express'

const app = express()

const PORT = Deno.env.get('PORT')

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
