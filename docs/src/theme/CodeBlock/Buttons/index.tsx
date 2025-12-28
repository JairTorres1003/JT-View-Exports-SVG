import React, { type ReactNode } from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly'

import CopyButton from '@theme/CodeBlock/Buttons/CopyButton'
import WordWrapButton from '@theme/CodeBlock/Buttons/WordWrapButton'
import type { Props } from '@theme/CodeBlock/Buttons'

import { cn } from '@site/src/lib/utils'

import styles from './styles.module.css'

export default function CodeBlockButtons({ className }: Props): ReactNode {
  return (
    <BrowserOnly>
      {() => (
        <div
          className={cn(
            'position absolute top-2 right-2 flex gap-2 z-10 opacity-0 transition-opacity',
            className,
            styles.buttonGroup
          )}
        >
          <WordWrapButton />
          <CopyButton />
        </div>
      )}
    </BrowserOnly>
  )
}
