import { ExtensionMessage, type WebviewMessage } from '../constants'

/**
 * Replaces the `<placeholder>` in a message type template with a specific value.
 *
 * @param type - Message type template containing `<placeholder>`
 * @param value - The value to substitute for the placeholder
 * @returns The message type with placeholder replaced by `<value>`
 */
export function generateDynamicMessage<T extends ExtensionMessage | WebviewMessage>(
  type: T,
  value: string
): T {
  return type.replace('<placeholder>', `<${value}>`) as T
}

/**
 * Restores a dynamic message to its template form by replacing the value with `<placeholder>`.
 *
 * @param type - Dynamic message type (e.g., `response/theme/<dark>`)
 * @returns The message type with value replaced by `<placeholder>`
 */
export function restoreDynamicMessage<T extends ExtensionMessage | WebviewMessage>(type: T): T {
  return type.replace(/<[^>]+>/, '<placeholder>') as T
}

/**
 * Checks if a message type follows the dynamic pattern and extracts its components.
 *
 * @param type - Message type to check (e.g., `response/theme/<dark>`)
 * @returns `false` if not dynamic, or `{ baseType, dynamicPart }` if dynamic
 */
export function isDynamicMessage(type: string): false | { baseType: string; dynamicPart: string } {
  const dynamicMatch = type.match(/^(.*\/)<([^>]+)>$/)

  if (!dynamicMatch) return false

  return {
    baseType: dynamicMatch[1],
    dynamicPart: dynamicMatch[2],
  }
}

/**
 * Validates if a message type is a valid ExtensionMessage, including dynamic types.
 *
 * @param type - Message type to validate
 * @returns `true` if valid ExtensionMessage, `false` otherwise
 */
export function isValidExtensionMessage(type: unknown): type is ExtensionMessage {
  if (typeof type !== 'string') return false

  let typeAux = type

  const dynamicMatch = typeAux.match(/^(.*\/)<([^>]+)>$/)
  if (dynamicMatch) {
    typeAux = typeAux.replace(/<[^>]+>/, '<placeholder>') as typeof type
  }

  return Object.values(ExtensionMessage).includes(typeAux as ExtensionMessage)
}
