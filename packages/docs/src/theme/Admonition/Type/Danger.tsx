import Translate from '@docusaurus/Translate'
import { cn } from '@site/src/lib/utils'
import AdmonitionLayout from '@theme/Admonition/Layout'
import type { Props } from '@theme/Admonition/Type/Danger'
import { OctagonX } from 'lucide-react'
import type { ReactNode } from 'react'

const classNames = 'bg-danger/10 border border-danger'

const defaultProps = {
  icon: <OctagonX />,
  title: (
    <Translate
      id='theme.admonition.danger'
      description='The default label used for the Danger admonition (:::danger)'
    >
      danger
    </Translate>
  ),
}

export default function AdmonitionTypeDanger(props: Props): ReactNode {
  return (
    <AdmonitionLayout {...defaultProps} {...props} className={cn(classNames, props.className)}>
      {props.children}
    </AdmonitionLayout>
  )
}
