import type { RefObject } from 'react'

/**
 * Sets the value of a ref, which can be a RefObject or a callback function.
 *
 * @template T - The type of the value to set.
 * @param ref - The ref to set. This can be a RefObject, a callback function, or null/undefined.
 * @param value - The value to set the ref to. This can be of type T or null.
 *
 * @remarks
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 */
export function setRef<T>(
  ref: RefObject<T | null> | ((instance: T | null) => void) | null | undefined,
  value: T | null
): void {
  if (typeof ref === 'function') {
    ref(value)
  } else if (ref) {
    ref.current = value
  }
}
