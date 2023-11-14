import { useState, useEffect } from 'react'

const useDebounce = (value: string, delay: number | undefined) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value)

  useEffect(() => {
    // Use a timer to delay the update of the value
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Clear the timer if the value or delay changes before the timeout is reached
    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
