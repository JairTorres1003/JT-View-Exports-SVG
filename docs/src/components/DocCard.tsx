import Link from '@docusaurus/Link'
import { Card, CardBody, CardHeader } from '@heroui/card'
import React, { FC } from 'react'

import { cn } from '../lib/utils'
import { ArrowRight } from 'lucide-react'

interface DocCardProps {
  title: React.ReactNode
  description: React.ReactNode
  icon?: React.ReactNode
  className?: string
  children?: React.ReactNode
  link?: string
  style?: React.CSSProperties
}

const DocCard: FC<DocCardProps> = ({
  title,
  description,
  icon,
  className,
  children,
  link,
  style,
}) => {
  return (
    <Card
      shadow='none'
      as={link ? Link : undefined}
      to={link}
      role={link ? 'button' : undefined}
      style={style}
      className={cn(
        'h-full border-2 border-primary/20 p-2 group',
        {
          'hover:border-primary/60 hover:dark:border-primary/40 transition-border hover:bg-content1/80 cursor-pointer':
            link,
        },
        className
      )}
    >
      <CardHeader className='pb-0 gap-3 flex flex-row items-center'>
        {icon ? (
          <div className='rounded min-w-10 w-10 h-10 flex items-center justify-center bg-primary/10 text-primary dark:bg-foreground/10 dark:text-foreground/80'>
            {icon}
          </div>
        ) : null}
        <h3 className='text-xl font-semibold my-2 w-full'>{title}</h3>
        {link ? (
          <div className='min-w-10 w-10 h-10 flex items-center justify-center text-primary dark:text-foreground/80'>
            <ArrowRight size={20} className='group-hover:translate-x-1 transition-transform' />
          </div>
        ) : null}
      </CardHeader>
      <CardBody>
        <p className='m-0'>{children ?? description}</p>
      </CardBody>
    </Card>
  )
}

export default DocCard
