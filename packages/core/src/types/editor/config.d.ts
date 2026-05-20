/**
 * VS Code editor styles
 */
export interface EditorStyles {
  fontFamily: string
  fontSize: number
  fontWeight: string | number
  letterSpacing: number
  tabSize: number
  fontFeatureSettings: string
  /** Additional style properties */
  [key: string]: unknown
}
