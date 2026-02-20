import type { Literal, Node } from 'unist'
import type { RootContent } from 'mdast'

interface BuildNode<T extends string, Children extends Node[]> extends Node {
  type: T
  children: Children
}

export type Align = 'left' | 'center' | 'right' | null

export interface NodeParent extends Node {
  children: NodeParentChildren[]
}

export interface NodeParentChildren extends Node {
  name?: string
  attributes?: Array<Literal & { name: string }>
  children?: Node[]
}

export interface NodeTable extends BuildNode<'table', NodeRow[]> {
  align?: Align[]
}

export type NodeRow = BuildNode<'tableRow', NodeCell[]>
export type NodeCell = BuildNode<'tableCell', RootContent[]>

export interface NodeTextContent extends Node {
  type: 'text'
  value?: string
}

export interface NodeMdxContent extends Node {
  type: 'strong'
  children: RootContent[]
}

export interface Cell {
  key: `cell-${number}`
  children?: RootContent[]
  style?: React.CSSProperties
  colSpan?: number
}

export interface Row {
  key: `row-${number}`
  [cellKey: `cell-${number}`]: Cell
}

export interface ParsedCell {
  raw: string
  value: string
  children: RootContent[]
  align?: Align
  colspanStart: boolean
  colspanEnd: boolean
}
