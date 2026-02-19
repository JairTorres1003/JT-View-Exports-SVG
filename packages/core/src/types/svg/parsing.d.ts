import type * as t from '@babel/types'

import type { SVGErrors } from '../common'
import type { GetChildAttributes } from './component'
import type { GetSVGTagName, GetTagName } from './tags'

/**
 * Represents a declaration that can be exported
 */
export type DeclarationExport =
  | t.Declaration
  | t.Expression
  | t.FunctionDeclaration
  | t.VariableDeclaration
  | t.VariableDeclarator
  | t.Identifier
  | t.ObjectExpression
  | t.ExportNamedDeclaration

/**
 * Handlers for different types of declarations
 */
export interface HandlersDeclaration {
  /**
   * Handle function declarations
   * @example
   * ```ts
   * function functionName() {}
   * ```
   */
  FunctionDeclaration: (declaration: t.FunctionDeclaration, isExported: boolean) => Promise<void>
  /**
   * Handle variable declarations
   * @example
   * ```ts
   * const variableName = {}
   * ```
   */
  VariableDeclaration: (declaration: t.VariableDeclaration, isExported: boolean) => Promise<void>
  /**
   * Handle identifiers
   * @example
   * ```ts
   * const variableName = {}
   * ```
   */
  Identifier: (declaration: t.Identifier) => void
  /**
   * Handle object expressions
   * @example
   * ```ts
   * const object = { key: value }
   * ```
   */
  ObjectExpression: (declaration: t.ObjectExpression) => void
  /**
   * Handle export named declarations
   * @example
   * ```ts
   * export { variableName }
   * ```
   */
  ExportNamedDeclaration: (declaration: t.ExportNamedDeclaration) => void
}

/**
 * Represents an extracted component during parsing
 */
export interface ExtractComponent {
  /** Tag information */
  tag: GetTagName
  /** Component props */
  props: Record<string, unknown>
  /** Errors if any */
  errors?: SVGErrors
  /** Error flag */
  hasErrors: boolean
}

/**
 * Validation result for component parsing
 */
export type ValidationResult =
  | {
      /** Validation successful */
      isValid: true
      /** Tag information */
      tag: GetSVGTagName
      /** Extracted props */
      props: Record<string, unknown>
      /** Extracted params */
      params: Record<string, unknown>
    }
  | {
      /** Validation failed */
      isValid: false
      /** Tag information */
      tag: GetSVGTagName
      /** Error details */
      error: SVGErrors
    }

/**
 * JSX value types during parsing
 */
export type IValue = t.JSXElement | t.JSXFragment | string | number | boolean

/**
 * SVG element information during parsing
 */
export interface SVGElementInfo {
  /** Tag information */
  tag: GetSVGTagName
  /** Element props */
  props: Record<string, unknown>
  /** Child attributes */
  childAttrs: GetChildAttributes
}
