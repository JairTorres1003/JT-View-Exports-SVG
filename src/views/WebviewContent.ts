import { type Webview, type Uri, env, l10n } from 'vscode'

import { type GetWebviewAssets } from '@/interfaces/views/content'
import { getNonce } from '@/utilities/files'
import { getUri } from '@/utilities/vscode'

/**
 * Returns an object containing the URIs for the webview assets.
 * @param webview - The webview instance.
 * @param extensionUri - The URI of the extension.
 * @returns An object with the URIs for the webview assets.
 */
function getWebviewAssets(webview: Webview, extensionUri: Uri): GetWebviewAssets {
  const getAssetUri = (...asset: string[]): string =>
    getUri(webview, extensionUri, ['client', 'dist', 'assets', ...asset]).toString()

  return {
    icon: getAssetUri('favicon.ico'),
    index: getAssetUri('index.js'),
    styles: getAssetUri('index.css'),
    moduleEditorWorker: getAssetUri('module.editor.worker.js'),
    webWorkerExtensionHostIframe: getAssetUri('webWorkerExtensionHostIframe.html'),
  }
}

/**
 * Generates the HTML content for the webview.
 *
 * @param webview - The webview instance.
 * @param extensionUri - The URI of the extension.
 * @returns The generated HTML content.
 */
export function getWebviewContent(webview: Webview, extensionUri: Uri): string {
  const assets = getWebviewAssets(webview, extensionUri)
  const nonce = getNonce()

  return /* html */ `
    <!DOCTYPE html>
    <html lang="${env.language ?? 'en'}">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="${assets.icon}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <link href="${assets.styles}" rel="stylesheet" />
        <title>${l10n.t('View Exports SVG')}</title>
      </head>
      <body>
        <div id="root"></div>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <script>
          window.jt = {
            editorWorker: "${assets.moduleEditorWorker}",
            webWorkerExtensionHostIframe: "${assets.webWorkerExtensionHostIframe}",
          };
        </script>
        <script type="module" nonce="${nonce}" src="${assets.index}"></script>
      </body>
    </html>
  `
}
