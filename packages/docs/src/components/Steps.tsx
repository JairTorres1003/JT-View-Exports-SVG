import { cn } from '@site/src/lib/utils'
import React, { type FC } from 'react'

type StepsItemProps = React.PropsWithChildren<{
  className?: string
  index?: number
  isLast?: boolean
}>

type StepsProps = React.PropsWithChildren<{
  className?: string
}>

const StepItemComponent: FC<StepsItemProps> = ({ children, index, className, isLast }) => {
  return (
    <li className={cn('StepsItem-root mb-10 ml-10 min-h-[3rem] relative', className)}>
      <span
        className={cn(
          'absolute flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 dark:bg-accent/40 text-2xl leading-snug -left-10 translate-x-[-50%] mt-2 z-1'
        )}
      >
        {index}
      </span>
      <span
        className={cn(
          'border-l-2 border-gray-200 dark:border-gray-700 pointer-events-none absolute top-18 -left-10',
          isLast ? 'h-[calc(100%-72px)]' : 'h-[calc(100%-36px)]'
        )}
      />
      <div className='StepsItem-content pt-[0.1px]'>{children}</div>
    </li>
  )
}

const MemoStepItem = React.memo(StepItemComponent)
MemoStepItem.displayName = 'Steps.Item'

/**
 * Type guard to check if a child is a Steps.Item component
 * @param child - The React node to check
 * @returns boolean indicating if the child is a Steps.Item component
 */
const isStepsItem = (child: React.ReactNode): child is React.ReactElement<StepsItemProps> => {
  return (
    React.isValidElement(child) &&
    (child.type as { displayName?: string })?.displayName === 'Steps.Item'
  )
}

const Steps: FC<StepsProps> = ({ children, className }) => {
  const childrenArray = React.Children.toArray(children)

  return (
    <ol className={cn('Steps-root relative ml-6', className)}>
      {React.Children.map(children, (child, index) => {
        if (isStepsItem(child)) {
          return React.cloneElement(child, {
            index: index + 1,
            isLast: index === childrenArray.length - 1,
          })
        }
      })}
    </ol>
  )
}

export { MemoStepItem as StepItem, Steps }
