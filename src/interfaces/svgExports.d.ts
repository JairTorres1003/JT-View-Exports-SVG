import { JSXIdentifier } from "@babel/types";

/**
 * Represents the exported SVG components from a file.
 */
export interface SvgExport {
  /**
   * The file object containing the absolute and relative paths of the SVG file.
   */
  file?: SvgFile;
  /**
   * The number of exports (SVG components) present in the file.
   */
  lengthExports?: number;
  /**
   * The number of SVG elements found in the file.
   */
  lengthSvg?: number;
  /**
   * An array of SvgComponent objects representing the exported SVG components.
   */
  svgComponents: SvgComponent[];
}

/**
 * Represents an SVG component.
 */
export interface SvgComponent {
  /**
   * An object representing the SVG component details.
   */
  component: SvgComponentDetails | undefined;
  /**
   * The name of the SVG component.
   */
  name: string;
  /**
   * The location of the SVG component in the file.
   */
  location: Location | undefined;
  /**
   * The type of export for the SVG component.
   */
  typeExport: "function" | "variable";
}

/**
 * Represents the details of an SVG component.
 */
export interface SvgComponentDetails {
  /**
   * The name of the component.
   */
  tag: keyof JSXIdentifier | string | HasInvalidChild;
  /**
   * An array of child SvgComponentDetails objects representing nested components.
   */
  children: SvgComponentDetails[] | [] | HasInvalidChild;
  /**
   * An object containing the props of the component.
   */
  props: {
    [key: string]: any;
  };
}

/**
 * Represents an SVG file.
 */
export interface SvgFile {
  /**
   * The absolute path of the SVG file.
   */
  absolutePath: string;
  /**
   * The relative path of the SVG file.
   */
  relativePath: string;
}

/**
 * Represents a location in the source code.
 */
interface Location {
  /**
   * The column number in the source code.
   */
  column: number;
  /**
   * The line number in the source code.
   */
  line: number;
  /**
   * The optional index number in the source code.
   */
  index?: number | undefined;
}

/**
 * Represents errors related to SVG exports.
 */
export interface SvgExportErrors {
  /**
   * The error message describing the issue with SVG exports.
   */
  messageError: string;
}

/**
 * Represents an object with an error for having an invalid child.
 */
export interface HasInvalidChild {
  /**
   * The error type indicating the presence of an invalid child.
   */
  error: "HasInvalidChild";
  /**
   * The location of the invalid child in the source code.
   */
  location: Location | undefined;
}
