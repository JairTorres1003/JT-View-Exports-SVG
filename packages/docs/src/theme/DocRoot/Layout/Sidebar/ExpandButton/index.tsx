import { translate } from '@docusaurus/Translate'
import { Button, Tooltip } from '@heroui/react'
import { cn } from '@site/src/lib/utils'
import type { Props } from '@theme/DocRoot/Layout/Sidebar/ExpandButton'
import { ChevronsRight } from 'lucide-react'
import type { ReactNode } from 'react'

export default function DocRootLayoutSidebarExpandButton({ toggleSidebar }: Props): ReactNode {
  return (
    <Tooltip delay={0}>
      <Button
        variant='ghost'
        onKeyDown={toggleSidebar}
        onClick={toggleSidebar}
        className={cn(
          'hover:bg-accent/5 py-1 transition-colors flex items-center justify-center group',
          'absolute inset-0 h-full w-full'
        )}
        aria-label={translate({
          id: 'theme.docs.sidebar.expandButtonAriaLabel',
          message: 'Expand sidebar',
          description: 'The ARIA label and title attribute for expand button of doc sidebar',
        })}
      >
        <ChevronsRight className='opacity-50 group-hover:opacity-100 transition-opacity h-6 w-6' />
      </Button>

      <Tooltip.Content showArrow placement='right'>
        <Tooltip.Arrow />
        {translate({
          id: 'theme.docs.sidebar.expandButtonTitle',
          message: 'Expand sidebar',
          description: 'The ARIA label and title attribute for expand button of doc sidebar',
        })}
      </Tooltip.Content>
    </Tooltip>
  )
}
