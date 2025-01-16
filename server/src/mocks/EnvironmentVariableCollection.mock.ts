// @ts-types="npm:@types/vscode@1.60.0"
import { EnvironmentVariableCollection } from 'vscode'

/**
 * Creates a mock implementation of the `EnvironmentVariableCollection` interface.
 * This mock object provides no-op implementations for all methods and properties.
 *
 * @returns {EnvironmentVariableCollection} A mock `EnvironmentVariableCollection` object.
 */
export function createMockEnvironmentVariableCollection(): EnvironmentVariableCollection {
  return {
    append: () => {},
    clear: () => {},
    delete: () => {},
    forEach: () => {},
    description: '',
    get: () => undefined,
    persistent: false,
    prepend: () => {},
    replace: () => {},
    [Symbol.iterator]: function* () {
      yield* Object.entries(this)
    },
  }
}
