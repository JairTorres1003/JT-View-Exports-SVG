import { Dispatch, SetStateAction } from "react";
import { SvgExport } from "./svgExports";

/**
 * Props for the PanelsSettings component.
 */
export interface PanelsSettingsProps {
  /**
   *
   * @default false
   */
  isOpenPanel: boolean;
  /**
   *
   */
  handleOpenPanel: () => void;
}
