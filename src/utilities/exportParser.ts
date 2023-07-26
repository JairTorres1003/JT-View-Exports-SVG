/* eslint-disable @typescript-eslint/naming-convention */
import * as fs from "fs";
import * as babelParser from "@babel/parser";
import traverse from "@babel/traverse";
import { Declaration, Identifier, JSXElement, JSXIdentifier, Node } from "@babel/types";
import { ExportType, ExportTypeNode, IsSVGComponent } from "../interfaces/exportParser";
import { HasInvalidChild, SvgComponent, SvgComponentDetails } from "../interfaces/svgExports";
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
): SvgComponentDetails[] | HasInvalidChild {
  const components: SvgComponentDetails[] = [];
  let hasInvalidChild: HasInvalidChild | null = null;

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
      let componentName: string = "";

      // Extract the component name from the JSX element's opening tag
      if (openingElement.name.type === "JSXIdentifier") {
        componentName = openingElement.name.name;
      } else if (openingElement.name.type === "JSXMemberExpression") {
        const { object, property } = openingElement.name;
        if (object.type === "JSXIdentifier") {
          componentName = `${object.name}.${property.name}`;
        }
      } else {
        if (hasInvalidChild === null) {
          // Handle the case of an invalid child component
          hasInvalidChild = { error: "HasInvalidChild", location: openingElement.name.loc?.start };
        }
        return;
      }

      // Check if childComponents is an array or contains an error
      if (!Array.isArray(childComponents) && childComponents.error) {
        // Handle the case of an invalid child component
        if (hasInvalidChild === null) {
          hasInvalidChild = { error: "HasInvalidChild", location: child.loc?.start };
        }
        return;
      }

      // Add the child component to the components array
      components.push({
        componentName,
        children: childComponents,
        props,
      });
    }
  });

  // Return the error
  if (hasInvalidChild) {
    return hasInvalidChild;
  }

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
  let childrens: SvgComponentDetails[] | HasInvalidChild = [];

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
 * @param {JSXElement["children"]} children - The array of JSX elements and fragments to search in.
 * @returns {JSXElement | null} The first JSX element or fragment found, or null if multiple elements are found or none is found.
 */
function getChildFragments(children: JSXElement["children"]): JSXElement | null {
  if (!children) {
    return null;
  }

  let jsxElementsCount: number = 0;
  let jsxElement: JSXElement | null = null;

  for (const child of children) {
    // If more than one JSX element is found, set jsxElement to null and break the loop.
    if (jsxElementsCount > 1) {
      jsxElement = null;
      break;
    }

    // Check if the child is a JSX element with children.
    if (child.type === "JSXElement" && child.children.length > 0) {
      // Check if the JSX element is a React.Fragment.
      if (child.openingElement.name.type === "JSXMemberExpression") {
        const objectName = (child.openingElement.name.object as JSXIdentifier).name;
        const propertyName = child.openingElement.name.property.name;
        if (jsxElementsCount === 0 && `${objectName}.${propertyName}` === "React.Fragment") {
          jsxElement = getChildFragments(child.children);
        }
      } else {
        if (jsxElementsCount === 0) {
          const nameElement = child.openingElement.name.name;
          jsxElement = nameElement === "Fragment" ? getChildFragments(child.children) : child;
        }
      }
      jsxElementsCount++;
    } else if (child.type === "JSXFragment" && child.children.length > 0) {
      if (jsxElementsCount === 0) {
        jsxElement = getChildFragments(child.children);
      }
      jsxElementsCount++;
    }
  }

  return jsxElement;
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
        } else if (nodeItem.argument?.type === "JSXElement") {
          const childFragment = getChildFragments([nodeItem.argument]);
          if (childFragment) {
            argument = childFragment;
            type = childFragment.type;
          }
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
 * Extracts SVG component details from the provided node.
 * @param {Node} node - The AST node representing the function declaration or variable declarator.
 * @param {SvgComponent["typeExport"]} typeExport - The type of export (function or variable).
 * @returns {Promise<SvgComponent | undefined>} A promise that resolves to the extracted SVG component object or undefined if no SVG component is found.
 */
async function extractSvgComponentFromNode(
  node: Node,
  typeExport: SvgComponent["typeExport"]
): Promise<SvgComponent | undefined> {
  let component: SvgComponent["component"] = undefined;
  let name: string = "";
  let location: SvgComponent["location"] | undefined;

  if (node.type === "FunctionDeclaration" || node.type === "VariableDeclarator") {
    // Extract the name and location of the function or variable.
    name = (node.id as Identifier).name || "";
    location = node.id?.loc?.start;

    try {
      // Analyze the export type and check if it's a valid SVG component.
      const nodeAnalyze = analyzeExportType(node.type === "FunctionDeclaration" ? node : node.init);
      if (nodeAnalyze) {
        const SVGComponent = isSVGComponent(nodeAnalyze.argument, nodeAnalyze.properties);
        if (SVGComponent.validate) {
          component = SVGComponent.component;
        }
      }
    } catch (error) {
      console.error(`Error reading ${typeExport}: ${name}`);
    }
  }

  if (component) {
    return { component, name, location, typeExport };
  } else {
    return undefined;
  }
}

/**
 * Extract SVG component exports from a file.
 * @param {string} filePath - The file path of the TypeScript/JavaScript file to parse.
 * @returns {Promise<SvgComponent[]>} A promise that resolves to an array of extracted SVG component exports.
 */
export async function extractSVGComponentExports(filePath: string): Promise<SvgComponent[]> {
  try {
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
            const extract = async () => {
              const svgComponent = await extractSvgComponentFromNode(
                node.declaration as Declaration,
                "function"
              );
              if (svgComponent) {
                exports.push(svgComponent);
              }
            };
            extract();
          } else if (node.declaration.type === "VariableDeclaration") {
            // Exported variable declaration(s) 'export const variableName = value;'
            node.declaration.declarations.forEach(async (declaration) => {
              if (declaration.id.type === "Identifier") {
                const svgComponent = await extractSvgComponentFromNode(declaration, "variable");
                if (svgComponent) {
                  exports.push(svgComponent);
                }
              }
            });
          }
        }
      },
    });

    return exports;
  } catch (error) {
    console.error("Error during extraction:", error);
    return [];
  }
}
