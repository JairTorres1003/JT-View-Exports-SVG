import { commands } from 'vscode'

import { CONFIG_KEY } from '@/constants/misc'

/**
 * Toggles the visibility of view actions in the editor.
 *
 * @param show - A boolean indicating whether to show (true) or hide (false) the actions.
 * @returns A promise that resolves when the command execution is complete.
 */
export const toggleViewActions = async (show: boolean): Promise<void> => {
  await commands.executeCommand('setContext', `${CONFIG_KEY}.showActions`, show)
}
