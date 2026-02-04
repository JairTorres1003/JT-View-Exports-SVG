import { cn } from '@site/src/lib/utils'
import React, { type FC } from 'react'

type StepsItemProps = React.PropsWithChildren<{
  className?: string
  index?: number
}>

type StepsProps = React.PropsWithChildren<{
  className?: string
}>

const StepItemComponent: FC<StepsItemProps> = ({ children, index, className }) => {
  return (
    <li className={cn('StepsItem-root mb-10 ml-10 min-h-[3rem]', className)}>
      <span className='absolute flex h-12 w-12 items-center justify-center rounded-full bg-secondary ring-8 ring-secondary-50 text-2xl leading-snug left-0 translate-x-[-50%]'>
        {index}
      </span>
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
  return (
    <ol
      className={cn(
        'Steps-root relative border-l-2 border-gray-200 dark:border-gray-700 ml-6',
        className
      )}
    >
      {React.Children.map(children, (child, index) => {
        if (isStepsItem(child)) {
          return React.cloneElement(child, { index: index + 1 })
        }
      })}
    </ol>
  )
}

export { MemoStepItem as StepItem, Steps }
