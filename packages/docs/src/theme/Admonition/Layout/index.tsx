import { Card, CardBody, CardHeader } from '@heroui/card'
import { cn } from '@site/src/lib/utils'
import type { Props } from '@theme/Admonition/Layout'
import type { ReactNode } from 'react'

const iconColors: Record<string, string> = {
  caution: 'text-yellow-500 dark:text-yellow-400',
  danger: 'text-red-500 dark:text-red-400',
  info: 'text-blue-500 dark:text-blue-400',
  note: 'text-purple-500 dark:text-purple-400',
  tip: 'text-teal-500 dark:text-teal-400',
  warning: 'text-yellow-500 dark:text-yellow-400',
}

function AdmonitionHeading({ icon, title, type }: Pick<Props, 'icon' | 'title' | 'type'>) {
  return (
    <CardHeader className='pb-0 gap-3 flex flex-row items-center'>
      {icon ? (
        <div
          className={cn(
            'min-w-10 w-10 h-10 flex items-center justify-center text-primary dark:text-foreground/80',
            iconColors[type] || ''
          )}
        >
          {icon}
        </div>
      ) : null}
      <h3 className={cn('text-xl font-semibold my-2 w-full', iconColors[type] || '')}>{title}</h3>
    </CardHeader>
  )
}

export default function AdmonitionLayout({
  type,
  icon,
  title,
  children,
  className,
}: Props): ReactNode {
  return (
    <Card as='article' className={cn('mt-4', className)}>
      {title || icon ? <AdmonitionHeading title={title} icon={icon} type={type} /> : null}
      {children && <CardBody className='[&_>p:first-of-type]:m-0'>{children}</CardBody>}
    </Card>
  )
}
