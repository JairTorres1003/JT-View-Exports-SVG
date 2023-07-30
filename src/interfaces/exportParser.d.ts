import * as t from "@babel/types";
import { SvgComponentDetails } from "./svgExports";

export interface ExportType {
  argument: t.JSXElement;
  properties: { [key: string]: any };
}

export type ExportTypeNode = t.Expression | t.FunctionDeclaration | t.JSXElement | null | undefined;
export type Value =
  | t.JSXAttribute["value"]
  | t.Expression
  | t.PatternLike
  | t.JSXEmptyExpression
  | t.SpreadElement
  | null;

export interface IsSVGComponent {
  validate: boolean;
  component: SvgComponentDetails | undefined;
}
