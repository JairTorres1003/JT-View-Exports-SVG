import Translate from '@docusaurus/Translate'
import { cn } from '@site/src/lib/utils'
import AdmonitionLayout from '@theme/Admonition/Layout'
import type { Props } from '@theme/Admonition/Type/Warning'
import { TriangleAlert } from 'lucide-react'
import type { ReactNode } from 'react'

const classNames = 'bg-warning/10 border border-warning'

const defaultProps = {
  icon: <TriangleAlert />,
  title: (
    <Translate
      id='theme.admonition.warning'
      description='The default label used for the Warning admonition (:::warning)'
    >
      warning
    </Translate>
  ),
}

export default function AdmonitionTypeWarning(props: Props): ReactNode {
  return (
    <AdmonitionLayout {...defaultProps} {...props} className={cn(classNames, props.className)}>
      {props.children}
    </AdmonitionLayout>
  )
}
