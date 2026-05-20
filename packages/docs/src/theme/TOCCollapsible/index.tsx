import { Collapsible, useCollapsible } from '@docusaurus/theme-common'
import { cn } from '@site/src/lib/utils'
import type { Props } from '@theme/TOCCollapsible'
import CollapseButton from '@theme/TOCCollapsible/CollapseButton'
import TOCItems from '@theme/TOCItems'
import { type ReactNode, useEffect, useState } from 'react'

export default function TOCCollapsible({
  toc,
  className,
  minHeadingLevel,
  maxHeadingLevel,
}: Props): ReactNode {
  const { collapsed, toggleCollapsed } = useCollapsible({ initialState: true })
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const sentinel = document.getElementById('toc-sticky-sentinel')
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting)
      },
      {
        threshold: 1,
        rootMargin: '-50px 0px 0px 0px', // Adjust based on your --header-height
      }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div id='toc-sticky-sentinel' className='h-px' aria-hidden='true' />
      <div
        className={cn(
          'bg-foreground/3 rounded-lg mt-3 sticky top-[var(--header-height)] overflow-hidden z-30 transition-all duration-300',
          {
            '-ml-4 w-[calc(100%+2rem)] rounded-none border-t border-b border-divider bg-background':
              isSticky,
          },
          className
        )}
      >
        <CollapseButton collapsed={collapsed} onClick={toggleCollapsed} />
        <Collapsible
          lazy
          collapsed={collapsed}
          className='[&_>div]:-ml-1 py-2 [&_li_a]:hover:bg-foreground/5'
        >
          <TOCItems toc={toc} minHeadingLevel={minHeadingLevel} maxHeadingLevel={maxHeadingLevel} />
        </Collapsible>
      </div>
    </>
  )
}
