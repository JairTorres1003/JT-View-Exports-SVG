/* eslint-disable @typescript-eslint/naming-convention */
import * as fs from "fs";
import * as babelParser from "@babel/parser";
import traverse from "@babel/traverse";
import * as t from "@babel/types";
import { ExportType, ExportTypeNode, IsSVGComponent, Value } from "../interfaces/exportParser";
import {
  HasInvalidChild,
  SvgComponent,
  SvgComponentDetails,
  SvgExport,
} from "../interfaces/svgExports";
import { camelCase } from "lodash";
import { SVG_TAGS } from "./svgTags";

/**
 * Parse the content of a file and return the AST (Abstract Syntax Tree).
 * @param {string} filePath - The path to the file.
 * @returns {t.Node} The AST representing the file content.
 */
function parseFileContent(filePath: string): t.Node {
  // Read the file content synchronously
  const fileContent = fs.readFileSync(filePath, "utf8");

  // Parse the file content using Babel parser
  return babelParser.parse(fileContent, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  });
}

/**
 * Extracts property values from a given value node.
 * @param {Value} value - The value node to extract the property from.
 * @param {ExportType["properties"]} properties - An object containing properties from the export type.
 * @returns {any | undefined} The extracted property value, or undefined if the value node type is not recognized.
 */
function getPropertyValues(value: Value, properties: ExportType["properties"]): any | undefined {
  if (!value) {
    return;
  }

  switch (value.type) {
    case "NumericLiteral":
      return value.value;
    case "StringLiteral":
      return value.value;
    case "Identifier":
      return properties[value.name];
    case "JSXExpressionContainer":
      if (t.isObjectExpression(value.expression)) {
        const objectProps: { [key: string]: any } = {};
        value.expression.properties.forEach((property) => {
          if (t.isObjectProperty(property) && t.isIdentifier(property.key)) {
            objectProps[property.key.name] = getPropertyValues(property.value, properties);
          }
        });
        return objectProps;
      } else {
        return getPropertyValues(value.expression, properties);
      }
    case "ArrayExpression":
      const arrayProps: any[] = [];

      value.elements.forEach((element) => {
        if (t.isUnaryExpression(element) && t.isNumericLiteral(element.argument)) {
          const val = parseInt(element.operator + (element.argument?.value || ""));
          if (val) {
            arrayProps.push(val);
          }
        } else {
          arrayProps.push(getPropertyValues(element, properties));
        }
      });

      return arrayProps;
    case "AssignmentPattern":
      return getPropertyValues(value.right, properties);
    default:
      return undefined;
  }
}

/**
 * Recursively extract attributes from JSXElement children.
 * @param {t.JSXElement["children"]} children - The children of the JSXElement.
 * @param {ExportType["properties"]} properties - The properties of the export type.
 * @returns {SvgComponentDetails[] | HasInvalidChild} An array of extracted child components or a special object representing an error if an invalid child component is found.
 */
function getChildAttributes(
  children: t.JSXElement["children"],
  properties: ExportType["properties"]
): SvgComponentDetails[] | HasInvalidChild {
  const components: SvgComponentDetails[] = [];
  let hasInvalidChild: HasInvalidChild | null = null;

  children.forEach((child) => {
    // Check if the child is a JSXElement
    if (t.isJSXElement(child)) {
      const openingElement = child.openingElement;
      const props: { [key: string]: any } = {};

      // Iterate over the attributes of the opening element
      openingElement.attributes.forEach((attr) => {
        if (t.isJSXAttribute(attr)) {
          const { name, value } = attr;

          // Store the attribute value in the props object using camelCase format for the attribute name
          props[camelCase(name.name?.toString() || "")] = getPropertyValues(value, properties);
        }
      });

      // Recursively extract child components
      const childComponents = getChildAttributes(child.children, properties);

      // Check if childComponents is an array or contains an error
      if (!Array.isArray(childComponents) && childComponents.error) {
        // Handle the case of an invalid child component
        if (hasInvalidChild === null) {
          hasInvalidChild = { error: "HasInvalidChild", location: child.loc?.start };
        }
        return;
      }

      // Get the name of the JSX component from the opening element
      const componentName = getComponentName(openingElement);

      // Check if the component name is a string (valid)
      if (typeof componentName !== "string") {
        // Handle the case of an invalid child component
        if (hasInvalidChild === null) {
          hasInvalidChild = componentName;
        }
        return;
      }

      // Add the child component to the components array
      components.push({
        tag: componentName,
        children: childComponents,
        props,
      });
    }
  });

  // Return the error if an invalid child component is found
  if (hasInvalidChild) {
    return hasInvalidChild;
  }

  // Return the array of extracted components
  return components;
}

