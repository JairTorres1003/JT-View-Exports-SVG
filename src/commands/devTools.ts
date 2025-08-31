import { commands } from 'vscode'

import { CONFIG_KEY } from '@/constants/misc'
import { ViewExportsSVGController } from '@/controllers/views'
import { SVGPostMessage } from '@/enum/ViewExportsSVG'
import { isEmpty } from '@/utilities/misc'

/**
 * Toggles the developer tools in the application.
 *
 * @param open - A boolean indicating whether to open (true) or close (false) the developer tools.
 * @returns A promise that resolves when the command execution is complete.
 */
export const toggleDevTools = async (open: boolean): Promise<void> => {
  await commands.executeCommand('setContext', `${CONFIG_KEY}.isOpenDevTools`, open)
}

/**
 * Toggles the developer tools panel open or closed.
 *
 * @param open - A boolean indicating whether to open (true) or close (false) the developer tools.
 * @returns A promise that resolves when the operation is complete.
 */
export const runToggleDevTools = async (open: boolean): Promise<void> => {
  await toggleDevTools(open)

  if (!isEmpty(ViewExportsSVGController.currentPanel)) {
    ViewExportsSVGController.currentPanel._postMessage(SVGPostMessage.SendToggleOpenDevTools, open)
  }
}
