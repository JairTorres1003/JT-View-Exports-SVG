import { ConfigManager } from './base/ConfigManager'

export class RecentIconsShowConfig extends ConfigManager<boolean> {
  readonly section = 'recentIcons.showIcons'
  readonly defaultValue = true
}

export class RecentIconsLimitConfig extends ConfigManager<number> {
  readonly section = 'recentIcons.limitShowIcons'
  readonly defaultValue = 10
}
