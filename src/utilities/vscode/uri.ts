import * as path from 'path'

import { UIKind, Uri, type Webview, env } from 'vscode'

import { isEmpty } from '../misc'

import { getWorkspacePath } from './workspace'

import type { SVGFile } from '@/types/ViewExportsSVG'

/**
 * A helper function which will get the webview URI of a given file or resource.
 *
 * @remarks This URI can be used within a webview's HTML as a link to the
 * given file/resource.
 *
 * @param webview A reference to the extension webview
 * @param extensionUri The URI of the directory containing the extension
 * @param pathList An array of strings representing the path to a file/resource
 * @returns A URI pointing to the file/resource
 */
export function getUri(webview: Webview, extensionUri: Uri, pathList: string[]): Uri {
  return webview.asWebviewUri(Uri.joinPath(extensionUri, ...pathList))
}

/**
 * Converts an SVGFile to a Uri.
 *
 * @param svgFile The SVGFile to convert.
 * @returns A Uri pointing to the SVG file.
 */
export function svgFileToUri(svgFile: SVGFile): Uri {
  const workspacePath = getWorkspacePath()

  if (!isEmpty(svgFile.absolutePath)) {
    return Uri.file(svgFile.absolutePath)
  } else if (!isEmpty(svgFile.relativePath) && !isEmpty(workspacePath)) {
    return Uri.file(path.join(workspacePath, svgFile.relativePath))
  }

  return Uri.file(path.join(svgFile.dirname, svgFile.basename))
}

/**
 * Parses a given `Uri` object and returns a new `Uri` instance.
 *
 * - In web environments (`UIKind.Web`), parses the URI using its string representation.
 * - In other environments, parses the URI using its file system path.
 *
 * @param uri - The `Uri` object to be parsed.
 * @returns A new `Uri` instance parsed from the input.
 */
export const uriParse = (uri: Uri): Uri => {
  if (env.uiKind === UIKind.Web) {
    return Uri.parse(uri.toString())
  }

  return Uri.parse(uri.fsPath)
}
