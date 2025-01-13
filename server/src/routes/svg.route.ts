// @ts-types="npm:@types/express@4.17.15"
import { Router } from 'express'

const router = Router()

router.get('/extract-component', function (_, res) {
  res.send('Extracting SVG component...')
})

export const svgRoutes = Router().use('/svg', router)
