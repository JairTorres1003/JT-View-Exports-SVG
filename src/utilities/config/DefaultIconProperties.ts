import ExtensionConfigManager from './configManager'

/**
 * Default properties for the icons.
 * This object provides default values for various properties of the icons.
 */
export class DefaultIconProperties extends ExtensionConfigManager<Record<string, string>> {
  private readonly defaultIconProperties: Record<string, string> = {}
  private readonly defaultIconPropertiesUser: Record<string, string> = {}

  constructor() {
    super('defaultIconProperties', {})
    this.defaultIconProperties = this.get() ?? {}
    this.defaultIconPropertiesUser = this.inspect() ?? {}
  }

  /**
   * Retrieves all properties from the DefaultIconProperties class.
   */
  public getAllProperties(): Record<string, unknown> {
    const properties: Record<string, unknown> = {
      ...this.defaultIconPropertiesUser,
      ...this.defaultIconProperties,
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
