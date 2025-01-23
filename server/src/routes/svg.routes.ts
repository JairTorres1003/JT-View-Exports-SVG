// @ts-types="npm:@types/express@4.17.15"
import { Router } from 'express'
import { SvgController } from '@/controllers/svg.controller.ts'

const router = Router()

const svgController = new SvgController()

router.get('/get-components', svgController.getComponents)
router.post('/search-components', svgController.searchComponents)

export const svgRoutes = Router().use('/svg', router)
