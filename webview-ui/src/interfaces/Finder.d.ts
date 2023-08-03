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

  /**
   * Function to set the message to show.
   * @param message The message to be shown or null if no message should be displayed.
   */
  setShowMessage: Dispatch<SetStateAction<string | null>>;
}
