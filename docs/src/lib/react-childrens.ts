import React from 'react'

/**
 * Finds the first child element of a specific type and returns its children.
 * @template T - The type of React element to search for
 * @param children - The React nodes to search through
 * @param type - The element type to match against
 * @returns The children of the first matching element, or null if no match is found
 */
export function getChildrenByType<
  TChild extends React.ElementType,
  T extends React.ElementType = React.ElementType,
>(children: React.ReactNode, type: T): React.ReactElement<React.ComponentProps<TChild>> | null {
  const result = React.Children.toArray(children).filter((child) =>
    React.isValidElement(child) ? child.type === type : false
  )

  return (result?.[0] as React.ReactElement<React.ComponentProps<T>>)?.props.children || null
}
