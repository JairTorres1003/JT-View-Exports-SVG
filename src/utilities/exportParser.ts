import * as fs from "fs";
import * as babelParser from "@babel/parser";
import traverse from "@babel/traverse";

/**
 * Parses the file content and returns the AST.
 * @param fileContent The content of the file.
 * @returns The AST (Abstract Syntax Tree) of the file.
 */
function parseFileContent(fileContent: string): any {
  return babelParser.parse(fileContent, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  });
}

/**
 * Checks if the given JSXOpeningElement represents a component of type SVG.
 * @param path The path to the JSXOpeningElement node.
 * @returns True if the JSXOpeningElement represents an SVG component, false otherwise.
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
        return true;
      }
    }
  }

  return false;
}

function analyzeExportType(node: any): any {
  let { body, openingElement, type } = node;

  if (
    type === "ArrowFunctionExpression" &&
    body?.type === "BlockStatement" &&
    body?.body[0] &&
    body?.body[0].type === "ReturnStatement"
  ) {
    openingElement = body.body[0].argument?.openingElement;
    type = body.body[0].argument?.type;
  }

  if (type === "JSXElement" && openingElement.name.type === "JSXIdentifier") {
    return openingElement;
  }

  return undefined;
}

export function extractSVGComponentExports(filePath: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const ast = parseFileContent(fileContent);
    const exports: any[] = [];

    traverse(ast, {
      ExportNamedDeclaration(path) {
        const { node } = path;
        if (node.declaration) {
          if (node.declaration.type === "FunctionDeclaration") {
            // Exported function declaration 'export function functionName() {}'
            exports.push({
              name: node.declaration.id?.name as string,
              typeExport: "function",
              typeData: node.declaration.type,
            });
          } else if (node.declaration.type === "VariableDeclaration") {
            // Exported variable declaration(s) 'export const variableName = value;'
            node.declaration.declarations.forEach((declaration) => {
              if (declaration.id.type === "Identifier") {
                const nodeAnalyze = analyzeExportType(declaration.init);

                exports.push({
                  name: declaration.id.name,
                  typeExport: "variable",
                  element: isSVGComponent(nodeAnalyze),
                });
              }
            });
          }
        } else if (node.specifiers.length > 0) {
          // Exported named specifiers 'export { exportedName } from "module";'
          node.specifiers.forEach((specifier) => {
            if (specifier.exported.type === "Identifier") {
              exports.push({
                name: specifier.exported.name,
                typeExport: "specifier",
                typeData: specifier.exported.type,
              });
            }
          });
        }
      },
    });

    resolve(exports);
  });
}
