import React, { useEffect, type ReactNode } from 'react'
import Link from '@docusaurus/Link'
import type { Props } from '@theme/TOCItems/Tree'
import { cn } from '@site/src/lib/utils'

// Recursive component rendering the toc tree
function TOCItemTree({ toc, className, linkClassName, isChild }: Props): ReactNode {
  const spanRef = React.useRef<HTMLSpanElement>(null)
  const ulRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (!ulRef.current || !spanRef.current) return

    const updateIndicator = () => {
      const activeLink = ulRef.current?.querySelector(
        '.table-of-contents__link--active'
      ) as HTMLElement | null

      if (!activeLink) return

      const linkRect = activeLink.getBoundingClientRect()
      const ulRect = ulRef.current!.getBoundingClientRect()

      spanRef.current!.style.transform = `translateY(${linkRect.top - ulRect.top}px)`
      spanRef.current!.style.height = `${linkRect.height}px`
      spanRef.current!.style.opacity = '1'
    }

    updateIndicator()

    const observer = new MutationObserver(updateIndicator)

    observer.observe(ulRef.current, {
      subtree: true,
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  if (!toc.length) return null

  return (
    <div className={!isChild ? 'relative border-divider border-l pl-1' : 'pl-4'}>
      {!isChild && (
        <span
          ref={spanRef}
          className={cn(
            'opacity-0 absolute left-0 top-0 bottom-0 w-0.5 bg-[#0d59f2] rounded-md transition-transform duration-300 ease-out pointer-events-none'
          )}
        ></span>
      )}
      <ul className={isChild ? undefined : className} ref={ulRef}>
        {toc.map((heading) => (
          <li key={heading.id}>
            <Link
              to={`#${heading.id}`}
              className={cn(linkClassName ?? undefined, 'px-3 py-1')}
              dangerouslySetInnerHTML={{ __html: heading.value }}
            />
            <TOCItemTree
              isChild
              toc={heading.children}
              className={className}
              linkClassName={linkClassName}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

// Memo only the tree root is enough
export default React.memo(TOCItemTree)
