import Link from '@docusaurus/Link'
import { Tooltip } from '@heroui/react'
import { cn } from '@site/src/lib/utils'
import type { Props } from '@theme/Tag'
import type { ReactNode } from 'react'

export default function Tag({ permalink, label, count, description }: Props): ReactNode {
  return (
    <Tooltip isDisabled={!description}>
      <Tooltip.Trigger>
        <Link
          rel='tag'
          to={permalink}
          color='accent'
          className={cn(
            'px-2 py-1 rounded-md text-sm font-medium inline-flex items-center gap-1 border transition-colors border-secondary bg-secondary/10',
            'dark:text-foreground dark:bg-foreground/10 dark:border-foreground/20 hover:dark:bg-foreground/20 hover:bg-secondary/20'
          )}
        >
          {label}
          {count && (
            <span className='font-medium text-xs px-1 rounded-xl bg-secondary/40 dark:bg-foreground/20'>
              {count}
            </span>
          )}
        </Link>
      </Tooltip.Trigger>

      <Tooltip.Content showArrow placement='top'>
        <Tooltip.Arrow />
        {description}
      </Tooltip.Content>
    </Tooltip>
  )
}
