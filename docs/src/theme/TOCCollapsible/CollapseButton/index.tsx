import React, { type ReactNode } from 'react'
import Translate from '@docusaurus/Translate'
import type { Props } from '@theme/TOCCollapsible/CollapseButton'

import { cn } from '@site/src/lib/utils'
import { ChevronDown } from 'lucide-react'

export default function TOCCollapsibleCollapseButton({
  collapsed,
  className,
  ...props
}: Props): ReactNode {
  return (
    <button
      className={cn(
        'w-full flex justify-between gap-2 items-center p-2 hover:bg-primary/5 rounded-md font-medium transition-colors text-sm',
        className
      )}
      {...props}
    >
      <span>
        <Translate
          id='theme.TOCCollapsible.toggleButtonLabel'
          description='The label used by the button on the collapsible TOC component'
        >
          On this page
        </Translate>
      </span>
      <ChevronDown className={cn('transition-transform', collapsed ? '' : 'rotate-180')} />
    </button>
  )
}
