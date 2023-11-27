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
   * The selected SVG component's path in the context.
   */
  selectedSvgPath: string | null | undefined
  /**
   * Snackbar information, including whether it's open and its text.
   */
  snackbar: { open: boolean; text: string | null }
}

/**
 * Represents an action that can be dispatched to modify the SVG context's state.
 */
export type SvgContextAction =
  | { type: 'SELECTED'; payload: { item: SvgContextState['selectedSvg']; path: string } | null }
  | { type: 'SNACKBAR'; payload: SvgContextState['snackbar'] }
