import ConfigManagerController from './ConfigManagerController'

import { DEFAULT_ICON_PROPERTIES } from '@/constants/misc'

/**
 * Default properties for the icons.
 * This object provides default values for various properties of the icons.
 */
export class DefaultIconPropertiesController extends ConfigManagerController<
  Record<string, string>
> {
  private readonly defaultIconProperties: Record<string, string> = {}
  private readonly defaultIconPropertiesUser: Record<string, string> = {}

  constructor() {
    super('defaultIconProperties', DEFAULT_ICON_PROPERTIES)
    this.defaultIconProperties = this.get() ?? {}
    this.defaultIconPropertiesUser = this.inspect() ?? {}
  }

  /**
   * Retrieves all properties from the DefaultIconProperties class.
   */
  public getAllProperties(): Record<string, unknown> {
    const properties: Record<string, unknown> = {
      ...this._initialValue,
      ...this.defaultIconProperties,
      ...this.defaultIconPropertiesUser,
    }

    for (const key in properties) {
      try {
        properties[key] = JSON.parse(properties[key] as string)
      } catch (error) {
        if (properties[key] === 'undefined') {
          properties[key] = undefined
        } else if (properties[key] === 'null') {
          properties[key] = null
        }
      }
    }

    return properties
  }
}
