import * as babelParser from '@babel/parser'
import type * as t from '@babel/types'
import { type Uri, workspace } from 'vscode'

/**
 * Parses the content using Babel parser.
 *
 * @param content - The content to be parsed.
 * @returns The parsed AST (Abstract Syntax Tree) node.
 */
export function parserContent(content: string): t.Node {
  // Parse the file content using Babel parser
  return babelParser.parse(content, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  })
}

/**
 * Parse the content of a file and return the AST (Abstract Syntax Tree).
 *
 * @param uriFile - The URI of the file to parse.
 * @returns  The AST representing the file content.
 */
export async function parseFileContent(uriFile: Uri): Promise<t.Node> {
  const data = await workspace.fs.readFile(uriFile)
  const fileContent = new TextDecoder().decode(data)

  return parserContent(fileContent)
}
