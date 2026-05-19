import * as vsc from 'vscode'

import { CONFIG_KEY } from '@/constants/misc'
import { PanelController } from '@/controllers/views/PanelController'

import type { ConfigManager } from './ConfigManager'

export type ConfigMap = Record<string, ConfigManager<unknown>>

export class ConfigRegistry<TConfigs extends ConfigMap> {
  private static _instance: ConfigRegistry<ConfigMap> | null = null
  private readonly configMap: TConfigs

  private constructor(configs: TConfigs, context: vsc.ExtensionContext) {
    this.configMap = configs
    context.subscriptions.push(
      vsc.workspace.onDidChangeConfiguration((event) => this._handleChange(event))
    )
  }

  static init<T extends ConfigMap>(configs: T, context: vsc.ExtensionContext): ConfigRegistry<T> {
    if (!ConfigRegistry._instance) {
      ConfigRegistry._instance = new ConfigRegistry(configs, context)
    }

    return ConfigRegistry._instance as ConfigRegistry<T>
  }

  static getInstance<T extends ConfigMap>(): ConfigRegistry<T> {
    if (!ConfigRegistry._instance) {
      throw new Error(vsc.l10n.t('ConfigRegistry not initialized. Call initConfig(context) first.'))
    }

    return ConfigRegistry._instance as ConfigRegistry<T>
  }

  get<K extends keyof TConfigs>(key: K): TConfigs[K] {
    const config = this.configMap[key as string]

    if (!config) {
      throw new Error(vsc.l10n.t('No config found for key: {key}', { key: String(key) }))
    }

    return config as TConfigs[K]
  }

  private _handleChange(event: vsc.ConfigurationChangeEvent): void {
    for (const config of Object.values(this.configMap)) {
      if (!event.affectsConfiguration(`${CONFIG_KEY}.${config.section}`)) continue

      config._invalidate()

      if (config.notification) {
        const label = config.notification.actionLabel ?? vsc.l10n.t('Reload')
        vsc.window.showInformationMessage(config.notification.message, label).then((selection) => {
          if (selection === label) PanelController.reload()
        })
      }
    }
  }
}
