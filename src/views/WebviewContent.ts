import type { ManifestContent } from '@jt-view-exports-svg/core'
import { type ExtensionContext, env, l10n, type Uri, type Webview, workspace } from 'vscode'

import {
  DefaultClickToOpenDevToolsController,
  DefaultExpandAllController,
  RecentIconsShowController,
} from '@/controllers/config'
import { getNonce } from '@/utilities/files/nonce'
import { isEmpty } from '@/utilities/misc'
import { getUri, uriParse } from '@/utilities/vscode/uri'

export class WebviewContent {
  private readonly _webview: Webview
  private readonly _extensionUri: Uri
  private content = ''
  private manifest?: ManifestContent
  private readonly _processedFiles: number
  private readonly _nonce: string

  public constructor(webview: Webview, context: ExtensionContext, processedFiles: number) {
    this._webview = webview
    this._extensionUri = context.extensionUri
    this._processedFiles = processedFiles
    this._nonce = getNonce()
  }

  public async initialize(): Promise<void> {
    this.manifest = await this.getManifest()
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
    return getUri(this._webview, this._extensionUri, ['dist/webview', ...path])
  }

  /**
   * Retrieves the manifest content from the specified asset URI.
   *
   * @returns {ManifestContent} The parsed JSON content of the manifest file.
   * @throws Will throw an error if the manifest file cannot be read or parsed.
   */
  private async getManifest(): Promise<ManifestContent> {
    const path = uriParse(this.getAssetUri('manifest.json'))
    const manifestBytes = await workspace.fs.readFile(path)
    const manifestString = Buffer.from(manifestBytes).toString('utf8')
    return JSON.parse(manifestString) as ManifestContent
  }

  /**
   * Retrieves the URIs for the webview assets.
   *
   * This method retrieves the URIs for the 'index.html' file, 'favicon.ico' file,
   * and CSS files from the manifest and returns them as an object.
   *
   * @returns {ManifestContent} An object containing the URIs for the webview assets.
   */
  private getWebviewAssets(): ManifestContent {
    if (!this.manifest || isEmpty(this.manifest.main)) {
      throw new Error(l10n.t('Missing main file in manifest'))
    }

    return {
      main: this.getAssetUri(this.manifest.main).toString(),
      favicon: this.getAssetUri(this.manifest.favicon).toString(),
      style: this.getAssetUri(this.manifest.style).toString(),
    }
  }

  private getCSP(): string {
    return `
      default-src 'none';
      connect-src ${this._webview.cspSource} extension-file:;
      style-src ${this._webview.cspSource} 'unsafe-inline';
      font-src ${this._webview.cspSource};
      img-src ${this._webview.cspSource} https: blob:;
      script-src ${this._webview.cspSource} 'nonce-${this._nonce}' 'unsafe-eval';
    `
      .replace(/\s{2,}/g, ' ')
      .trim()
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
    const recentConfig = new RecentIconsShowController()
    const initialPath = this._processedFiles > 0 ? '/dashboard' : '/'

    return /* html */ `
      <script nonce="${this._nonce}">
        window.ViewExportsSVG = {
          name: "${l10n.t('View Exports SVG')}",
          initConfiguration: {
            _DEFAULT_EXPAND_ALL: ${config.isExpandAll()},
            _DEFAULT_CLICK_TO_OPEN_DEV_TOOLS: ${devConfig.isDefaultOpen()},
            _INITIAL_RENDER_PATH: "${initialPath}",
            _RECENT_ICONS_SHOW: ${recentConfig.isShow()},
            _LANGUAGE: "${env.language ?? 'en'}",
          }
        };
      </script>
    `
  }

  /**
   * Generates the content for the webview.
   */
  private generateContent(): void {
    const { main, favicon, style } = this.getWebviewAssets()
    const script = this.scriptConfiguration()
    const cspContent = this.getCSP()

    this.content = /* html */ `
      <!DOCTYPE html>
      <html lang="${env.language ?? 'en'}">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="Content-Security-Policy" content="${cspContent}" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
          <link rel="icon" type="image/x-icon" href="${favicon}" />
          <link rel="stylesheet" type="text/css" href="${style}" />
          <title>${l10n.t('View Exports SVG')}</title>
        </head>
        <body>
          <div id="root"></div>
          <div id="overflow_widgets_dom_node" class="monaco-editor"></div>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          ${script}
          <script type="module" nonce="${this._nonce}" src="${main}"></script>
        </body>
      </html>
    `
  }
}