/**
 * Get the name of the JSX component from its opening element.
 * @param {t.JSXOpeningElement} openingElement - The opening element of the JSX component.
 * @returns {string | HasInvalidChild} The name of the JSX component as a string or a special object representing an error if the opening element is invalid.
 */
function getComponentName(openingElement: t.JSXOpeningElement): string | HasInvalidChild {
  // Create a special object representing an error
  const error: HasInvalidChild = {
    error: "HasInvalidChild",
    location: openingElement.name.loc?.start,
  };
  let componentName: string | undefined = undefined;

  // Check if the opening element is a JSXIdentifier (for regular components)
  if (t.isJSXIdentifier(openingElement.name)) {
    componentName = SVG_TAGS[camelCase(openingElement.name.name)];
  } else if (t.isJSXMemberExpression(openingElement.name)) {
    // Check if the opening element is a JSXMemberExpression (for components with namespaces)
    const objectName = (openingElement.name.object as t.JSXIdentifier).name || "";
    const propertyName = openingElement.name.property.name;
    const tag = propertyName === "Fragment" ? "Fragment" : SVG_TAGS[camelCase(propertyName)];

    // The full name in the format "objectName.tag" (e.g., "React.Fragment").
    componentName = objectName !== "" && tag ? `${objectName}.${tag}` : undefined;
  }

  return componentName ? componentName : error;
}

/**
 * Check if a JSXElement represents an SVG component and extract relevant information.
 * @param {t.JSXElement} argument - The JSXElement to check.
 * @param {ExportType["properties"]} properties - The properties of the export type.
 * @returns {IsSVGComponent} An object indicating whether the JSXElement is an SVG component and the extracted component details.
 */
function isSVGComponent(
  argument: t.JSXElement,
  properties: ExportType["properties"]
): IsSVGComponent {
  let validate: boolean = false;
  let component: IsSVGComponent["component"] = undefined;
  const { openingElement, children } = argument;
  let childrenDetails: SvgComponentDetails[] | HasInvalidChild = [];

  // Check if the node has an opening element
  if (openingElement) {
    const svgProps: { [key: string]: any } = {};

    // Iterate over the attributes of the opening element
    openingElement.attributes.forEach((attr) => {
      if (t.isJSXAttribute(attr)) {
        const { name, value } = attr;

        // Store the attribute value in the svgProps object using camelCase format for the attribute name
        svgProps[camelCase(name.name?.toString() || "")] = getPropertyValues(value, properties);

        // Check if the attribute is 'xmlns' and its value is 'http://www.w3.org/2000/svg'
        if (svgProps.xmlns === "http://www.w3.org/2000/svg") {
          // Set the validation flag to true
          validate = true;
        }
      }
    });

    // If it's a valid SVG component with children
    if (validate && children.length > 0) {
      // Recursively extract child attributes
      childrenDetails = getChildAttributes(children, properties);

      // Create the component object with the component name, children, and props
      component = {
        tag: getComponentName(openingElement),
        children: childrenDetails,
        props: svgProps,
      };
    }
  }

  // Return the result indicating whether it's an SVG component and the extracted component details
  return { validate, component };
}

/**
 * Get the first JSX element or fragment from the given children array.
 * @param {t.JSXElement["children"] | undefined} children - The array of JSX elements and fragments to search in.
 * @returns {t.JSXElement | null} The first JSX element or fragment found, or null if multiple elements are found or none is found.
 */
