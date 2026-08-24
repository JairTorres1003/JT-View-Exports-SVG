import { translate } from '@docusaurus/Translate'
import { Button, Tooltip } from '@heroui/react'
import { cn } from '@site/src/lib/utils'
import type { Props } from '@theme/DocSidebar/Desktop/CollapseButton'
import { ChevronsLeft } from 'lucide-react'
import type { ReactNode } from 'react'

export default function CollapseButton({ onClick }: Props): ReactNode {
  return (
    <Tooltip delay={0}>
      <Button
        variant='ghost'
        onClick={onClick}
        className={cn(
          'w-full rounded-none',
          'hover:bg-accent/5 py-2 px-3 transition-colors flex items-center justify-end group'
        )}
        aria-label={translate({
          id: 'theme.docs.sidebar.collapseButtonAriaLabel',
          message: 'Collapse sidebar',
          description: 'The title attribute for collapse button of doc sidebar',
        })}
      >
        <ChevronsLeft className='opacity-50 group-hover:opacity-100 transition-opacity w-6 h-6' />
      </Button>

      <Tooltip.Content showArrow placement='right'>
        <Tooltip.Arrow />
        {translate({
          id: 'theme.docs.sidebar.collapseButtonTitle',
          message: 'Collapse sidebar',
          description: 'The title attribute for collapse button of doc sidebar',
        })}
      </Tooltip.Content>
    </Tooltip>
  )
}
