import React, { type FC } from 'react'
import { cn } from '../lib/utils'

const GridStagger: FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col md:grid-cols-2 auto-rows-[minmax(0,1fr)] gap-6 my-4 pb-4 grid-flow-row-dense md:grid',
        className
      )}
    >
      {React.Children.map(
        children,
        (child: React.ReactElement<{ style?: React.CSSProperties }>, index) => {
          if (!React.isValidElement(child)) return child

          return React.cloneElement(child, {
            key: `grid-stagger-child-[${child.key || index}]`,
            style: {
              ...child.props.style,
              gridArea: `${index + 1} / ${(index % 2) + 1} / ${index + 3} / ${(index % 2) + 2}`,
            },
          })
        }
      )}
    </div>
  )
}

export default GridStagger
