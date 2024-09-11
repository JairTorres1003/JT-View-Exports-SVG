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

/**
 * Copies the provided text to the clipboard.
 *
 * @param text - The text to be copied to the clipboard.
 */
export const copyToClipboard = async (text: string): Promise<void> => {
  await navigator.clipboard.writeText(text)
}

/**
 * Returns the error message from an unknown error.
 * @param error - The unknown error from which to retrieve the message.
 * @returns The error message.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUnknownError = (error: any): string => {
  if (isEmpty(error)) return 'Unknown error'

  if (typeof error === 'string') {
    return error
  }

  if (Array.isArray(error) && error.length > 0) {
    return Object.values(error[0] as string[])[0]
  }

  if (error instanceof Error || error instanceof TypeError) {
    return error.message
  }

  if ('data' in error) {
    const message = error.data.message
    if (typeof message === 'string') {
      return message
    } else if (Array.isArray(message) && message.length > 0) {
      return Object.values(message[0] as string[])[0]
    }
  }

  if ('message' in error) {
    const message = error.message
    if (typeof message === 'string') {
      return message
    } else if (Array.isArray(message) && message.length > 0) {
      return Object.values(message[0] as string[])[0]
    }
  }

  return 'Unknown error'
}
