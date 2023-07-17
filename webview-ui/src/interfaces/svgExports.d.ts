/**
 * Represents the exported SVG components from a file.
 */
export interface SvgExport {
  /**
   * The file object containing the absolute and relative paths of the SVG file.
   */
  file: {
    /**
     * The absolute path of the SVG file.
     */
    absolutePath: string;
    /**
     * The relative path of the SVG file.
     */
    relativePath: string;
  };
  /**
   * An array of SvgComponent objects representing the exported SVG components.
   */
  svgExports: SvgComponent[];
}

/**
 * Represents an SVG component.
 */
export interface SvgComponent {
  /**
   * The name of the SVG component.
   */
  name: string;
  /**
   * The type of export for the SVG component.
   */
  typeExport: string;
  /**
   * An object representing the SVG component details.
   */
  component: SvgComponentDetails;
}

/**
 * Represents the details of an SVG component.
 */
export interface SvgComponentDetails {
  /**
   * The name of the component.
   */
  componentName: keyof JSX.IntrinsicElements;
  /**
   * An array of child SvgComponentDetails objects representing nested components.
   */
  children: SvgComponentDetails[] | [];
  /**
   * An object containing the props of the component, where the keys are the prop names
   * and the values are the prop values.
   */
  props: {
    [key: string]: string;
  };
}
