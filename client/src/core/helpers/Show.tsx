import React, { type ReactNode, type FC } from 'react'

type ShowProps = React.PropsWithChildren

type ShowWhenProps = React.PropsWithChildren<{
  /**
   * The condition to evaluate.
   */
  condition: boolean
}>

type ShowElseProps = ShowProps

/**
 * Renders the first child component that satisfies a condition, or a fallback component if no condition is met.
 * @param children - The child components to render.
 * @returns The first child component that satisfies the condition, or the fallback component if no condition is met.
 * @example
 * ```tsx
 * <Show>
 *   <Show.When condition={true}>
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
} = ({ children }: ShowProps) => {
  let when: ReactNode = null
  let otherwise: ReactNode = null

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const clonedChild = child as React.ReactElement<ShowWhenProps | ShowElseProps>

      if (!('condition' in clonedChild.props)) {
        otherwise = clonedChild
      } else if (!when && clonedChild.props.condition) {
        when = child
      }
    }
  })

  return when ?? otherwise ?? null
}

const ShowWhen: FC<ShowWhenProps> = ({ children, condition }): ReactNode => condition && children
const ShowElse: FC<ShowElseProps> = ({ children }): ReactNode => children

Show.When = ShowWhen
Show.Else = ShowElse
