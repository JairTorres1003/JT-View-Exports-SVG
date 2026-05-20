import { ThemeClassNames, usePrismTheme } from '@docusaurus/theme-common'
import { getPrismCssVariables } from '@docusaurus/theme-common/internal'
import clsx from 'clsx'
import {
  type ComponentPropsWithoutRef,
  createElement,
  type ElementType,
  type ReactNode,
} from 'react'

type PolymorphicProps<T extends ElementType> = {
  as: T
} & ComponentPropsWithoutRef<T>

export default function CodeBlockContainer<T extends 'div' | 'pre'>({
  as: As,
  ...props
}: PolymorphicProps<T>): ReactNode {
  const prismTheme = usePrismTheme()
  const prismCssVariables = getPrismCssVariables(prismTheme)

  return createElement(As, {
    ...props,
    style: prismCssVariables,
    className: clsx(props.className, ThemeClassNames.common.codeBlock),
  })
}
