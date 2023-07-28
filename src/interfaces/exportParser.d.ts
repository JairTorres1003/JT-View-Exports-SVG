import { Expression, FunctionDeclaration, JSXElement } from "@babel/types";
import { SvgComponentDetails } from "./svgExports";

export interface ExportType {
  argument: JSXElement;
  properties: { [key: string]: any };
}

export type ExportTypeNode = Expression | FunctionDeclaration | JSXElement | null | undefined;

export interface IsSVGComponent {
  validate: boolean;
  component: SvgComponentDetails | undefined;
}
