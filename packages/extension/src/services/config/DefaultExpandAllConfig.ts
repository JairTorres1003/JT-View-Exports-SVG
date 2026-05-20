import { ConfigManager } from './base/ConfigManager'

export class DefaultExpandAllConfig extends ConfigManager<boolean> {
  readonly section = 'defaultExpandAll'
  readonly defaultValue = false
}
