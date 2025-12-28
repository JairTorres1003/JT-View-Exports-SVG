import React, { type ReactNode } from 'react'
import Translate from '@docusaurus/Translate'
import type { Props } from '@theme/Admonition/Type/Note'
import AdmonitionLayout from '@theme/Admonition/Layout'
import { Info } from 'lucide-react'
import { cn } from '@site/src/lib/utils'

const classNames = 'bg-[purple]/10 border border-[purple]'

const defaultProps = {
  icon: <Info />,
  title: (
    <Translate
      id='theme.admonition.note'
      description='The default label used for the Note admonition (:::note)'
    >
      note
    </Translate>
  ),
}

export default function AdmonitionTypeNote(props: Props): ReactNode {
  return (
    <AdmonitionLayout {...defaultProps} {...props} className={cn(classNames, props.className)}>
      {props.children}
    </AdmonitionLayout>
  )
}
