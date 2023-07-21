/* eslint-disable @typescript-eslint/naming-convention */
import * as fs from "fs";
import * as babelParser from "@babel/parser";
import traverse from "@babel/traverse";
import { JSXElement, Node } from "@babel/types";
import { ExportType, ExportTypeNode, IsSVGComponent } from "../interfaces/exportParser";
import { SvgComponent, SvgComponentDetails } from "../interfaces/svgExports";
import { camelCase } from "lodash";

/**
 * Parse the content of a file and return the AST (Abstract Syntax Tree).
 * @param filePath The path to the file.
 * @returns The AST representing the file content.
 */
function parseFileContent(filePath: string): Node {
  // Read the file content synchronously
  const fileContent = fs.readFileSync(filePath, "utf8");

  // Parse the file content using Babel parser
  return babelParser.parse(fileContent, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  });
}

/**
 * Recursively extract attributes from JSXElement children.
 * @param children The children of the JSXElement.
 * @param properties The properties of the export type.
 * @returns An array of extracted child components.
 */
function getChildAttributes(
  children: JSXElement["children"],
  properties: ExportType["properties"]
): SvgComponentDetails[] {
  const components: SvgComponentDetails[] = [];

  children.forEach((child) => {
    if (child.type === "JSXElement") {
      const openingElement = child.openingElement;
      const props: { [key: string]: string } = {};

      // Extract attributes from the opening element
      openingElement.attributes.forEach((attr) => {
        if (attr.type === "JSXAttribute") {
          const { name, value } = attr;
          let valueAux: any = "";

          // Check the value type of the attribute
          if (value?.type === "JSXExpressionContainer") {
            // If the value is an expression container, extract the value from the properties
            const keyExpression =
              value?.expression.type === "Identifier" ? value?.expression.name : "";
            valueAux = properties[keyExpression]?.value;
          } else if (value?.type === "StringLiteral") {
            valueAux = value.value;
          }

          // Store the attribute value in the props object using camelCase format for the attribute name
          props[camelCase(name.name?.toString())] = valueAux;
        }
      });

      // Recursively extract child components
      const childComponents = getChildAttributes(child.children, properties);

      // Add the child component to the components array
      components.push({
        componentName: openingElement.name.type === "JSXIdentifier" ? openingElement.name.name : "",
        children: childComponents.length > 0 ? childComponents : [],
        props,
      });
    }
  });

  // Return the array of extracted components
  return components;
}

/**
 * Check if a JSXElement represents an SVG component and extract relevant information.
 * @param argument The JSXElement to check.
 * @param properties The properties of the export type.
 * @returns An object indicating whether the JSXElement is an SVG component and the extracted component details.
 */
function isSVGComponent(
  argument: JSXElement,
  properties: ExportType["properties"]
): IsSVGComponent {
  let validate: boolean = false;
  let component: IsSVGComponent["component"] = undefined;
  const { openingElement, children } = argument;
  let childrens: SvgComponentDetails[] = [];

  // Check if the node has an opening element
  if (openingElement) {
    const attributes = openingElement.attributes;
    const svgProps: { [key: string]: any } = {};

    // Iterate over the attributes of the opening element
    attributes.forEach((attr) => {
      if (attr.type === "JSXAttribute") {
        const { name, type, value } = attr;
        let valueAux: any = "";

        // Check the value type of the attribute
        if (value?.type === "JSXExpressionContainer") {
          // If the value is an expression container, extract the value from the properties
          let keyExpression = value?.expression.type === "Identifier" ? value?.expression.name : "";
          valueAux = properties[keyExpression]?.value;
        } else if (value?.type === "StringLiteral") {
          valueAux = value.value;
        }

        // Store the attribute value in the svgProps object using camelCase format for the attribute name
        svgProps[camelCase(name.name?.toString())] = valueAux;

        // Check if the attribute is 'xmlns' and its value is 'http://www.w3.org/2000/svg'
        if (
          type === "JSXAttribute" &&
          name.name === "xmlns" &&
          value?.type === "StringLiteral" &&
          value?.value === "http://www.w3.org/2000/svg"
        ) {
          // Set the validation flag to true
          validate = true;
        }
      }
    });

    // If it's a valid SVG component with children
    if (validate && children.length > 0) {
      // Recursively extract child attributes
      childrens = getChildAttributes(children, properties);

      // Create the component object with the component name, children, and props
      component = {
        componentName: openingElement.name.type === "JSXIdentifier" ? openingElement.name.name : "",
        children: childrens,
        props: svgProps,
      };
    }
  }

  // Return the result indicating whether it's an SVG component and the extracted component details
  return { validate, component };
}

/**
 * Get the first JSX element or fragment from the given children array.
 * @param children The array of JSX elements and fragments to search in.
 * @returns The first JSX element or fragment found, or null if multiple elements are found or none is found.
 */
