import * as path from 'node:path'
import cors from 'cors'
// @ts-types="npm:@types/express@4.17.15"
import express from 'express'
import rateLimit from 'express-rate-limit'

import { fileRoutes } from '@/routes/file.routes.ts'
import { iconsRoutes } from '@/routes/icons.routes.ts'
import { settingsRoutes } from '@/routes/settings.routes.ts'
import { svgRoutes } from '@/routes/svg.routes.ts'
import { viewRoutes } from '@/routes/view.routes.ts'

const app = express()
const prefix = Deno.env.get('URL_SEGMENT') ?? '/'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
})

app.use(cors())
app.use(express.json())
app.use(limiter)

app.use(express.static('src/views'))

app.use(prefix, svgRoutes)
app.use(prefix, iconsRoutes)
app.use(prefix, settingsRoutes)
app.use(prefix, fileRoutes)
app.use(prefix, viewRoutes)

app.use((_, res) => {
  res.status(404).sendFile(path.resolve('src/views/404.html'))
})

export default app
