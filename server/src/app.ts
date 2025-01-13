// @ts-types="npm:@types/express@4.17.15"
import express from 'express'
import * as path from 'path'

import { svgRoutes } from '@/routes/svg.route.ts'

const app = express()

app.use(express.static('src/views'))

app.use('/api', svgRoutes)

app.use((_, res) => {
  res.status(404).sendFile(path.resolve('src/views/404.html'))
})

export default app
