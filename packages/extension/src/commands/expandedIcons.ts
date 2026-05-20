import { ExtensionMessage } from '@jt-view-exports-svg/core'
import { commands } from 'vscode'

import { CONFIG_KEY } from '@/constants/misc'
import { PanelController } from '@/controllers/views/PanelController'

/**
 * Sets the context for expanded icons.
 *
 * @param isExpanded - A boolean indicating whether the icons should be expanded. Defaults to true.
 * @returns {Promise<void>} A promise that resolves when the context is set.
 */
export const expandedIcons = async (isExpanded = true): Promise<void> => {
  await commands.executeCommand('setContext', `${CONFIG_KEY}.isExpanded`, isExpanded)
}

/**
 * Toggles the expanded state of icons.
 *
 * @param isExpanded - A boolean indicating whether the icons should be expanded. Defaults to true.
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 */
export const runToggleExpandIcon = async (isExpanded = true): Promise<void> => {
  await expandedIcons(isExpanded)

  PanelController.send(ExtensionMessage.ToggleExpandAllComponents, isExpanded)
}
