import { UIKind, Uri, type Webview, env } from 'vscode'

import { CONFIG_KEY } from '@/constants/misc'
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
  return Uri.parse(svgFile.uri)
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

/**
 * Returns the path representation of a given VSCode `Uri`.
 *
 * If the URI's scheme matches the custom scheme (`scheme-${CONFIG_KEY}`), the full URI string is returned.
 * Otherwise, the file system path (`fsPath`) of the URI is returned.
 *
 * @param uri - The VSCode `Uri` object to extract the path from.
 * @returns The string representation of the URI's path or the full URI string for custom schemes.
 */
export const getUriPath = (uri: Uri): string => {
  if (uri.scheme === `scheme-${CONFIG_KEY}` || env.uiKind === UIKind.Web) {
    return uri.toString()
  }

  return uri.fsPath
}
