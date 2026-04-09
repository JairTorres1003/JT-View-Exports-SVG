import type { WebviewMessenger } from '../../WebviewMessenger'

import { IsExpandComponentsHandler } from './IsExpandComponentsHandler'
import { ProcessUploadedFilesHandler } from './ProcessUploadedFilesHandler'
import { ReloadComponentHandler } from './ReloadComponentHandler'
import { RequestComponentsHandler } from './RequestComponentsHandler'
import { RequestFilesComponentsHandler } from './RequestFilesComponentsHandler'
import { RequestUserComponentsHandler } from './RequestUserComponentsHandler'
import { SearchComponentsHandler } from './SearchComponentsHandler'

export function createUIHandlers(messenger: WebviewMessenger) {
  return [
    new RequestComponentsHandler(messenger),
    new RequestUserComponentsHandler(messenger),
    new RequestFilesComponentsHandler(messenger),
    new SearchComponentsHandler(messenger),
    new ReloadComponentHandler(messenger),
    new IsExpandComponentsHandler(),
    new ProcessUploadedFilesHandler(messenger),
  ]
}
