import { EnvironmentVariableCollection } from 'vscode'

/**
 * Creates a mock implementation of the `EnvironmentVariableCollection` interface.
 * This mock object provides no-op implementations for all methods and properties.
 *
 * @returns {EnvironmentVariableCollection} A mock `EnvironmentVariableCollection` object.
 */
export function createMockEnvironmentVariableCollection(): EnvironmentVariableCollection {
  return {
    append: () => null,
    clear: () => null,
    delete: () => null,
    forEach: () => null,
    description: '',
    get: () => undefined,
    persistent: false,
    prepend: () => null,
    replace: () => null,
    [Symbol.iterator]: function* () {
      yield* Object.entries(this)
    },
  }
}
