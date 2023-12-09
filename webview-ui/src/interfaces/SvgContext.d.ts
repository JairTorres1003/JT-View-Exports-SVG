import { type SvgComponent } from './svgExports'

/**
 * Represents the state of an SVG context.
 */
export interface SvgContextState {
  /**
   * The selected SVG component in the context.
   */
  selectedSvg: SvgComponent | null | undefined
  /**
   * The name of the selected SVG component in the context.
   */
  selectedSvgName: string
  /**
   * The selected SVG component's path in the context.
   */
  selectedSvgPath: string | null
  /**
   * The selected SVG component's language in the context.
   */
  selectedSvgLanguage: string
  /**
   * Snackbar information, including whether it's open and its text.
   */
  snackbar: { open: boolean; text: string | null }
}

type SelectedActionPayload = {
  /**
   * The selected SVG component in the context.
   */
  item: SvgComponent
  /**
   * The name of the selected SVG component in the context.
   */
  name: string
  /**
   * The selected SVG component's path in the context.
   */
  path: string | null
  /**
   * The selected SVG component's language in the context.
   */
  language: string
} | null

/**
 * Represents an action that can be dispatched to modify the SVG context's state.
 */
export type SvgContextAction =
  | { type: 'CLEAR_SELECTED' }
  | { type: 'SELECTED'; payload: SelectedActionPayload }
  | { type: 'SNACKBAR'; payload: SvgContextState['snackbar'] }
  | { type: 'UPDATE_PLAYGROUND'; payload: SvgContextState['selectedSvg'] }
