// @ts-types="npm:@types/express@4.17.15"
import { Router } from 'express'
import { IconsController } from '@/controllers/icons.controller.ts'

const router = Router()

const svgController = new IconsController()

router.post('/:type{recent|favorite}/add', svgController.addIcon)
router.post('/:type{recent|favorite}/remove', svgController.removeIcon)
router.get('/home/get', svgController.getIcons)
router.get('/:type{recent|favorite}/clear', svgController.clearIcons)

export const iconsRoutes = Router().use('/icons', router)
