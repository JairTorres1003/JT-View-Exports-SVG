import React, { type ReactNode, type FC, type ReactElement } from 'react'

interface ShowProps {
  readonly children: ReactNode | ReactElement
}

interface ShowWhenProps {
  readonly children: ReactNode | ReactElement
  /**
   * The condition to evaluate.
   */
  isTrue: boolean
}

interface ShowElseProps {
  readonly children: ReactNode | ReactElement
}

/**
 * Renders the first child component that satisfies a condition, or a fallback component if no condition is met.
 * @param children - The child components to render.
 * @returns The first child component that satisfies the condition, or the fallback component if no condition is met.
 * @example
 * ```tsx
 * <Show>
 *   <Show.When isTrue={true}>
 *     <p>Rendered</p>
 *   </Show.When>
 *   <Show.Else>
 *     <p>Not Rendered</p>
 *   </Show.Else>
 * </Show>
 * ```
 */
export const Show: FC<ShowProps> & {
  /**
   * Renders a child component if a condition is met.
   */
  When: FC<ShowWhenProps>
  /**
   * Renders a child component if no other condition is met.
   */
  Else: FC<ShowElseProps>
} = ({ children }) => {
  let when: ReactNode = null
  let otherwise: ReactNode = null

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.props?.isTrue === undefined) {
        otherwise = child
      } else if (!when && child.props.isTrue === true) {
        when = child
      }
    }
  })

  return when ?? otherwise ?? null
}

const ShowWhen: FC<ShowWhenProps> = ({ children, isTrue }): ReactNode => isTrue && children
const ShowElse: FC<ShowElseProps> = ({ children }): ReactNode => children

Show.When = ShowWhen
Show.Else = ShowElse
