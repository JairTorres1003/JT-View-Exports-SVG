import { type ConfigurationTarget, l10n } from 'vscode'

import ConfigManagerController from './ConfigManagerController'

/**
 * The RecentIcons class.
 * This class provides a method to retrieve the property from the RecentIcons class.
 */
class RecentIconsController<T> extends ConfigManagerController<T> {
  constructor(subSection: string, defaultValue: T) {
    super(`recentIcons.${subSection}`, defaultValue)
  }

  /**
   * @deprecated Use `inspect` instead.
   */
  get(): T {
    throw new Error(l10n.t('Method not implemented'))
  }

  async update(value: T, target: ConfigurationTarget.Global): Promise<void> {
    await super.update(value, target)
  }

  async reset(target: ConfigurationTarget.Global): Promise<void> {
    await super.reset(target)
  }
}

/**
 * Controller class for managing the display of recent icons.
 */
export class RecentIconsShowController extends RecentIconsController<boolean> {
  constructor() {
    super('showIcons', true)
  }

  /**
   * Determines if the recent icons should be shown.
   * @returns {boolean} - Returns true if the recent icons should be shown, otherwise false.
   */
  isShow(): boolean {
    return this.inspect()
  }
}

/**
 * Controller class for managing the limit of recent icons.
 */
export class RecentIconsLimitController extends RecentIconsController<number> {
  constructor() {
    super('limitShowIcons', 10)
  }

  /**
   * Retrieves the limit of recent icons.
   * @returns {number} - Returns the limit of recent icons.
   */
  getLimit(): number {
    return this.inspect()
  }
}
