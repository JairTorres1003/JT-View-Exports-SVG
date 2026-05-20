import { ConfigManager } from './base/ConfigManager'

export class DefaultClickToOpenDevToolsConfig extends ConfigManager<boolean> {
  readonly section = 'defaultClickToOpenDevTools'
  readonly defaultValue = true
}
