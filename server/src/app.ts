import cors from 'cors'
// @ts-types="npm:@types/express@4.17.15"
import express from 'express'
import * as path from 'path'

import { svgRoutes } from '@/routes/svg.routes.ts'
import { iconsRoutes } from '@/routes/icons.routes.ts'
import { settingsRoutes } from '@/routes/settings.routes.ts'

const app = express()
const prefix = Deno.env.get('URL_SEGMENT') ?? '/'

app.use(cors())
app.use(express.json())

app.use(express.static('src/views'))

app.use(prefix, svgRoutes)
app.use(prefix, iconsRoutes)
app.use(prefix, settingsRoutes)

app.use((_, res) => {
  res.status(404).sendFile(path.resolve('src/views/404.html'))
})

export default app
