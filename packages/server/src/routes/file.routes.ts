// @ts-types="npm:@types/express@4.17.15"
import { Router } from 'express'
import { FileController } from '@/controllers/file.controller.ts'

const router = Router()

const fileController = new FileController()

router.post('/open', fileController.openFile)

export const fileRoutes = Router().use('/file', router)
