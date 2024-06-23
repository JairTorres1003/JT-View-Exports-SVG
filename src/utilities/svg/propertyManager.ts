import { REST_PROPS_KEY } from '../../constants/misc'
import { type ANY_TYPE } from '../../interfaces/misc'

class PropertyManager {
  private properties: Record<string, ANY_TYPE> = {}

  /**
   * Gets a specific property or all properties if no key is specified.
   * @param {string} key - Key of the property to retrieve (optional).
   * @returns {any} - The value of the property or an object with all properties.
   */
  get(key?: string): ANY_TYPE {
    if (key !== undefined) {
      return this.properties[key]
    } else {
      return this.properties
    }
  }

  /**
   * Retrieves the rest properties from the property manager.
   * @returns A record containing the rest properties.
   */
  getRestProps(): Record<string, ANY_TYPE> {
    return this.properties[REST_PROPS_KEY]
  }

  /**
   * Sets the value of a property.
   * @param {string} key - Key of the property.
   * @param {any} value - Value of the property.
   */
  set(key: string, value: ANY_TYPE): void {
    this.properties[key] = value
  }

  /**
   * Sets the value of multiple properties.
   * @param {Record<string, any>} properties - Object with the properties to set.
   */
  setAll(properties: Record<string, ANY_TYPE>): void {
    this.properties = properties
  }

  /**
   * Clears a specific property or all properties if no key is specified.
   * @param {string} key - Key of the property to clear (optional).
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
