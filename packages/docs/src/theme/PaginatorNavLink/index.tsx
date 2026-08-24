import Link from '@docusaurus/Link'
import { Card } from '@heroui/react'
import { cn } from '@site/src/lib/utils'
import type { Props } from '@theme/PaginatorNavLink'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'

export default function PaginatorNavLink({ permalink, title, subLabel, isNext }: Props): ReactNode {
  return (
    <Card
      render={(props) => (
        <Link {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} to={permalink} />
      )}
      role='button'
      className={cn(
        'group w-fit bg-transparent p-3',
        isNext ? 'pagination-nav__link--next ml-auto' : 'pagination-nav__link--prev mr-auto'
      )}
    >
      <Card.Content className='flex flex-row items-end gap-3'>
        {!isNext && (
          <ChevronLeft size={26} className='group-hover:-translate-x-1 transition-transform mb-1' />
        )}
        <div>
          {subLabel && (
            <p className='m-0 text-sm text-muted text-foreground/60 group-hover:text-foreground'>
              {subLabel}
            </p>
          )}
          <p className='m-0 text-lg md:text-xl'>{title}</p>
        </div>
        {isNext && (
          <ChevronRight size={26} className='group-hover:translate-x-1 transition-transform mb-1' />
        )}
      </Card.Content>
    </Card>
  )
}
