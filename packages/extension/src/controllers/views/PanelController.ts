import {
  ExtensionMessage,
  type ExtensionMessageEmitter,
  pathnames,
} from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import { CONFIG_KEY } from '@/constants/misc'
import { createRouter } from '@/messaging/createRouter'
import { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { WebviewContent } from '@/views/WebviewContent'

export class PanelController {
  public static currentPanel: PanelController | undefined
  public static readonly configName: string = CONFIG_KEY

  private readonly _disposables: vsc.Disposable[] = []
  private currentPath = pathnames.main
  private messenger: WebviewMessenger

  private constructor(private readonly viewPanel: vsc.WebviewPanel) {
    this.viewPanel.onDidDispose(() => this.dispose(), null, this._disposables)

    this.messenger = new WebviewMessenger(this.viewPanel.webview, this._disposables)

    this.messenger.setRouter(createRouter(this.messenger))
  }

  /**
   * Renders the current webview panel if it exists, otherwise a new webview panel
   * will be created and displayed.
   * @param context - The extension context.
   */
  public static async render(context: vsc.ExtensionContext): Promise<void> {
    if (PanelController.currentPanel) {
      PanelController.currentPanel.viewPanel.reveal(vsc.ViewColumn.Active)
      return
    }

    const column = vsc.window.activeTextEditor?.viewColumn ?? vsc.ViewColumn.One

    const panel = vsc.window.createWebviewPanel(
      PanelController.configName,
      vsc.l10n.t('View Exports SVG'),
      column,
      {
        enableScripts: true,
        retainContextWhenHidden: true,
        localResourceRoots: [
          vsc.Uri.joinPath(context.extensionUri, 'assets'),
          vsc.Uri.joinPath(context.extensionUri, 'dist'),
        ],
      }
    )

    const controller = new PanelController(panel)

    const content = new WebviewContent(panel.webview, context)
    panel.webview.html = await content.render()

    panel.iconPath = vsc.Uri.joinPath(
      context.extensionUri,
      'assets',
      'JT View Exports SVG - ICON.svg'
    )

    PanelController.currentPanel = controller
  }

  /**
   * Navigate to a specific path in the webview.
   * @param path - The path to navigate to.
   */
  public static navigate(path: string): void {
    const controller = PanelController.currentPanel

    if (!controller || controller.currentPath === path) return

    controller.currentPath = path
    controller.messenger.postMessage(ExtensionMessage.Navigate, { path })
  }

  /**
   * Wrapper around `messenger.postMessage`.
   *
   * `ExtensionMessageEmitter` is an intersection of overloads generated from `ExtensionMessageMap`.
   * TypeScript cannot correctly infer `(type, data)` when implementing this function
   * directly, so the arguments are cast to `Parameters<ExtensionMessageEmitter>` to preserve
   * the overload signatures and prevent incorrect type narrowing.
   */
  public static send: ExtensionMessageEmitter = (type, data) => {
    const args = [type, data] as Parameters<ExtensionMessageEmitter>
    PanelController.currentPanel?.messenger.postMessage(...args)
  }

  /**
   * Reveal the panel and re-send the current path to trigger a webview refresh.
   */
  public static reload(): void {
    const controller = PanelController.currentPanel

    if (!controller) return

    controller.viewPanel.reveal(vsc.ViewColumn.Active)
    controller.messenger.postMessage(ExtensionMessage.Navigate, {
      path: controller.currentPath,
      options: { reload: true },
    })
  }

  /**
   * Dispose of the panel and clean up resources.
   */
  public dispose(): void {
    PanelController.currentPanel = undefined

    this.viewPanel.dispose()

    while (this._disposables.length) {
      const disposable = this._disposables.pop()
      disposable?.dispose()
    }
  }
}
