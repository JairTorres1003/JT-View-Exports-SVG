import type { WebviewMessenger } from '../../WebviewMessenger'
import { ReloadEditorExtensionThemeHandler } from './ReloadEditorExtensionThemeHandler'

import { RequestEditorConfigHandler } from './RequestEditorConfigHandler'
import { RequestEditorExtensionThemeHandler } from './RequestEditorExtensionThemeHandler'
import { RequestEditorStylesHandler } from './RequestEditorStylesHandler'

export function createEditorHandlers(messenger: WebviewMessenger) {
  return [
    new RequestEditorConfigHandler(messenger),
    new RequestEditorExtensionThemeHandler(messenger),
    new RequestEditorStylesHandler(messenger),
    new ReloadEditorExtensionThemeHandler(),
  ]
}
