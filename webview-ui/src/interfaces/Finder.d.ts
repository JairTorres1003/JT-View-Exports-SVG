import { Dispatch, SetStateAction } from "react";
import { SvgExport } from "./svgExports";

/**
 * Props for the Finder component.
 */
export interface FinderProps {
  /**
   * Handles the received SVG components data from the webview context.
   * @param data The data received from the webview context.
   */
  handleSvgComponents: (data: any) => void;
}
