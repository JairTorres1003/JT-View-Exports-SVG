import i18next from '../i18n'

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
    value.constructor === Object &&
    Object.keys(value).length === 0
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
 *
 * @param error - The unknown error from which to retrieve the message.
 * @returns The error message.
 */
export const getUnknownError = (error: unknown): string => {
  if (isEmpty(error)) return i18next.t('errors.UnknownError')

  if (typeof error === 'string') {
    return error
  }

  if (Array.isArray(error) && error.length > 0) {
    return Object.values(error[0] as string[])[0]
  }

  if (error instanceof Error || error instanceof TypeError) {
    return getUnknownError('response' in error ? error.response : error.message)
  }

  if (typeof error === 'object' && error instanceof Object) {
    const auxError = error as Record<string, unknown>

    if ('error_description' in error && !isEmpty(auxError?.error_description)) {
      return getUnknownError(auxError?.error_description)
    }

    return getUnknownError(auxError?.message ?? auxError.data ?? auxError?.statusText)
  }

  return i18next.t('errors.UnknownError')
}
