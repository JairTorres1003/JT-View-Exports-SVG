import { ExtensionHostKind, registerExtension } from '@codingame/monaco-vscode-api/extensions'
import { updateUserConfiguration } from '@codingame/monaco-vscode-configuration-service-override'
import { sanitizePathStart } from '@jt-view-exports-svg/core'

import manifest, { defaultThemePath } from './manifest-theme-extension'

/**
 * Registers the extension's default theme and updates
 * the user configuration to set `workbench.colorTheme` to
 * `"Default Theme One Dark"`.
 *
 * @remarks
 * - In this environment, the visual application of the theme may not be
 *   observable (for example, if no web view exists), but the main goal is to
 *   set the `workbench.colorTheme` value.
 * - A short pause is introduced to give the change time to be processed before
 *   continuing with dependent steps.
 *
 * @returns A promise that resolves when the theme registration, the
 * configuration update, and the short synchronization wait are complete.
 */
export async function loadThemeExtension() {
  const extension = registerExtension(manifest, ExtensionHostKind.LocalProcess)

  extension.registerFileUrl(
    defaultThemePath,
    new URL(
      `/api/vs/theme/${sanitizePathStart(defaultThemePath)}`,
      `http://localhost:${process.env.PORT || 3000}`
    ).toString()
  )

  await updateUserConfiguration(
    JSON.stringify({ 'workbench.colorTheme': 'Default Theme One Dark' })
  )

  // sleep for a short time to ensure the theme is applied before proceeding
  await new Promise((resolve) => setTimeout(resolve, 100))
}
