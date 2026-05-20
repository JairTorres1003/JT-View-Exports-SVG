import Translate from '@docusaurus/Translate'
import { cn } from '@site/src/lib/utils'
import AdmonitionLayout from '@theme/Admonition/Layout'
import type { Props } from '@theme/Admonition/Type/Caution'
import { TriangleAlert } from 'lucide-react'
import type { ReactNode } from 'react'

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
