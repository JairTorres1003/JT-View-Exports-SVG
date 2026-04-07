import type { WebviewMessenger } from '@/messaging/WebviewMessenger'

import { OpenDialogFilesHandler } from './OpenDialogFilesHandler'
import { OpenFileInEditorHandler } from './OpenFileInEditorHandler'

export function createFileHandlers(messenger: WebviewMessenger) {
  return [new OpenFileInEditorHandler(), new OpenDialogFilesHandler(messenger)]
}
