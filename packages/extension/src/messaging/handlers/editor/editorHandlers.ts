import type { WebviewMessenger } from '../../WebviewMessenger'

import { RequestEditorConfigHandler } from './RequestEditorConfigHandler'
import { RequestEditorExtensionThemeHandler } from './RequestEditorExtensionThemeHandler'
import { RequestEditorStylesHandler } from './RequestEditorStylesHandler'
import { RequestEditorThemeModeHandler } from './RequestEditorThemeModeHandler'

export function createEditorHandlers(messenger: WebviewMessenger) {
  return [
    new RequestEditorThemeModeHandler(messenger),
    new RequestEditorConfigHandler(messenger),
    new RequestEditorExtensionThemeHandler(messenger),
    new RequestEditorStylesHandler(messenger),
  ]
}
