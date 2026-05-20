import type * as vsc from 'vscode'
import { ConfigRegistry } from './base/ConfigRegistry'
import { createConfigs } from './base/createConfigs'

export type AppConfigRegistry = ConfigRegistry<ReturnType<typeof createConfigs>>

export function initConfig(context: vsc.ExtensionContext): void {
  ConfigRegistry.init(createConfigs(), context)
}

export function getConfig(): AppConfigRegistry {
  return ConfigRegistry.getInstance<ReturnType<typeof createConfigs>>()
}
