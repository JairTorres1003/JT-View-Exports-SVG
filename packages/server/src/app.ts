import * as path from 'node:path'
import cors from 'cors'
import express from 'express'
import rateLimit from 'express-rate-limit'

import { apiHandler } from './handlers/api-handler'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // limit each IP to 300 requests per windowMs
})

const app = express()

app.use(cors())
app.use(express.json())
app.use(limiter)

app.use(express.static('src/views'))

app.get('/api/ready', (_, res) => {
  res.status(200).json({ ready: true })
})

app.get('/api/*path', apiHandler)
app.post('/api/*path', apiHandler)

app.use((_, res) => {
  res.status(404).sendFile(path.resolve('src/views/404.html'))
})

export default app
