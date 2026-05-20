import type { ExtensionManage } from '@jt-view-exports-svg/core'
import type * as vsc from 'vscode'

import { BaseCache } from './BaseCache'

export class ExtensionThemeCache extends BaseCache<ExtensionManage> {
  constructor(ctx: vsc.ExtensionContext) {
    super(ctx, 'extension_theme')
  }
}
