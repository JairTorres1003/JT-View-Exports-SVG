class PropertyManager {
  private properties: Record<string, any> = {}

  /**
   * Gets a specific property or all properties if no key is specified.
   * @param {string} key - Key of the property to retrieve (optional).
   * @returns {any} - The value of the property or an object with all properties.
   */
  get(key?: string): any {
    if (key) {
      return this.properties[key]
    } else {
      return this.properties
    }
  }

  /**
   * Sets the value of a property.
   * @param {string} key - Key of the property.
   * @param {any} value - Value of the property.
   */
  set(key: string, value: any): void {
    this.properties[key] = value
  }

  /**
   * Clears a specific property or all properties if no key is specified.
   * @param {string} key - Key of the property to clear (optional).
   */
  clean(key?: string): void {
    if (key) {
      delete this.properties[key]
    } else {
      this.properties = {}
    }
  }
}

// Usage of the class
export const propertyManager = new PropertyManager()
