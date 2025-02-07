import { type Ref, type RefCallback, useMemo } from 'react'

import { setRef } from '../utils/setRef'

/**
 * Custom hook that merges multiple refs into a single ref callback.
 *
 * @template Instance - The type of the instance the refs point to.
 * @param {...Array<Ref<Instance> | undefined>} refs - An array of refs to be merged.
 * @returns {RefCallback<Instance> | null} A ref callback that sets the instance to all provided refs, or null if all refs are undefined.
 *
 * @remarks
 * Takes an array of refs and returns a new ref which will apply any modification to all of the refs.
 * This is useful when you want to have the ref used in multiple places.
 *
 * @example
 * The following example demonstrates how to use the `useForkRef` hook:
 * ```tsx
 * const rootRef = useRef<Instance>(null)
 * const refFork = useForkRef(rootRef, props.ref)
 *
 * return <Root {...props} ref={refFork} />
 * ```
 *
 * @example
 * The following example demonstrates how to use the `useForkRef` hook with `forwardRef`:
 * ```tsx
 * const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>((props, forwardedRef) => {
 *   const rootRef = useRef<HTMLDivElement>(null)
 *   const refFork = useForkRef(rootRef, forwardedRef)
 *
 *   return <div {...props} ref={refFork} />
 * })
 */
export function useForkRef<Instance>(
  ...refs: Array<Ref<Instance> | undefined>
): RefCallback<Instance> | null {
  return useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null
    }

    return (instance) => {
      refs.forEach((ref) => {
        setRef(ref, instance)
      })
    }
  }, refs)
}
