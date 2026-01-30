import { translate } from '@docusaurus/Translate'
import { Tooltip } from '@heroui/tooltip'
import { cn } from '@site/src/lib/utils'
import type { Props } from '@theme/DocSidebar/Desktop/CollapseButton'
import { ChevronsLeft } from 'lucide-react'
import type { ReactNode } from 'react'

export default function CollapseButton({ onClick }: Props): ReactNode {
  return (
    <Tooltip
      size='sm'
      placement='right'
      showArrow
      content={translate({
        id: 'theme.docs.sidebar.collapseButtonTitle',
        message: 'Collapse sidebar',
        description: 'The title attribute for collapse button of doc sidebar',
      })}
    >
      <button
        type='button'
        onClick={onClick}
        className={cn(
          'bg-transparent hover:bg-primary/5 py-1 px-2 transition-colors flex items-center justify-end group'
        )}
        aria-label={translate({
          id: 'theme.docs.sidebar.collapseButtonAriaLabel',
          message: 'Collapse sidebar',
          description: 'The title attribute for collapse button of doc sidebar',
        })}
      >
        <ChevronsLeft className='opacity-50 group-hover:opacity-100 transition-opacity' />
      </button>
    </Tooltip>
  )
}