function getChildFragments(children: JSXElement["children"]): JSXElement | null {
  let countJsxElements: number = 0;
  let argument: JSXElement | null = null;

  for (const child of children) {
    if (child.type === "JSXElement") {
      // If no JSX element or fragment has been found yet, store this as the argument
      if (countJsxElements === 0) {
        argument = child;
      } else {
        argument = null;
        break;
      }
      countJsxElements++;
    } else if (child.type === "JSXFragment") {
      // If no JSX element or fragment has been found yet, recursively search in the child fragments
      if (countJsxElements === 0) {
        argument = getChildFragments(child.children);
      } else {
        argument = null;
        break;
      }
      countJsxElements++;
    }
  }

  return argument;
}

/**
 * Analyze the export type of a node and extract relevant information.
 * @param node The export type node to analyze.
 * @returns An object representing the analyzed export type, or undefined if the export type is not JSXElement.
 */
function analyzeExportType(node: ExportTypeNode): ExportType | undefined {
  // Initialize variables
  const properties: ExportType["properties"] = {};
  let argument = node as JSXElement;
  let type = node?.type;

  // Check if the node represents an arrow function or function declaration with a block statement body
  if (
    node &&
    (node.type === "ArrowFunctionExpression" || node.type === "FunctionDeclaration") &&
    node.body?.type === "BlockStatement" &&
    node.body.body
  ) {
    // Reverse iterate over the body statements
    const body = [...node.body.body].reverse();

    for (const nodeItem of body) {
      // Check if the statement is a ReturnStatement and the argument is not an Identifier
      if (nodeItem.type === "ReturnStatement" && type !== "Identifier") {
        if (nodeItem.argument?.type === "JSXFragment") {
          const childFragment = getChildFragments(nodeItem.argument.children);
          if (childFragment) {
            argument = childFragment;
            type = childFragment.type;
          }
        } else {
          argument = nodeItem.argument as JSXElement;
          type = nodeItem.argument?.type;
        }
        break;
      }
    }

    // Check if there are parameters with object patterns
    if (node.params && node.params.length > 0) {
      node.params.forEach((param: any) => {
        if (param.type === "ObjectPattern" && param.properties) {
          param.properties.forEach((property: any) => {
            const { key, value } = property;
            if (property.type === "ObjectProperty") {
              // Add the property to the properties object
              properties[key.name] = {
                value: value?.right?.value,
                type: value?.right?.type,
              };
            }
          });
        }
      });
    }
  }

  // Check if the export type is JSXElement and the opening element's name is JSXIdentifier
  if (type === "JSXElement" && argument?.openingElement?.name.type === "JSXIdentifier") {
    return { argument, properties };
  }

  // Return undefined if the export type is not JSXElement
  return undefined;
}

/**
 * Extract SVG component exports from a file.
 * @param filePath The path to the file.
 * @returns A promise that resolves to an array of SVG component exports.
 */
export function extractSVGComponentExports(filePath: string): Promise<SvgComponent[]> {
  return new Promise((resolve, reject) => {
    // Parse the file content into an AST (Abstract Syntax Tree)
    const ast = parseFileContent(filePath);
    const exports: SvgComponent[] = [];

    // Traverse the AST to find export declarations
    traverse(ast, {
      ExportNamedDeclaration(path) {
        const { node } = path;

        if (node.declaration) {
          if (node.declaration.type === "FunctionDeclaration") {
            // Exported function declaration 'export function functionName() {}'
            let component: SvgComponent["component"] = undefined;
            let name: string = node.declaration.id?.name as string;
            let location: SvgComponent["location"] = node.declaration.id?.loc?.start;
            let typeExport: SvgComponent["typeExport"] = "function";

            try {
              const nodeAnalyze = analyzeExportType(node.declaration);

              if (nodeAnalyze) {
                const SVGomponent = isSVGComponent(nodeAnalyze.argument, nodeAnalyze.properties);

                if (SVGomponent.validate) {
                  component = SVGomponent.component;
                  exports.push({ component, name, location, typeExport });
                }
              }
            } catch (error) {
              console.error(`Error reading ${typeExport}: ${name}`);
              exports.push({ component, name, location, typeExport });
            }
          } else if (node.declaration.type === "VariableDeclaration") {
            // Exported variable declaration(s) 'export const variableName = value;'
            node.declaration.declarations.forEach((declaration) => {
              if (declaration.id.type === "Identifier") {
                let component: SvgComponent["component"] = undefined;
                let name: string = declaration.id.name;
                let location: SvgComponent["location"] = declaration.id.loc?.start;
                let typeExport: SvgComponent["typeExport"] = "variable";

                try {
                  const nodeAnalyze = analyzeExportType(declaration.init);

                  if (nodeAnalyze) {
                    const SVGomponent = isSVGComponent(
                      nodeAnalyze.argument,
                      nodeAnalyze.properties
                    );

                    if (SVGomponent.validate) {
                      component = SVGomponent.component;
                      exports.push({ component, name, location, typeExport });
                    }
                  }
                } catch (error) {
                  console.error(`Error reading ${typeExport}: ${name}`);
                  exports.push({ component, name, location, typeExport });
                }
              }
            });
          }
        }
      },
    });

    resolve(exports);
  });
}
