import * as fs from "fs";
import * as babelParser from "@babel/parser";
import traverse from "@babel/traverse";

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
 * Check if a given node represents an SVG component.
 * @param node The node to check.
 * @returns True if the node is an SVG component, false otherwise.
 */
function isSVGComponent(node: any): boolean {
  if (node) {
    const attributes = node.attributes;

    for (const attribute of attributes) {
      if (
        attribute.type === "JSXAttribute" &&
        attribute.name.name === "xmlns" &&
        attribute.value?.type === "StringLiteral" &&
        attribute.value.value === "http://www.w3.org/2000/svg"
      ) {
        // If the attribute value matches the SVG namespace, return true
        return true;
      }
    }
  }

  // If no matching attribute is found, return false
  return false;
}

/**
 * Analyze the export type of a given node.
 * @param node The node to analyze.
 * @returns The opening element of the JSX element if the export type is JSXElement, otherwise undefined.
 */
function analyzeExportType(node: any): any {
  let { body, openingElement, type } = node;

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
        openingElement = nodeItem.argument?.openingElement;
        break;
      }
    }
  }

  // Check if the export type is JSXElement and the opening element's name is JSXIdentifier
  if (type === "JSXElement" && openingElement?.name.type === "JSXIdentifier") {
    return openingElement;
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
            const nodeAnalyze = analyzeExportType(node.declaration);

            if (isSVGComponent(nodeAnalyze)) {
              exports.push({
                name: node.declaration.id?.name as string,
                typeExport: "function",
                Element: nodeAnalyze,
              });
            }
          } else if (node.declaration.type === "VariableDeclaration") {
            // Exported variable declaration(s) 'export const variableName = value;'
            node.declaration.declarations.forEach((declaration) => {
              if (declaration.id.type === "Identifier") {
                const nodeAnalyze = analyzeExportType(declaration.init);

                if (isSVGComponent(nodeAnalyze)) {
                  exports.push({
                    name: declaration.id.name,
                    typeExport: "variable",
                    Element: nodeAnalyze,
                  });
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
