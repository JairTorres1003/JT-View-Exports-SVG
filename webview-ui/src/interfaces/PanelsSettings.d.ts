import { Dispatch, SetStateAction } from "react";
import { SvgExport } from "./svgExports";

/**
 * Props for the PanelsSettings component.
 */
export interface PanelsSettingsProps {
  /**
   * A boolean indicating whether the panel is open.
   * @default false
   */
  isOpenPanel: boolean;
  /**
   * A function to handle opening or closing the panel.
   */
  handleOpenPanel: () => void;
  /**
   * An optional reference to a DOM element.
   * This reference can be used to position the panel relative to the referenced element.
   */
  refPortalButton?: RefObject<HTMLElement>;
}
