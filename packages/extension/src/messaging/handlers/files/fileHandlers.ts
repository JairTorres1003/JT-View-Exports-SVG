import type { WebviewMessenger } from '@/messaging/WebviewMessenger'

import { CreateTempFilesHandler } from './CreateTempFilesHandler'
import { OpenDialogFilesHandler } from './OpenDialogFilesHandler'
import { OpenFileInEditorHandler } from './OpenFileInEditorHandler'

export function createFileHandlers(messenger: WebviewMessenger) {
  return [
    new OpenFileInEditorHandler(),
    new OpenDialogFilesHandler(messenger),
    new CreateTempFilesHandler(messenger),
  ]
}
