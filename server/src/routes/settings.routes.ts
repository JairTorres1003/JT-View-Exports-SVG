// @ts-types="npm:@types/express@4.17.15"
import { Router } from 'express'
import { SettingsController } from '@/controllers/settings.controller.ts'

const router = Router()

const settingsController = new SettingsController()

router.get('/editor-config', settingsController.getEditorConfig)

export const settingsRoutes = Router().use('/settings', router)
