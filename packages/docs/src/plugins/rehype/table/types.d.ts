import type {
  MdxJsxAttribute,
  MdxJsxAttributeValueExpression,
  MdxJsxExpressionAttribute,
} from 'mdast-util-mdx-jsx'

export type Attr = MdxJsxAttribute | MdxJsxExpressionAttribute

export interface IMdxJsxAttribute extends MdxJsxAttribute {
  name: 'columns' | 'rows'
  value: MdxJsxAttributeValueExpression
}
