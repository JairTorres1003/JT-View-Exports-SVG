import { JSXIdentifier } from "@babel/types";

/**
 * Represents the exported SVG components from a file.
 */
export interface SvgExport {
  /**
   * The file object containing the absolute and relative paths of the SVG file.
   */
  file: SvgFile;
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
  location:
    | {
        column: number;
        line: number;
        index?: number | undefined;
      }
    | undefined;
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
  componentName: keyof JSXIdentifier | string;
  /**
   * An array of child SvgComponentDetails objects representing nested components.
   */
  children: SvgComponentDetails[] | [];
  /**
   * An object containing the props of the component, where the keys are the prop names
   * and the values are the prop values.
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
 * Represents errors related to SVG exports.
 */
export interface SvgExportErrors {
  /**
   * The error message describing the issue with SVG exports.
   */
  messageError: string;
}
