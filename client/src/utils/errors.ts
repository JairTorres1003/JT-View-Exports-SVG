import i18next from '../i18n'
import isEmpty from './is-empty'

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
