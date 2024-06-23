import type * as t from '@babel/types'

import { type SvgTagName } from './misc'
import { type HasInvalidChild, type SvgComponentDetails } from './svgExports'

/**
 * Represents the structure of an exported component.
 */
export interface ExportType {
  /**
   * The JSX argument associated with the exported component.
   */
  argument: t.JSXElement
}

/**
 * Represents a node that can be of various types such as an expression, function declaration, JSX element, or null/undefined.
 */
export type ExportTypeNode = t.Expression | t.FunctionDeclaration | t.JSXElement | null | undefined

/**
 * Represents a value that can be of various types including JSX attribute value, expression, pattern, empty JSX expression, or spread element.
 */
export type Value =
  | t.JSXAttribute['value']
  | t.Expression
  | t.PatternLike
  | t.JSXEmptyExpression
  | t.SpreadElement
  | t.PrivateName
  | t.TSType
  | null

/**
 * Represents the definition of an SVG component.
 */
export interface IsSVGComponent {
  /**
   * Indicates whether the component is an SVG animation component.
   */
  isAnimated: boolean
  /**
   * Indicates whether the component should be validated.
   */
  validate: boolean
  /**
   * Details of the SVG component.
   */
  component: SvgComponentDetails | undefined
}

/**
 * Response interface for the `getChildAttributes` function.
 */
interface ChildAttributesResponse {
  /**
   * An array of extracted child components or an object representing an invalid child.
   * If an invalid child is encountered, this property will contain an object with an error message.
   */
  children: SvgComponentDetails['children']
  /**
   * A boolean flag indicating whether any of the extracted components are animated.
   * It will be true if at least one animated component is found in the children.
   */
  isAnimated: boolean
}

/**
 * Response interface for the `getComponentName` function.
 */
interface ComponentNameResponse {
  /**
   * The name of the JSX component, which can be a string representing the component tag or an object indicating an invalid child.
   */
  tag: SvgTagName | 'Fragment' | HasInvalidChild
  /**
   * A boolean flag indicating whether the component is a motion component.
   */
  isMotion: boolean
}
