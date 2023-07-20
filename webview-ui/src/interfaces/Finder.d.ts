import { Dispatch, SetStateAction } from "react";
import { SvgExport } from "./svgExports";

/**
 * Props for the Finder component.
 */
export interface FinderProps {
  /**
   * Function to set the SVG components.
   * @param components An array of SVG exports.
   */
  setSvgComponents: Dispatch<SetStateAction<SvgExport[]>>;
}
