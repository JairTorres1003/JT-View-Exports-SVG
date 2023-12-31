import { useState, useEffect } from 'react'

/**
 * Custom hook that debounces a value.
 *
 * @template T - The type of the value.
 * @param {T} value - The value to debounce.
 * @param {number | undefined} delay - The delay in milliseconds.
 * @returns {T} - The debounced value.
 */
export default function useDebounce<T>(value: T, delay: number | undefined): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // Use a timer to delay the update of the value
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Clear the timer if the value or delay changes before the timeout is reached
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
