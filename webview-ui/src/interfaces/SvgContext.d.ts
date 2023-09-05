import { SvgComponent } from "./svgExports";

/**
 * Represents the state of an SVG context.
 */
export interface SvgContextState {
  /**
   * The selected SVG component in the context.
   */
  selectedSvg: SvgComponent | null | undefined;
}

/**
 * Represents an action that can be dispatched to modify the SVG context's state.
 */
export type SvgContextAction = { type: "SELECTED"; payload: SvgContextState["selectedSvg"] };
