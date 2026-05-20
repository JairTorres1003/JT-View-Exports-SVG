import type { SVGFile } from '@jt-view-exports-svg/core'

class PropertyStore {
  private static instance: PropertyStore
  private properties: Record<string, Record<string, unknown>> = {}

  static getInstance(): PropertyStore {
    if (!PropertyStore.instance) {
      PropertyStore.instance = new PropertyStore()
    }
    return PropertyStore.instance
  }

  /**
   * Gets a specific property or all properties if no key is specified.
   */
  get(file: SVGFile, name: string): Record<string, unknown> {
    return this.properties[`${file.id}:${name}`] || {}
  }

  /**
   * Sets the value of multiple properties.
   * @param {Record<string, any>} properties - Object with the properties to set.
   */
  set(file: SVGFile, name: string, properties: Record<string, unknown>): void {
    this.properties[`${file.id}:${name}`] = properties
  }

  /**
   * Clears a specific property or all properties if no key is specified.
   */
  clear(): void {
    this.properties = {}
  }
}

export const propertyStore = PropertyStore.getInstance()
