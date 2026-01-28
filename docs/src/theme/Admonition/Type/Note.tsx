import Translate from '@docusaurus/Translate'
import { cn } from '@site/src/lib/utils'
import AdmonitionLayout from '@theme/Admonition/Layout'
import type { Props } from '@theme/Admonition/Type/Note'
import { Info } from 'lucide-react'
import type { ReactNode } from 'react'

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
