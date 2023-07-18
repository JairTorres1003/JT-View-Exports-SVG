/* eslint-disable @typescript-eslint/naming-convention */
import * as fs from "fs";
import * as babelParser from "@babel/parser";
import traverse from "@babel/traverse";
import { camelCase } from "lodash";

/**
 * Parse the content of a file using Babel parser.
 * @param filePath The path to the file.
 * @returns The parsed file content.
 */
function parseFileContent(filePath: string): any {
  // Read the file content synchronously
  const fileContent = fs.readFileSync(filePath, "utf8");

  // Parse the file content using Babel parser
  return babelParser.parse(fileContent, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  });
}

/**
 * Extract attributes and child components from an array of JSX children.
 * @param children The array of JSX children.
 * @returns An array of objects representing the child components and their attributes.
 */
function getChildAttributes(children: any[], properties: any) {
  const components: any[] = [];

  children.forEach((child: any) => {
    const { openingElement, type } = child;

    // Check if the child is a JSX element
    if (type === "JSXElement" && openingElement) {
      const props: { [key: string]: string } = {};

      // Extract attributes from the opening element
      openingElement.attributes.forEach((attr: any) => {
        const { name, value } = attr;

        if (attr.type !== "JSXSpreadAttribute") {
          let valueAux =
            value.type === "JSXExpressionContainer"
              ? properties[value?.expression?.name]?.value
              : value?.value;

          props[camelCase(name.name)] = valueAux;
        }
      });

      // Recursively extract child components
      const childComponents = getChildAttributes(child.children, properties);

      // Add the child component to the components array
      components.push({
        componentName: openingElement.name.name,
        children: childComponents.length > 0 ? childComponents : [],
        props,
      });
    }
  });

  return components;
}

/**
 * Check if the JSX node represents an SVG component and extract its attributes and child components.
 * @param node The JSX node to check.
 * @returns An object containing a boolean flag indicating if it's an SVG component and the extracted component data.
 */
function isSVGComponent(argument: any, properties: any): any {
  let validate: boolean = false;
  let component: object | undefined = undefined;
  const { openingElement, children } = argument;
  let childrens: any[] = [];

  // Check if the node has an opening element
  if (openingElement) {
    const attributes = openingElement.attributes;
    const svgProps: { [key: string]: any } = {};

    // Iterate over the attributes of the opening element
    attributes.forEach((attr: any) => {
      const { name, type, value } = attr;

      if (type !== "JSXSpreadAttribute") {
        let valueAux =
          value.type === "JSXExpressionContainer"
            ? properties[value?.expression?.name]?.value
            : value?.value;

        svgProps[camelCase(name.name)] = valueAux;

        // Check if the attribute is 'xmlns' and its value is 'http://www.w3.org/2000/svg'
        if (
          type === "JSXAttribute" &&
          name.name === "xmlns" &&
          value?.type === "StringLiteral" &&
          value?.value === "http://www.w3.org/2000/svg"
        ) {
          validate = true;
        }
      }
    });

    // If it's a valid SVG component with children
    if (validate && children.length > 0) {
      childrens = getChildAttributes(children, properties);

      // Create the component object with the component name, children, and props
      component = {
        componentName: openingElement.name.name,
        children: childrens,
        props: svgProps,
      };
    }
  }

  return { validate, component };
}

/**
 * Analyze the export type of a given node.
 * @param node The node to analyze.
 * @returns The extracted JSXElement if the node represents an export of a JSX component, otherwise undefined.
 */
function analyzeExportType(node: any): any {
  let { body, params, type } = node;
  const properties: { [key: string]: { value: any; type: string } } = {};
  let argument = node;

  // Check if the node represents an arrow function or function declaration with a block statement body
  if (
    (type === "ArrowFunctionExpression" || type === "FunctionDeclaration") &&
    body?.type === "BlockStatement" &&
    body.body
  ) {
    // Reverse iterate over the body statements
    for (const nodeItem of [...body.body].reverse()) {
      type = nodeItem.argument?.type;

      // Check if the statement is a ReturnStatement and the argument is not an Identifier
      if (nodeItem.type === "ReturnStatement" && type !== "Identifier") {
        argument = nodeItem.argument;
        break;
      }
    }

    if (params && params.length > 0) {
      params.forEach((param: any) => {
        if (param.type === "ObjectPattern" && param.properties) {
          param.properties.forEach((property: any) => {
            const { key, value } = property;
            if (property.type === "ObjectProperty") {
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
export function extractSVGComponentExports(filePath: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    // Parse the file content into an AST (Abstract Syntax Tree)
    const ast = parseFileContent(filePath);
    const exports: any[] = [];

    // Traverse the AST to find export declarations
    traverse(ast, {
      ExportNamedDeclaration(path) {
        const { node } = path;

        if (node.declaration) {
          if (node.declaration.type === "FunctionDeclaration") {
            // Exported function declaration 'export function functionName() {}'
            let component: any | undefined = undefined;
            let name: string = node.declaration.id?.name as string;
            let location: { column: number; line: number } | undefined =
              node.declaration.id?.loc?.start;
            let typeExport: string = "function";

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
                let component: any | undefined = undefined;
                let name: string = declaration.id.name;
                let location: { column: number; line: number } | undefined =
                  declaration.id.loc?.start;
                let typeExport: string = "variable";

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
