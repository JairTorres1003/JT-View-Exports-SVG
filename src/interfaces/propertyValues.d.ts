export type TypeProperty =
  | "CustomProperty"
  | "SpreadElement"
  | "ObjectExpression"
  | "DefaultProperty";

export interface Property {
  type?: TypeProperty;
  key?: string;
  initialValue?: any;
  nodeParams?: string;
  expression?: Property[];
  attrs?: string;
}

export interface PropertyValuesResponse {
  value?: any | undefined;
  property?: Property | undefined;
}
