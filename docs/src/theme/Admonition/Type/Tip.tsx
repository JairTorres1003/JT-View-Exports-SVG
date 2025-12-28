import React, { type ReactNode } from 'react'
import Translate from '@docusaurus/Translate'
import type { Props } from '@theme/Admonition/Type/Tip'
import AdmonitionLayout from '@theme/Admonition/Layout'
import { Lightbulb } from 'lucide-react'
import { cn } from '@site/src/lib/utils'

const classNames = 'bg-success/10 border border-success'

const defaultProps = {
  icon: <Lightbulb />,
  title: (
    <Translate
      id='theme.admonition.tip'
      description='The default label used for the Tip admonition (:::tip)'
    >
      tip
    </Translate>
  ),
}

export default function AdmonitionTypeTip(props: Props): ReactNode {
  return (
    <AdmonitionLayout {...defaultProps} {...props} className={cn(classNames, props.className)}>
      {props.children}
    </AdmonitionLayout>
  )
}
