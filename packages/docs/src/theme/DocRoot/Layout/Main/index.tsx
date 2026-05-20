import type { Props } from '@theme/DocRoot/Layout/Main'
import type { ReactNode } from 'react'

export default function DocRootLayoutMain({ children }: Props): ReactNode {
  return (
    <main className='w-full flex-grow'>
      <div className='w-full py-4'>{children}</div>
    </main>
  )
}
