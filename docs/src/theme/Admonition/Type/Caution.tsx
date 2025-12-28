import React, { type ReactNode } from 'react'
import Translate from '@docusaurus/Translate'
import type { Props } from '@theme/Admonition/Type/Caution'
import AdmonitionLayout from '@theme/Admonition/Layout'
import { TriangleAlert } from 'lucide-react'
import { cn } from '@site/src/lib/utils'

const classNames = 'bg-warning/10 border border-warning'

const defaultProps = {
  icon: <TriangleAlert />,
  title: (
    <Translate
      id='theme.admonition.caution'
      description='The default label used for the Caution admonition (:::caution)'
    >
      caution
    </Translate>
  ),
}

// TODO remove before v4: Caution replaced by Warning
// see https://github.com/facebook/docusaurus/issues/7558
export default function AdmonitionTypeCaution(props: Props): ReactNode {
  return (
    <AdmonitionLayout {...defaultProps} {...props} className={cn(classNames, props.className)}>
      {props.children}
    </AdmonitionLayout>
  )
}
