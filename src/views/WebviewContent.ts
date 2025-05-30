import * as fs from 'fs'

import { type Webview, type Uri, env, l10n } from 'vscode'

import {
  DefaultClickToOpenDevToolsController,
  DefaultExpandAllController,
} from '@/controllers/config'
import { type GetWebviewAssets } from '@/interfaces/views/content'
import { type ManifestContent } from '@/interfaces/views/WebviewContent'
import { getNonce } from '@/utilities/files'
import { getUri } from '@/utilities/vscode'

export class WebviewContent {
  private readonly _webview: Webview
  private readonly _extensionUri: Uri
  private content: string = ''
  private readonly manifest: ManifestContent
  private readonly _processedFiles: number

  public constructor(webview: Webview, extensionUri: Uri, processedFiles: number) {
    this._webview = webview
    this._extensionUri = extensionUri
    this.manifest = this.getManifest()
    this._processedFiles = processedFiles

    this.generateContent()
  }

  /**
   * Getter for the content property.
   *
   * @returns {string} The current value of the content property.
   */
  public get _content(): string {
    return this.content
  }

  /**
   * Constructs a URI for an asset within the extension.
   *
   * @param {...string} path - The path segments to append to the base URI.
   * @returns {Uri} The constructed URI for the specified asset.
   */
  private getAssetUri(...path: string[]): Uri {
    return getUri(this._webview, this._extensionUri, ['client', 'dist', ...path])
  }

  /**
   * Retrieves the manifest content from the specified asset URI.
   *
   * @returns {ManifestContent} The parsed JSON content of the manifest file.
   * @throws Will throw an error if the manifest file cannot be read or parsed.
   */
  private getManifest(): ManifestContent {
    const path = this.getAssetUri('manifest.json').fsPath
    const manifest = fs.readFileSync(path, 'utf-8')
    return JSON.parse(manifest)
  }

  /**
   * Generates a string containing HTML link elements for CSS files.
   *
   * This method retrieves the CSS file paths from the manifest for 'index.html',
   * maps each path to a corresponding HTML link element, and joins them into a single string.
   *
   * @returns {string} A string containing HTML link elements for the CSS files.
   */
  private generateCssLinks(): string {
    const cssPaths = this.manifest['index.html'].css
    const cssLinks = cssPaths.map((path) => {
      return /* html */ `<link rel="stylesheet" type="text/css" href="${this.getAssetUri(path).toString()}" />`
    })

    return cssLinks.join('\n')
  }

  /**
   * Retrieves the URIs for the webview assets.
   *
   * This method retrieves the URIs for the 'index.html' file, 'favicon.ico' file,
   * and CSS files from the manifest and returns them as an object.
   *
   * @returns {GetWebviewAssets} An object containing the URIs for the webview assets.
   */
  private getWebviewAssets(): GetWebviewAssets {
    const manifestIndex = this.manifest['index.html']
    const manifestIco = this.manifest['favicon.ico']

    return {
      index: this.getAssetUri(manifestIndex.file).toString(),
      favicon: this.getAssetUri(manifestIco.file).toString(),
      styles: this.generateCssLinks(),
    }
  }

  /**
   * Generates a script tag containing the initial configuration for the webview.
   * The configuration includes localized view name and default settings for
   * expanding all sections and opening developer tools.
   *
   * @returns {string} An HTML script tag as a string, which sets up the
   *                   `window.ViewExportsSVG` object with the necessary
   *                   initialization parameters.
   */
  private scriptConfiguration(): string {
    const config = new DefaultExpandAllController()
    const devConfig = new DefaultClickToOpenDevToolsController()
    const nonce = getNonce()
    const initialPath = this._processedFiles > 0 ? '/dashboard' : '/'

    return /* html */ `
      <script nonce="${nonce}">
        window.ViewExportsSVG = {
          name: "${l10n.t('View Exports SVG')}",
          initConfiguration: {
            _DEFAULT_EXPAND_ALL: ${config.isExpandAll()},
            _DEFAULT_CLIC_TO_OPEN_DEV_TOOLS: ${devConfig.isDefaultOpen()},
            _INITIAL_RENDER_PATH: "${initialPath}",
          }
        };
      </script>
    `
  }

  /**
   * Generates the content for the webview.
   */
  private generateContent(): void {
    const { index, favicon, styles } = this.getWebviewAssets()
    const nonce = getNonce()
    const script = this.scriptConfiguration()

    this.content = /* html */ `
      <!DOCTYPE html>
      <html lang="${env.language ?? 'en'}">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
          <link rel="icon" type="image/x-icon" href="${favicon}" />
          ${styles}
          <title>${l10n.t('View Exports SVG')}</title>
        </head>
        <body>
          <div id="root"></div>
          <div id="overflow_widgets_dom_node" class="monaco-editor"></div>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          ${script}
          <script type="module" nonce="${nonce}" src="${index}"></script>
        </body>
      </html>
    `
  }
}
