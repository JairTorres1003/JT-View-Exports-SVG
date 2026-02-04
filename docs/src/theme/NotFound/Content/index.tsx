import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import { Button } from '@heroui/button'
import { cn } from '@site/src/lib/utils'
import type { Props } from '@theme/NotFound/Content'
import { Home } from 'lucide-react'
import type { ReactNode } from 'react'

export default function NotFoundContent({ className }: Props): ReactNode {
  return (
    <main
      className={cn(
        'relative flex-grow flex flex-col items-center justify-center px-6 py-12 overflow-hidden',
        className
      )}
    >
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none'></div>
      <div className='z-10 w-full max-w-2xl flex flex-col items-center text-center'>
        <h1 className='tracking-tighter text-[80px] md:text-[120px] font-bold leading-none select-none m-0'>
          404
        </h1>
        <h2 className='text-2xl md:text-3xl font-bold leading-tight tracking-tight mt-2 mb-4'>
          <Translate id='theme.NotFound.title' description='The title of the 404 page'>
            Page Not Found
          </Translate>
        </h2>
        <p className='text-lg font-normal leading-relaxed max-w-md mx-auto mb-10 opacity-70'>
          <Translate id='theme.NotFound.p1' description='The first paragraph of the 404 page'>
            Oops! The documentation you are looking for has moved or does not exist. It might have
            been refactored.
          </Translate>
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 w-full justify-center'>
          <Button as={Link} href='/' size='lg' color='primary' startContent={<Home />}>
            <Translate
              id='theme.NotFound.backToHome'
              description='The label of the button that takes the user back to the home page'
            >
              Back to Home
            </Translate>
          </Button>
        </div>
      </div>
    </main>
  )
}
