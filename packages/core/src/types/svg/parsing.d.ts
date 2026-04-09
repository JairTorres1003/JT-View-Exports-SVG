import type * as t from '@babel/types'

import type { SVGErrors } from '../common'
import type { GetSVGTagName, GetTagName } from './tags'

/**
 * Represents a declaration that can be exported
 */
export type DeclarationType = t.FunctionDeclaration | t.VariableDeclarator

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
export type IPropertyValue = t.JSXElement | t.JSXFragment | string | number | boolean
