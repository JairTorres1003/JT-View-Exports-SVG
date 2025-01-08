import { commands } from 'vscode'

import { CONFIG_KEY } from '@/constants/misc'

/**
 * Sets the context for expanded icons.
 *
 * @param {boolean} [isExpanded=true] - A boolean indicating whether the icons should be expanded. Defaults to true.
 * @returns {Promise<void>} A promise that resolves when the context is set.
 */
export const expandedIcons = async (isExpanded: boolean = true): Promise<void> => {
  await commands.executeCommand('setContext', `${CONFIG_KEY}.isExpanded`, isExpanded)
}
