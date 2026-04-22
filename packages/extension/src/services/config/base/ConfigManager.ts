import { type ConfigurationTarget, workspace } from 'vscode'

import { CONFIG_KEY } from '@/constants/misc'

export interface ConfigNotification {
  message: string
  actionLabel?: string
}

export abstract class ConfigManager<T> {
  abstract readonly section: string
  abstract readonly defaultValue: T
  readonly notification?: ConfigNotification

  getValue(): T {
    const cfg = workspace.getConfiguration(CONFIG_KEY)
    const inspected = cfg.inspect<T>(this.section)

    return inspected?.workspaceValue ?? inspected?.globalValue ?? this.defaultValue
  }

  async update(value: T, target: ConfigurationTarget): Promise<void> {
    await workspace.getConfiguration(CONFIG_KEY).update(this.section, value, target)
  }

  async reset(target: ConfigurationTarget): Promise<void> {
    await workspace.getConfiguration(CONFIG_KEY).update(this.section, this.defaultValue, target)
  }

  _invalidate(): void {}
}
