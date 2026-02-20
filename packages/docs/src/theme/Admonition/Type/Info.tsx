import Translate from '@docusaurus/Translate'
import { cn } from '@site/src/lib/utils'
import AdmonitionLayout from '@theme/Admonition/Layout'
import type { Props } from '@theme/Admonition/Type/Info'
import { CircleAlert } from 'lucide-react'
import type { ReactNode } from 'react'

const classNames = 'bg-info/10 border border-info'

const defaultProps = {
  icon: <CircleAlert />,
  title: (
    <Translate
      id='theme.admonition.info'
      description='The default label used for the Info admonition (:::info)'
    >
      info
    </Translate>
  ),
}

export default function AdmonitionTypeInfo(props: Props): ReactNode {
  return (
    <AdmonitionLayout {...defaultProps} {...props} className={cn(classNames, props.className)}>
      {props.children}
    </AdmonitionLayout>
  )
}
