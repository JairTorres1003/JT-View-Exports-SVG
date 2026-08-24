import { cn } from '@site/src/lib/utils'
import type { ReactNode } from 'react'

export default function CodeInline({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>): ReactNode {
  return (
    <code
      {...props}
      className={cn(
        'h-fit font-mono font-normal inline-block whitespace-nowrap rounded-sm text-sm',
        'bg-accent/10 text-accent dark:bg-foreground/10 dark:text-foreground/80 px-2 py-1',
        className
      )}
    />
  )
}
