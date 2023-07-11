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
 * Extracts the exports from a given file.
 * @param filePath The path to the file.
 * @returns A promise that resolves to an array of export names.
 */
export function extractSVGComponentExports(filePath: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const ast = parseFileContent(fileContent);
    const exports: string[] = [];


    traverse(ast, {
      ExportNamedDeclaration(path) {
        const { node } = path;
        if (node.declaration) {
          if (node.declaration.type === "FunctionDeclaration") {
            // Exported function declaration 'export function functionName() {}'
            exports.push(node.declaration.id?.name as string);
          } else if (node.declaration.type === "VariableDeclaration") {
            // Exported variable declaration(s) 'export const variableName = value;'
            node.declaration.declarations.forEach((declaration) => {
              if (declaration.id.type === "Identifier") {
                exports.push(declaration.id.name);
              }
            });
          }
        } else if (node.specifiers.length > 0) {
          // Exported named specifiers 'export { exportedName } from "module";'
          node.specifiers.forEach((specifier) => {
            if (specifier.exported.type === "Identifier") {
              exports.push(specifier.exported.name);
            }
          });
        }
      },
    });

    resolve(exports);
  });
}

/**
 * Extracts the React component names from a given file.
 * @param filePath The path to the file.
 * @returns A promise that resolves to an array of React component names.
 */
export function extractReactComponentNames(filePath: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const ast = parseFileContent(fileContent);
    const componentNames: string[] = [];

    traverse(ast, {
      JSXOpeningElement(path) {
        const { node } = path;
        if (node.name.type === "JSXIdentifier") {
          const componentName = node.name.name;
          componentNames.push(componentName);
        }
      },
    });

    resolve(componentNames);
  });
}
