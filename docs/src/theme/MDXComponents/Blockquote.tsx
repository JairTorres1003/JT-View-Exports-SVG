import { cn } from '@site/src/lib/utils'
import type { ComponentProps } from 'react'

export const Blockquote = ({ className, ...props }: ComponentProps<'blockquote'>) => {
  return (
    <blockquote
      className={cn(
        'my-4 relative px-4 py-3 rounded-md text-sm [&_>p:first-of-type]:m-0 bg-secondary/10 dark:bg-secondary/15',
        'before:absolute before:top-0 before:left-0 before:h-full before:w-1.5 before:rounded-l-md before:bg-primary/10 dark:before:bg-primary/20',
        className
      )}
      {...props}
    />
  )
}
