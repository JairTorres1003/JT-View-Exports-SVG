import type * as t from '@babel/types'

import type { SVGErrors } from '../ViewExportsSVG'

import type { GetTagName } from './tags'

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
 * Handlers for the different types of declarations
 */
export interface HandlersDeclaration {
  /**
   * @example FunctionDeclaration:
   * ```ts
   * function functionName() {}
   * ```
   */
  FunctionDeclaration: (declaration: t.FunctionDeclaration, isExported: boolean) => Promise<void>
  /**
   * @example VariableDeclaration:
   * ```ts
   * const variableName = {}
   * ```
   */
  VariableDeclaration: (declaration: t.VariableDeclaration, isExported: boolean) => Promise<void>
  /**
   * @example Identifier:
   * ```ts
   * const variableName = {}
   * ```
   */
  Identifier: (declaration: t.Identifier) => void
  /**
   * @example ObjectExpression:
   * ```ts
   * const object = { key: value }
   * ```
   */
  ObjectExpression: (declaration: t.ObjectExpression) => void
  /**
   * @example ExportNamedDeclaration:
   * ```ts
   * export { variableName }
   * ```
   */
  ExportNamedDeclaration: (declaration: t.ExportNamedDeclaration) => void
}

export interface ExtractComponent {
  tag: GetTagName
  props: Record<string, unknown>
  errors?: SVGErrors
  hasErrors: boolean
}
