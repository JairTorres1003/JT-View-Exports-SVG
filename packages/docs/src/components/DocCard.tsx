import Link from '@docusaurus/Link'
import { Card } from '@heroui/react'
import { ArrowRight } from 'lucide-react'
import { cn } from '../lib/utils'

interface DocCardProps {
  title: React.ReactNode
  description: React.ReactNode
  icon?: React.ReactNode
  className?: string
  children?: React.ReactNode
  link?: string
  style?: React.CSSProperties
}

const CardRender = ({ to, ...props }: { to?: string }) => {
  return to ? <Link to={to} {...props} /> : <div {...props} />
}

const DocCard: React.FC<DocCardProps> = ({
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
      role={link ? 'button' : undefined}
      style={style}
      className={cn(
        'h-full border-2 border-accent/20 p-2 group rounded-md gap-0',
        {
          'hover:border-accent/60 hover:dark:border-accent/40 transition-border hover:bg-surface/80 cursor-pointer':
            link,
        },
        className
      )}
      render={(props) => <CardRender to={link} {...props} />}
    >
      <Card.Header className='p-3 z-10 w-full justify-start shrink-0 overflow-inherit pb-0 gap-3 flex flex-row items-center'>
        {icon ? (
          <div className='rounded min-w-10 w-10 h-10 flex items-center justify-center bg-accent/10 text-accent dark:bg-foreground/10 dark:text-foreground/80'>
            {icon}
          </div>
        ) : null}
        <h3 className='text-xl font-semibold my-2 w-full'>{title}</h3>
        {link ? (
          <div className='min-w-10 w-10 h-10 flex items-center justify-center text-accent dark:text-foreground/80'>
            <ArrowRight size={20} className='group-hover:translate-x-1 transition-transform' />
          </div>
        ) : null}
      </Card.Header>
      <Card.Content className='relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto'>
        {children ?? <p className='m-0'>{description}</p>}
      </Card.Content>
    </Card>
  )
}

export default DocCard
