import * as path from 'path'

import { Uri, type Webview } from 'vscode'

import { isEmpty } from '../misc'

import { getWorkspacePath } from './workspace'

import { type SVGFile } from '@/interfaces/ViewExportsSVG'

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
