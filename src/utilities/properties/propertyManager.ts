import { REST_PROPS_KEY } from '@/constants/misc'

class PropertyManager {
  private properties: Record<string, unknown> = {}

  /**
   * Gets a specific property or all properties if no key is specified.
   * @param key - Key of the property to retrieve (optional).
   * @returns - The value of the property or an object with all properties.
   */
  get(key?: string): unknown {
    if (key !== undefined) {
      return this.properties[key]
    }

    return this.properties
  }

  /**
   * Retrieves the rest properties from the property manager.
   * @returns A record containing the rest properties.
   */
  getRestProps(): Record<string, unknown> {
    return (this.properties[REST_PROPS_KEY] ?? {}) as Record<string, unknown>
  }

  /**
   * Sets the value of a property.
   * @param key - Key of the property.
   * @param value - Value of the property.
   */
  set(key: string, value: unknown): void {
    this.properties[key] = value
  }

  /**
   * Sets the value of multiple properties.
   * @param {Record<string, any>} properties - Object with the properties to set.
   */
  setAll(properties: Record<string, unknown>): void {
    this.properties = properties
  }

  /**
   * Clears a specific property or all properties if no key is specified.
   * @param key - Key of the property to clear (optional).
   */
  clean(key?: string): void {
    if (key !== undefined) {
      if (key in this.properties) {
        const { [key]: omitted, ...rest } = this.properties
        this.properties = rest
      }
    } else {
      this.properties = {}
    }
  }
}

// Usage of the class
export const propertyManager = new PropertyManager()
