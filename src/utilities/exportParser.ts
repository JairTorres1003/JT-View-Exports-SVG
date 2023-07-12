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
function isSVGComponent(path: any): boolean {
  const { node } = path;
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

  return false;
}

/**
 * Extracts the React component names from a given file.
 * @param filePath The path to the file.
 * @returns A promise that resolves to an array of React component names.
 */
export function extractSVGComponentExports(filePath: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const ast = parseFileContent(fileContent);
    const componentNames: string[] = [];

    traverse(ast, {
      JSXOpeningElement(path) {
        const { node } = path;
        if (node.name.type === "JSXIdentifier") {
          const componentName = node.name.name;

          if (isSVGComponent(path)) {
            componentNames.push(componentName);
          }
        }
      },
    });

    resolve(componentNames);
  });
}
