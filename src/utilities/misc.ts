import { minimatch } from 'minimatch'
import { l10n } from 'vscode'

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
 *
 * @param error - The unknown error from which to retrieve the message.
 * @returns The error message.
 */
export const getUnknownError = (error: unknown): string => {
  const unknownError = l10n.t('An unknown error occurred')
  if (isEmpty(error)) return unknownError

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

  return unknownError
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

/**
 * Checks if a path matches any of the given patterns.
 * @param patterns - An array of patterns.
 * @param pathToCheck - The path to check.
 * @returns `true` if the path matches any pattern, `false` otherwise.
 */
export const matchesPattern = (patterns: string[], pathToCheck: string): boolean => {
  return patterns.some((pattern) => minimatch(pathToCheck, pattern))
}
