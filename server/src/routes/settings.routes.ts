// @ts-types="npm:@types/express@4.17.15"
import { Router } from 'express'
import { SettingsController } from '@/controllers/settings.controller.ts'

const router = Router()

const settingsController = new SettingsController()

router.get('/editor-config', settingsController.getEditorConfig)
router.post('/expand-all/toggle', settingsController.toggleExpandAll)
router.get('/extension-theme', settingsController.getExtensionTheme)
router.get('/vscode-styles', settingsController.getVscodeStyles)

export const settingsRoutes = Router().use('/settings', router)
