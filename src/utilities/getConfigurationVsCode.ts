import { workspace } from 'vscode'

/**
 * Retrieves the VS Code editor configuration.
 * @returns An object containing the editor styles.
 */
export function getConfigurationVsCode(): any {
  const configuration = workspace.getConfiguration('editor')

  const styles = {
    fontFamily: configuration.get('fontFamily'),
    fontLigatures: configuration.get('fontLigatures'),
    fontSize: configuration.get('fontSize'),
    fontVariations: configuration.get('fontVariations'),
    fontWeight: configuration.get('fontWeight'),
    letterSpacing: configuration.get('letterSpacing'),
    lineHeight: '100%',
    tabSize: configuration.get('tabSize'),
    wordBreak: configuration.get('wordBreak'),
    wordWrap: configuration.get('wordWrap'),
    wordWrapColumn: configuration.get('wordWrapColumn'),
  }

  return {
    styles,
  }
}
