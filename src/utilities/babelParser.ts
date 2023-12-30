import * as fs from 'fs'
import * as babelParser from '@babel/parser'
import type * as t from '@babel/types'

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
 * @param {string} filePath - The path to the file.
 * @returns {t.Node} The AST representing the file content.
 */
export function parseFileContent(filePath: string): t.Node {
  // Read the file content synchronously
  const fileContent = fs.readFileSync(filePath, 'utf8')

  return parserContent(fileContent)
}
