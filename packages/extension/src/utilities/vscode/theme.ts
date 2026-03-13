import type { VsCodeStyles } from '@jt-view-exports-svg/core'
import { workspace } from 'vscode'

import { DEFAULT_FONT_FAMILY } from '@/constants/misc'

/**
 * Retrieves the styles for the VS Code editor.
 * @returns {VsCodeStyles} The styles for the VS Code editor.
 */
export function getStyles(): VsCodeStyles {
  const configuration = workspace.getConfiguration('editor')

  return {
    fontFamily: configuration.get('fontFamily', DEFAULT_FONT_FAMILY),
    fontSize: configuration.get('fontSize', 12),
    fontWeight: configuration.get('fontWeight', 'normal'),
    letterSpacing: configuration.get('letterSpacing', 0),
    tabSize: configuration.get('tabSize', 4),
    fontFeatureSettings: configuration.get('fontLigatures', false) ? '"liga", "calt"' : 'normal',
  }
}