function getChildFragments(children: t.JSXElement["children"] | undefined): t.JSXElement | null {
  if (!children) {
    return null;
  }

  let jsxElementsCount: number = 0;
  let jsxElement: t.JSXElement | null = null;

  for (const child of children) {
    // If more than one JSX element is found, set jsxElement to null and break the loop.
    if (jsxElementsCount > 1) {
      jsxElement = null;
      break;
    }

    // Check if the child is a JSX element with children.
    if (t.isJSXElement(child) && child.children.length > 0) {
      const componentName = getComponentName(child.openingElement);

      if (jsxElementsCount === 0) {
        // If it is the first JSX element found, check if it is a React.Fragment or Fragment
        if (componentName === "React.Fragment" || componentName === "Fragment") {
          jsxElement = getChildFragments(child.children);
        } else {
          jsxElement = child;
        }
      }

      jsxElementsCount++;
    } else if (t.isJSXFragment(child) && child.children.length > 0) {
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
 * @param {ExportTypeNode} node - The export type node to analyze.
 * @returns {ExportType | undefined} An object representing the analyzed export type, or undefined if the export type is not JSXElement.
 */
function analyzeExportType(node: ExportTypeNode): ExportType | undefined {
  // Initialize variables
  const properties: ExportType["properties"] = {};
  let argument = node as t.JSXElement;
  let type = node?.type;

  // Check if the node represents an arrow function or function declaration with a block statement body
  if (node && (t.isArrowFunctionExpression(node) || t.isFunctionDeclaration(node))) {
    if (t.isJSXElement(node.body) || t.isJSXFragment(node.body)) {
      const childFragment = getChildFragments([node.body]);
      if (childFragment) {
        argument = childFragment;
        type = childFragment.type;
      }
    } else if (t.isBlockStatement(node.body)) {
      // Reverse iterate over the body statements
      const body = [...node.body.body].reverse();
      const findReturn = body.find((bd) => t.isReturnStatement(bd) && type !== "Identifier");

      if (
        t.isReturnStatement(findReturn) &&
        (t.isJSXElement(findReturn.argument) || t.isJSXFragment(findReturn.argument))
      ) {
        const childFragment = getChildFragments([findReturn.argument]);
        if (childFragment) {
          argument = childFragment;
          type = childFragment.type;
        }
      }
    }

    // Check if there are parameters with object patterns
    if (node.params && node.params.length > 0) {
      node.params.forEach((param: any) => {
        if (t.isObjectPattern(param) && param.properties) {
          param.properties.forEach((property) => {
            if (t.isObjectProperty(property)) {
              const { key, value } = property;

              if (t.isIdentifier(key)) {
                // Add the property to the properties object
                properties[key.name] = getPropertyValues(value, {});
              }
            }
          });
        }
      });
    }
  }

  // Check if the export type is JSXElement and the opening element's name is JSXIdentifier or JSXMemberExpression
  if (
    type === "JSXElement" &&
    (t.isJSXIdentifier(argument?.openingElement?.name) ||
      t.isJSXMemberExpression(argument?.openingElement?.name))
  ) {
    return { argument, properties };
  }

  // Return undefined if the export type is not JSXElement
  return undefined;
}

/**
 * Extracts SVG component details from the provided node.
 * @param {t.Node} node - The AST node representing the function declaration or variable declarator.
 * @param {SvgComponent["typeExport"]} typeExport - The type of export (function or variable).
 * @returns {Promise<SvgComponent | undefined>} A promise that resolves to the extracted SVG component object or undefined if no SVG component is found.
 */
async function extractSvgComponentFromNode(
  node: t.Node,
  typeExport: SvgComponent["typeExport"]
): Promise<SvgComponent | undefined> {
  let component: SvgComponent["component"] = undefined;
  let name: string = "";
  let location: SvgComponent["location"] = undefined;

  if (t.isFunctionDeclaration(node) || t.isVariableDeclarator(node)) {
    // Extract the name and location of the function or variable.
    name = (node.id as t.Identifier).name || "";
    location = node.id?.loc?.start;

    try {
      // Analyze the export type and check if it's a valid SVG component.
      const nodeAnalyze = analyzeExportType(t.isFunctionDeclaration(node) ? node : node.init);
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
 * @returns {Promise<SvgExport>} A promise that resolves to an object containing the extracted SVG component exports.
 */
export async function extractSVGComponentExports(filePath: string): Promise<SvgExport> {
  try {
    // Parse the file content into an AST (Abstract Syntax Tree)
    const ast = parseFileContent(filePath);
    const exports: SvgComponent[] = [];
    let lengthExports: number = 0;

    // Traverse the AST to find export declarations
    traverse(ast, {
      ExportNamedDeclaration(path) {
        const { node } = path;

        if (node.declaration) {
          if (t.isFunctionDeclaration(node.declaration)) {
            lengthExports++;
            // Exported function declaration 'export function functionName() {}'
            const extract = async () => {
              const svgComponent = await extractSvgComponentFromNode(
                node.declaration as t.Declaration,
                "function"
              );
              if (svgComponent) {
                exports.push(svgComponent);
              }
            };
            extract();
          } else if (t.isVariableDeclaration(node.declaration)) {
            lengthExports++;
            // Exported variable declaration(s) 'export const variableName = value;'
            node.declaration.declarations.forEach(async (declaration) => {
              if (t.isIdentifier(declaration.id)) {
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

    // Return an object containing the extracted SVG component exports and their lengths
    return { lengthExports, lengthSvg: exports.length, svgComponents: exports };
  } catch (error) {
    console.error("Error during extraction:", error);
    return { lengthExports: 0, lengthSvg: 0, svgComponents: [] };
  }
}
