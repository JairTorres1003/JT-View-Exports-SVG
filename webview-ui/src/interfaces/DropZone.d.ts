import { SetStateAction } from "react";
import { SvgExport } from "./svgExports";

/**
 * Represents properties for a DropZone component.
 */
export interface DropZoneProps {
  /**
   * A function to handle the extraction of icons from a dropped file.
   *
   * @param fileList The dropped file to extract icons from.
   */
  onExtractIcons: (fileList: FileList | null) => void;
}
