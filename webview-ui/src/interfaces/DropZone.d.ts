import { SetStateAction } from "react";
import { SvgExport } from "./svgExports";

/**
 * Represents properties for a DropZone component.
 */
export interface DropZoneProps {
  /**
   * A function to handle the extraction of icons from a dropped file.
   *
   * @param file The dropped file to extract icons from.
   */
  onExtractIcons: (file: File | null) => void;
}
