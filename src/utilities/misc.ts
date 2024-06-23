/**
 * Checks if a value is empty.
 * @param value - The value to check.
 * @returns A boolean indicating whether the value is empty.
 */
export const isEmpty = (
  value: unknown
): value is null | undefined | '' | [] | Record<string, unknown> => {
  if (value === null || value === undefined) return true

  if (typeof value === 'string' && value.trim() === '') return true

  if (Array.isArray(value) && value.length === 0) return true

  if (
    typeof value === 'object' &&
    Object.keys(value).length === 0 &&
    value.constructor === Object
  ) {
    return true
  }

  if (value instanceof Error && value.message.trim() === '') return true

  return false
}
