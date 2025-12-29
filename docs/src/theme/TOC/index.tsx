import React, { type ReactNode } from 'react'
import TOCItems from '@theme/TOCItems'
import type { Props } from '@theme/TOC'

import styles from './styles.module.css'
import { cn } from '@site/src/lib/utils'
import Translate from '@docusaurus/Translate'

// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight'
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active'

export default function TOC({ className, ...props }: Props): ReactNode {
  return (
    <section className={cn(styles.tableOfContents, 'thin-scrollbar', className)}>
      <h1 className='m-0 text-base font-medium leading-snug'>
        <Translate
          id='theme.TOCCollapsible.toggleButtonLabel'
          description='The label used by the button on the collapsible TOC component'
        >
          On this page
        </Translate>
      </h1>
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
    </section>
  )
}
