import Head from '@docusaurus/Head'
import { cn } from '@site/src/lib/utils'
import type { MDXComponentsObject } from '@theme/MDXComponents'
import type { Props } from '@theme/MDXComponents/Heading'
import { type ComponentProps, lazy } from 'react'

function lazyHeading<T extends Props['as']>(as: T) {
  return lazy(async () => {
    const module = await import('@theme/MDXComponents/Heading')
    return {
      default: (props: ComponentProps<T>) => <module.default as={as} {...props} />,
    }
  })
}

const MDXComponents: MDXComponentsObject = {
  Head,
  details: lazy(async () => await import('@theme/MDXComponents/Details')), // For MD mode support, see https://github.com/facebook/docusaurus/issues/9092#issuecomment-1602902274
  Details: lazy(async () => await import('@theme/MDXComponents/Details')),
  code: lazy(async () => await import('@theme/MDXComponents/Code')),
  a: lazy(async () => await import('@theme/MDXComponents/A')),
  Link: lazy(async () => await import('@theme/MDXComponents/A')),
  pre: lazy(async () => await import('@theme/MDXComponents/Pre')),
  ul: ({ className, ...props }: ComponentProps<'ul'>) => (
    <ul className={cn('list-disc pl-6', className)} {...props} />
  ),
  ol: ({ className, ...props }: ComponentProps<'ol'>) => (
    <ol className={cn('list-decimal pl-6', className)} {...props} />
  ),
  li: lazy(async () => await import('@theme/MDXComponents/Li')),
  img: lazy(async () => await import('@theme/MDXComponents/Img')),
  h1: lazyHeading('h1'),
  h2: lazyHeading('h2'),
  h3: lazyHeading('h3'),
  h4: lazyHeading('h4'),
  h5: lazyHeading('h5'),
  h6: lazyHeading('h6'),
  admonition: lazy(async () => await import('@theme/Admonition')),
  mermaid: lazy(async () => await import('@theme/Mermaid')),
  AdvancedTable: lazy(async () => await import('@site/src/components/MDXComponents/Table')),
  blockquote: lazy(async () => await import('./Blockquote')),
}

export default MDXComponents
