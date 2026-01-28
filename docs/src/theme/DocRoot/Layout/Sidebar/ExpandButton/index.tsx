import { translate } from '@docusaurus/Translate'
import { Tooltip } from '@heroui/tooltip'
import { cn } from '@site/src/lib/utils'
import type { Props } from '@theme/DocRoot/Layout/Sidebar/ExpandButton'
import { ChevronsRight } from 'lucide-react'
import type { ReactNode } from 'react'

export default function DocRootLayoutSidebarExpandButton({ toggleSidebar }: Props): ReactNode {
  return (
    <Tooltip
      size='sm'
      placement='right'
      showArrow
      content={translate({
        id: 'theme.docs.sidebar.expandButtonTitle',
        message: 'Expand sidebar',
        description: 'The ARIA label and title attribute for expand button of doc sidebar',
      })}
    >
      <button
        type='button'
        onKeyDown={toggleSidebar}
        onClick={toggleSidebar}
        tabIndex={0}
        className={cn(
          'bg-transparent hover:bg-primary/5 py-1 transition-colors flex items-center justify-center group',
          'absolute inset-0 h-full w-full'
        )}
        aria-label={translate({
          id: 'theme.docs.sidebar.expandButtonAriaLabel',
          message: 'Expand sidebar',
          description: 'The ARIA label and title attribute for expand button of doc sidebar',
        })}
      >
        <ChevronsRight className='opacity-50 group-hover:opacity-100 transition-opacity' />
      </button>
    </Tooltip>
  )
}
