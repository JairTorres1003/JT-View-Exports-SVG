import React, { type ReactNode } from 'react'
import useBrokenLinks from '@docusaurus/useBrokenLinks'
import { useAnchorTargetClassName } from '@docusaurus/theme-common'
import type { Props } from '@theme/MDXComponents/Li'
import { cn } from '@site/src/lib/utils'

export default function MDXLi(props: Props): ReactNode | undefined {
  // MDX Footnotes have ids such as <li id="user-content-fn-1-953011">
  useBrokenLinks().collectAnchor(props.id)
  const anchorTargetClassName = useAnchorTargetClassName(props.id)

  return <li className={cn(anchorTargetClassName, 'mt-4', props.className)} {...props} />
}
