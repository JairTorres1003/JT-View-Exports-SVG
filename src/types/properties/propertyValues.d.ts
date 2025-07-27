import type * as t from '@babel/types'

export type PropertyValue =
  | t.JSXAttribute['value']
  | t.Expression
  | t.PatternLike
  | t.JSXElement
  | t.JSXFragment
  | t.JSXEmptyExpression
  | t.SpreadElement
  | t.PrivateName
  | t.TSType
  | null
