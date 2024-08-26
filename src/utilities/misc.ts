/**
 * Checks if a value is empty.
 * @param value - The value to check.
 * @returns A boolean indicating whether the value is empty.
 */
export const isEmpty = (
  value: unknown
): value is null | undefined | '' | [] | Record<string, never> => {
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

/**
 * Checks if a given value is a valid date.
 * @param date - The value to be checked.
 * @returns A boolean indicating whether the value is a valid date.
 */
export const isValidDate = (date: Date | string): boolean => {
  try {
    if (date instanceof Date) {
      return !isNaN(date.getTime())
    }

    return !isNaN(new Date(date).getTime())
  } catch {
    return false
  }
}

/**
 * Formats a given date into a string representation based on the specified language.
 * @param date - The date to be formatted.
 * @param language - The language used for formatting the date.
 * @returns The formatted date as a string.
 */
export const formatDate = (
  date: Date,
  language: string,
  options?: Intl.DateTimeFormatOptions
): string => {
  if (!isValidDate(date)) {
    return ''
  }

  // Definir opciones para formatear fecha y hora
  const opt: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }

  const formatter = new Intl.DateTimeFormat(language, options ?? opt)

  return formatter.format(date)
}
