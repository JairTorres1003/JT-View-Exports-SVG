import * as t from "@babel/types";
import { SvgComponentDetails } from "./svgExports";

/**
 * Represents the structure of an exported component.
 */
export interface ExportType {
  /**
   * The JSX argument associated with the exported component.
   */
  argument: t.JSXElement;
  /**
   * Additional properties associated with the exported component.
   */
  properties: { [key: string]: any };
}

/**
 * Represents a node that can be of various types such as an expression, function declaration, JSX element, or null/undefined.
 */
export type ExportTypeNode = t.Expression | t.FunctionDeclaration | t.JSXElement | null | undefined;

/**
 * Represents a value that can be of various types including JSX attribute value, expression, pattern, empty JSX expression, or spread element.
 */
export type Value =
  | t.JSXAttribute["value"]
  | t.Expression
  | t.PatternLike
  | t.JSXEmptyExpression
  | t.SpreadElement
  | null;

/**
 * Represents the definition of an SVG component.
 */
export interface IsSVGComponent {
  /**
   * Indicates whether the component is an SVG animation component.
   */
  isAnimated: boolean;
  /**
   * Indicates whether the component should be validated.
   */
  validate: boolean;
  /**
   * Details of the SVG component.
   */
  component: SvgComponentDetails | undefined;
}
