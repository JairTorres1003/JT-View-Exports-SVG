// @ts-types="npm:@types/express@4.17.15"
import { Router } from 'express'
import { ViewController } from '@/controllers/view.controller.ts'

const router = Router()

const viewController = new ViewController()

router.post('/render-path/change', viewController.changeRenderPath)

export const viewRoutes = Router().use('/view', router)
