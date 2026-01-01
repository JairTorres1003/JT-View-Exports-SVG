import React, { type ReactNode } from 'react'
import { Code, CodeProps } from '@heroui/code'
import { cn } from '@site/src/lib/utils'

export default function CodeInline({ className, ...props }: CodeProps): ReactNode {
  return (
    <Code
      {...props}
      className={cn(
        'bg-primary/10 text-primary dark:bg-foreground/10 dark:text-foreground/80 px-2 py-1',
        className
      )}
    />
  )
}
