import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import { cn } from '@site/src/lib/utils'
import Image from '@theme/IdealImage'
import type { Props } from '@theme/MDXComponents/Img'
import type { ReactNode } from 'react'

function decodeHTMLEntities(value: string) {
  if (!ExecutionEnvironment.canUseDOM) return value

  const textarea = document.createElement('textarea')
  textarea.innerHTML = value
  return textarea.value
}

export default function MDXImg({ src, alt, className, ...props }: Props): ReactNode {
  return (
    <figure className='w-full m-0 text-center'>
      <Image
        decoding='async'
        loading='lazy'
        {...props}
        alt={alt}
        img={src}
        className={cn('w-full h-auto rounded-lg shadow-md', className)}
      />
      {alt && (
        <figcaption className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
          {decodeHTMLEntities(alt)}
        </figcaption>
      )}
    </figure>
  )
}
